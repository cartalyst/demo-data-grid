/**
 * Part of the Data Grid package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.  It is also available at
 * the following URL: http://www.opensource.org/licenses/BSD-3-Clause
 *
 * @package    Data Grid
 * @version    2.0.0
 * @author     Cartalyst LLC
 * @license    BSD License (3-clause)
 * @copyright  (c) 2011-2014, Cartalyst LLC
 * @link       http://cartalyst.com
 */

;(function ($, window, document, undefined)
{
	'use strict';

	/**
	 * Default settings
	 *
	 * @var array
	 */
	var defaults = {
		source: null,
		threshold: 50,
		throttle: 50,
		method: 'single',
		sortClasses: {
			asc: 'asc',
			desc: 'desc'
		},
		delimiter: ':',
		dateFormatAttribute: 'format',
		sort: {},
		templateSettings: {
			evaluate    : /<%([\s\S]+?)%>/g,
			interpolate : /<%=([\s\S]+?)%>/g,
			escape      : /<%-([\s\S]+?)%>/g
		},
		scroll: null,
		searchTimeout: 800,
		hash: true,
		loader: undefined,
		callback: undefined
	};

	// Hash Settings
	var defaultHash = '';

	// Database date formats
	var dbTimestampFormat     = 'YYYY-MM-DD HH:mm:ss',
		dbDateFormat          = 'YYYY-MM-DD';

	// Search
	var searchTimeout;
	var isSearchActive = false;

	function DataGrid(grid, results, pagination, filters, options)
	{
		var self = this;

		self.key = grid;

		self.grid = '[data-grid="' + grid + '"]';

		self.defaultFilters = [];
		self.appliedFilters = [];

		self.defaultColumn;
		self.defaultDirection;

		self.currentSort = {
			column: null,
			direction: null,
			index: 0
		};

		self.pagination = {
			pageIdx: 1,
			totalCount: null,
			filteredCount: null,
			baseThrottle: null
		};

		// Our Main Elements
		self.$results    = $(results + self.grid);
		self.$pagination = $(pagination + self.grid);
		self.$filters    = $(filters + self.grid);
		self.$body       = $(document.body);

		// Options
		self.opt = $.extend({}, defaults, options);

		// Source
		self.source = self.$results.data('source') || self.opt.source;

		// Safety Check
		if (self.$results.get(0).tagName.toLowerCase() === 'table')
		{
			self.$results = $(results + self.grid).find('tbody');
		}

		// Setup Default Hash
		defaultHash = grid;

		// Setup Base Throttle
		self.pagination.baseThrottle = self.opt.throttle;

		// Check our dependencies
		self.checkDependencies();

		// Initialize Data Grid
		self.init();
	}

	DataGrid.prototype = {

		/**
		 * Initializes Data Grid.
		 *
		 * @return void
		 */
		init: function()
		{
			this.events();

			this.checkHash();
		},

		/**
		 * Checks the Data Grid dependencies.
		 *
		 * @return void
		 */
		checkDependencies: function ()
		{
			if (typeof window._ === 'undefined')
			{
				throw new Error('Underscore is not defined. DataGrid Requires UnderscoreJS v1.5.2 or later to run!');
			}

			var grid = this.grid;

			// Set _ templates interpolate
			_.templateSettings = this.opt.templateSettings;

			// Cache the Underscore Templates
			this.tmpl = {
				results:    _.template($('[data-template="results"]' + grid).html()),
				pagination: _.template($('[data-template="pagination"]' + grid).html()),
				filters:    _.template($('[data-template="filters"]' + grid).html()),
				empty:      _.template($('[data-template="no-results"]' + grid).html())
			};
		},

		/**
		 * Checks the Internet Explorer version.
		 *
		 * @return mixed
		 */
		checkIE: function()
		{
			var undef,
				v = 3,
				div = document.createElement('div'),
				all = div.getElementsByTagName('i');

			while (
				div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				all[0]
			);

			return v > 4 ? v : undef;
		},

		/**
		 * Initializes all the event listeners.
		 *
		 * @return void
		 */
		events: function()
		{
			var self = this;

			var grid = self.grid;

			var options = self.opt;

			$(this).on('dg:update', this.fetchResults);

			if (options.hash)
			{
				$(this).on('dg:hashchange', this.pushHash);
			}

			$(window).on('hashchange', function()
			{
				var routeArr = String(window.location.hash.slice(3)).split('/');

				self.updateOnHash(routeArr);
			});

			this.$body.on('click', '[data-sort]' + grid + ',' + grid + ' [data-sort]', function()
			{
				if (options.method === 'infinite')
				{
					self.$results.empty();
				}

				self.extractSortsFromClick($(this));

				self.refresh();
			});

			this.$body.on('click', '[data-filter-default]' + grid, function(e)
			{
				e.preventDefault();

				self.reset();

				self.extractFiltersFromClick($(this), true);
			});

			this.$body.on('click', '[data-filter]' + grid + ':not([data-filter-default])', function(e)
			{
				e.preventDefault();

				self.applyScroll();

				if ($(this).data('single-filter') !== undefined)
				{
					self.appliedFilters = [];
				}

				if (options.method === 'infinite')
				{
					self.$results.empty();

					self.pagination.pageIdx = 1;
				}

				self.extractFiltersFromClick($(this));
			});

			var dateRangeEl = this.$body.find('[data-range-filter]' + grid + ',' + grid + ' [data-range-filter]');

			$(dateRangeEl).on('change', function(e)
			{
				self.removeRangeFilters($(this));

				self.rangeFilter($(this));
			});

			this.$filters.on('click', '> *', function(e)
			{
				e.preventDefault();

				var idx = $(this).index();

				if (self.appliedFilters[idx].type === 'range')
				{
					self.$body.find('[data-range-filter="' + self.appliedFilters[idx].column + '"]' + grid + ',' + grid + ' [data-range-filter="' + self.appliedFilters[idx].column + '"]').val('');
				}

				self.removeFilters(idx);

				if (options.method === 'infinite')
				{
					self.$results.empty();
				}

				self.$body.find('[data-select-filter]' + grid).find('option:eq(0)').prop('selected', true);

				self.refresh();
			});

			this.$body.on('change', '[data-select-filter]' + grid, function()
			{
				self.removeSelectFilter($(this));

				self.selectFilter($(this));
			});

			this.$pagination.on('click', '[data-page]', function(e)
			{
				e.preventDefault();

				$(self).trigger('dg:switching', self);

				self.applyScroll();

				self.handlePageChange($(this));

				$(self).trigger('dg:switched', self);
			});

			this.$pagination.on('click', '[data-throttle]', function(e)
			{
				e.preventDefault();

				options.throttle += self.pagination.baseThrottle;

				self.refresh();
			});

			this.$body.on('submit keyup', '[data-search]' + grid, function(e)
			{
				e.preventDefault();

				if (e.type === 'submit')
				{
					self.handleSearchOnSubmit($(this));
				}
				else if (e.type === 'keyup' && e.keyCode !== 13 && $(this).find('input').val())
				{
					self.handleLiveSearch($(this));
				}
			});

			this.$body.on('click', '[data-download]', function(e)
			{
				e.preventDefault();

				var type = $(this).data('download');

				document.location = self.source + '?' + self.buildAjaxURI(type);
			});

			var events = this.opt.events;

			if (events !== undefined)
			{
				var eventKeys = _.keys(events);

				_.each(eventKeys, function(key)
				{
					$(self).on('dg:' + key, function()
					{
						events[key](self);
					});
				});
			}
		},

		/**
		 * Check hash.
		 *
		 * @return void
		 */
		checkHash: function()
		{
			var path = String(window.location.hash.slice(3)),
				routes = path.split('/');

			routes = _.compact(routes);

			this.updateOnHash(routes);
		},

		/**
		 * Update on hash change.
		 *
		 * @param  array  routes
		 * @return void
		 */
		updateOnHash: function(routes)
		{
			var self            = this,
				options         = self.opt,
				curIndex        = _.indexOf(routes, self.key),
				curRoute        = '/' + routes.join('/'),
				currentHash     = String(window.location.hash.slice(3)),
				routes          = _.compact(curRoute.split('/grid/')),
				sortedColumn    = options.sort.hasOwnProperty('column'),
				sortedDirection = options.sort.hasOwnProperty('direction'),
				parsedRoute,
				nextItem,
				lastItem;

			this.reset();

			this.initDefaultFilters();

			_.each(routes, function(route)
			{
				parsedRoute = _.compact(route.split('/'));

				if (parsedRoute[0] === self.key)
				{
					// Build Array For Sorts
					lastItem = parsedRoute[(parsedRoute.length - 1)];
					nextItem = parsedRoute[(parsedRoute.length - 2)];

					// Use test to return true/false
					if (/page/g.test(lastItem))
					{
						// Remove Page From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						self.extractPageFromRoute(lastItem);
					}
					else
					{
						self.pagination.pageIdx = 1;
					}

					if ((/desc/g.test(nextItem)) || (/asc/g.test(nextItem)))
					{
						// Remove Sort From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						self.extractSortsFromRoute(nextItem);
					}
					else if ((/desc/g.test(lastItem)) || (/asc/g.test(lastItem)))
					{
						// Remove Sort From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						self.extractSortsFromRoute(lastItem);
					}
					else if (sortedColumn && sortedDirection)
					{
						// Convert sort to string
						var str = self.opt.sort.column + self.opt.delimiter + self.opt.sort.direction;

						self.extractSortsFromRoute(str);
					}
					else
					{
						self.currentSort.direction = '';
						self.currentSort.column    = '';
					}

					// Build Array For Filters
					if (parsedRoute.length !== 0 )
					{
						// Reset filters then rebuild.
						self.appliedFilters = [];

						self.extractFiltersFromRoute(parsedRoute);
					}
					else
					{
						// Reset applied filters if none are set via the hash
						self.appliedFilters = [];

						self.$filters.empty();
					}
				}
			});

			if (currentHash.indexOf(self.key) === -1)
			{
				if (sortedColumn && sortedDirection)
				{
					var str = options.sort.column + options.delimiter + options.sort.direction;

					self.extractSortsFromRoute(str);
				}
			}

			self.refresh();
		},

		/**
		 * Push hash state.
		 *
		 * @return void
		 */
		pushHash: function()
		{
			var self = this,
				base = '',
				parsedRoute = '',
				key = '',
				appended = false,
				path = '',
				finalPath = '',
				currentRoutes = '',
				routesArr = '',
				rtIndex = '',
				currentHash = window.location.hash.slice(3);

			// #!/grid/key/filters/sorts/page
			var filters = self.buildFilterFragment(),
				sort    = self.buildSortFragment(),
				page    = self.buildPageFragment();

			if (filters.length > 1)
			{
				base += filters;
			}

			if (sort.length > 1)
			{
				base += sort;
			}

			if (self.pagination.pageIdx > 1 && page !== undefined)
			{
				base += page;
			}

			if ( ! filters.length > 1 || ! sort.length > 1 || ! self.pagination.pageIdx > 1 && base !== '')
			{
				base = '';
			}
			else
			{
				base = base.length > 1 ? this.key + base : '';
			}

			currentRoutes = String(window.location.hash.slice(3));
			routesArr = _.compact(currentRoutes.split('grid/'));
			rtIndex = -1;

			_.each(routesArr, function(route)
			{
				parsedRoute = route.split('/');
				key = parsedRoute[0];

				// hash exists
				if (key === self.key)
				{
					// keep track of hash index for building the new hash
					rtIndex = _.indexOf(routesArr, route);

					// remove existing hash
					routesArr = _.without(routesArr, route);
				}
			});

			routesArr = _.compact(routesArr);

			for (var i = 0; i < routesArr.length; i++)
			{
				if (i === rtIndex)
				{
					finalPath += base !== '' ? 'grid/' + base : '';

					appended = true;
				}

				finalPath += 'grid/' + routesArr[i];
			}

			finalPath += ! appended && base !== '' ? 'grid/' + base : '';

			path = _.isEmpty(routesArr) ? base : finalPath;

			if (path.length > 1 && path.substr(0, 4) !== 'grid')
			{
				path = 'grid/' + path;
			}

			if (path !== '')
			{
				path = path.replace(/\/\//g, '/');

				if (currentHash !== path)
				{
					window.history.pushState(null, null, '#!/' + path);
				}
			}
			else
			{
				if (currentHash !== '')
				{
					var defaultURI = window.location.protocol + '//' + window.location.host + window.location.pathname;

					window.history.pushState(null, null, defaultURI);
				}
			}
		},

		/**
		 * Apply a filter.
		 *
		 * @param  object  filter
		 * @return void
		 */
		applyFilter: function(filter)
		{
			if (this.searchForFilter(filter) === -1)
			{
				$(this).trigger('dg:applying', this);

				var without = [],
					exists  = false;

				_.each(this.appliedFilters, function(_filter)
				{
					if (JSON.stringify(_filter) === JSON.stringify(filter))
					{
						exists = true;
					}
				});

				if ( ! exists)
				{
					// Apply filters to our global array.
					this.appliedFilters.push(filter);
				}

				// Create a new array without livesearch items
				for (var i = 0; i < this.appliedFilters.length; i++)
				{
					if (this.appliedFilters[i].type !== 'live')
					{
						without.push(this.appliedFilters[i]);
					}
				}

				// Render our filters
				this.$filters.html(this.tmpl['filters']({ filters: without }));

				$(this).trigger('dg:applied', this);
			}
		},

		/**
		 * Apply a default filter.
		 *
		 * @param  object  filter
		 * @return void
		 */
		applyDefaultFilter: function(filter)
		{
			$(this).trigger('dg:applyingDefault', this);

			var exists = false;

			_.each(this.defaultFilters, function(_filter)
			{
				if (JSON.stringify(_filter) === JSON.stringify(filter))
				{
					exists = true;
				}
			});

			if ( ! exists)
			{
				this.defaultFilters.push(filter);
			}

			$(this).trigger('dg:appliedDefault', this);
		},

		/**
		 * Initialize default filters.
		 *
		 * @return void
		 */
		initDefaultFilters: function()
		{
			var self = this;

			if (window.location.hash === '')
			{
				_.each($('[data-filter-default]' + self.grid), function(defaultFilter)
				{
					self.extractFiltersFromClick($(defaultFilter), true);
				});
			}
		},

		/**
		 * Remove filter at index.
		 *
		 * @param  int  idx
		 * @return void
		 */
		removeFilters: function(idx)
		{
			$(this).trigger('dg:removing', this);

			var grid = this.grid;

			this.appliedFilters.splice(idx, 1);

			this.$filters.html(this.tmpl['filters']({ filters: this.appliedFilters }));

			this.goToPage(1);

			$(this).trigger('dg:removed', this);
		},

		/**
		 * Remove filters from group.
		 *
		 * @param  object filters
		 * @return void
		 */
		removeGroupFilters: function(filters)
		{
			var self  = this,
				index = -1,
				filterData;

			var filters = filters.find('[data-filter]');

			_.each(filters, function(filter)
			{
				filterData = {
					column: $(filter).data('filter').split(':')[0],
					value: $(filter).data('filter').split(':')[1],
				}
				index = self.searchForFilter(filterData);

				if (index !== -1)
				{
					self.removeFilters(index);
				}
			});
		},

		/**
		 * Exctracts the current page from the route.
		 *
		 * @param  string  page
		 * @return void
		 */
		extractPageFromRoute: function(page)
		{
			var pageArr = page.split(this.opt.delimiter);

			if (pageArr[1] === '' || pageArr[1] <= 0)
			{
				this.pagination.pageIdx = 1;
			}
			else
			{
				this.pagination.pageIdx = parseInt(pageArr[1], 10);
			}
		},

		/**
		 * Handles the page change from the pagination.
		 *
		 * @param  object  el
		 * @return void
		 */
		handlePageChange: function(el)
		{
			var idx;

			if (this.opt.method === 'infinite')
			{
				idx = el.data('page');

				el.data('page', ++idx);
			}
			else
			{
				idx = el.data('page');
			}

			this.goToPage(idx);

			this.refresh();
		},

		/**
		 * Navigates to the given page.
		 *
		 * @param  int  page
		 * @return void
		 */
		goToPage: function(page)
		{
			this.pagination.pageIdx = isNaN(page = parseInt(page, 10)) ? 1 : page;
		},

		/**
		 * Handles the search on submit.
		 *
		 * @param  object  el
		 * @return void
		 */
		handleSearchOnSubmit: function(el)
		{
			var $input = el.find('input'),
				column = 'all',
				rect = [];

			// Make sure we arn't submiting white space only
			if ( ! $.trim($input.val()).length) return;

			this.isSearchActive = true;

			clearTimeout(searchTimeout);

			var searchSelect = el.find('select:not([data-select-filter])');

			if (searchSelect.length)
			{
				column = searchSelect.val();

				searchSelect.prop('selectedIndex', 0);
			}

			// If theres a live search item with the same value
			// we remove the live search item
			if (this.searchForValue( $input.val(), this.appliedFilters) > -1)
			{
				var idx = this.searchForValue($input.val(), this.appliedFilters);

				this.appliedFilters.splice(idx, 1);
			}

			this.applyFilter({
				column: column,
				value: $('<p/>').text($input.val()).html()
			});

			// Clear results for infinite grids
			if (this.opt.method === 'infinite') this.$results.empty();

			// Reset
			$input.val('').data('old', '');

			this.goToPage(1);

			this.refresh();
		},

		/**
		 * Handles the live search.
		 *
		 * @param  object  el
		 * @return void
		 */
		handleLiveSearch: function(el)
		{
			var rect = [],
				column = 'all',
				self = this;

			if (isSearchActive) return;

			clearTimeout(searchTimeout);

			searchTimeout = setTimeout(function()
			{
				var searchSelect = el.find('select:not([data-select-filter])');

				if (searchSelect.length)
				{
					column = searchSelect.val();
				}

				var $input = el.find('input'),
					curr = $input.val(),
					old = $input.data('old');

				// Remove the old term from the applied filters
				for (var i = 0; i < self.appliedFilters.length; i++)
				{
					if (self.appliedFilters[i].value === old && self.appliedFilters[i] !== undefined && old !== undefined)
					{
						self.appliedFilters.splice(i, 1);
					}
				}

				if (curr.length > 0)
				{
					self.applyFilter({
						column: column,
						value: $('<p/>').text(curr).html(),
						type: 'live'
					});
				}

				// Clear results for infinite grids
				if (self.opt.method === 'infinite')
				{
					self.$results.empty();
				}

				$input.data('old', curr);

				self.goToPage(1);

				self.refresh();

			}, this.opt.searchTimeout);
		},

		/**
		 * Sets the sort direction on the given element.
		 *
		 * @param  object  el
		 * @return void
		 */
		setSortDirection: function(el, direction)
		{
			$(this).trigger('dg:sorting', this);

			var grid = this.grid,
				options = this.opt,
				$el = $('[data-sort]' + grid + ',' + grid + ' [data-sort]'),
				ascClass = options.sortClasses.asc,
				descClass = options.sortClasses.desc;

			// Remove All Classes from other sorts
			$el.not(el).removeClass(ascClass);
			$el.not(el).removeClass(descClass);

			// get the oppsite class from which is set
			var remove = direction === 'asc' ? descClass : ascClass;

			el.removeClass(remove);

			el.addClass(direction);

			$(this).trigger('dg:sorted', this);
		},

		/**
		 * Extracts range filters
		 *
		 * @param  object  filter
		 * @return void
		 */
		extractRangeFilters: function(filter)
		{
			var curFilter = filter.find('[data-range-filter]').data('range-filter') || filter.data('range-filter'),
				startFilterEl = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + curFilter + '"]'),
				endFilterEl   = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

			var startRangeFilter = startFilterEl.data('range-filter'),
				startVal         = startFilterEl.val(),
				endVal           = endFilterEl.val(),
				startLabel       = startFilterEl.data('label'),
				dateFormat       = startFilterEl.data(this.opt.dateFormatAttribute),
				column           = startRangeFilter,
				from             = startVal,
				to               = endVal,
				filterData;

			if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
			{
				from = moment(from).format(dbDateFormat);
				to   = moment(to).format(dbDateFormat);
			}

			var filterData = {
				column: startRangeFilter,
				from: from,
				to: to,
				label: startLabel,
				type: 'range'
			}

			this.applyFilter(filterData);

			this.refresh();

			this.goToPage(1);
		},

		/**
		 * Extracts filters from click.
		 *
		 * @param  string  filters
		 * @param  bool  isDefault
		 * @return void
		 */
		extractFiltersFromClick: function(filterEl, isDefault)
		{
			if (filterEl.data('filter-reset') !== undefined)
			{
				this.reset();
			}
			else if (filterEl.parent().data('filter-reset') !== undefined)
			{
				this.removeGroupFilters(filterEl.parent());
			}
			else if (filterEl.parent().parent().data('filter-reset') !== undefined)
			{
				this.removeGroupFilters(filterEl.parent().parent());
			}

			var filtersArr = filterEl.data('filter').split(', '),
				labels = filterEl.data('label'),
				filter,
				operator,
				filterData,
				labelsArr,
				index,
				label,
				key;

			for (var i = 0; i < filtersArr.length; i++)
			{
				filter = filtersArr[i].split(':');

				if (this.checkOperator(filter[1]))
				{
					operator = filter[1];

					filter.splice(1, 1);
				}

				filterData = {
					column: filter[0],
					value: filter[1],
					operator: operator
				};

				if (this.searchForFilter(filterData) !== -1)
				{
					return true;
				}

				if (typeof labels !== 'undefined')
				{
					labelsArr = labels.split(', ');

					if (index !== -1)
					{
						label = labelsArr[i].split(':');

						filterData = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							colMask: label[1],
							valMask: label[2],
							operator: operator
						};

						if ( ! isDefault)
						{
							this.applyFilter(filterData);
						}
						else
						{
							this.applyDefaultFilter(filterData)
						}
					}
					else
					{
						filterData = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							operator: operator
						};

						if ( ! isDefault)
						{
							this.applyFilter(filterData);
						}
						else
						{
							this.applyDefaultFilter(filterData)
						}
					}
				}
				else
				{
					filterData = {
						column: filter[0],
						value: $('<p/>').text(filter[1]).html(),
						operator: operator
					};

					if ( ! isDefault)
					{
						this.applyFilter(filterData);
					}
					else
					{
						this.applyDefaultFilter(filterData)
					}
				}
			}

			this.refresh();

			this.goToPage(1);
		},

		/**
		 * Extracts sorts from click.
		 *
		 * @param  object  el
		 * @return void
		 */
		extractSortsFromClick: function(el)
		{
			var sortArr = $(el).data('sort').split(':'),
				direction = 'asc';

			if (this.currentSort.column === sortArr[0] && this.currentSort.index < 3 && this.currentSort.column !== this.opt.sort.column)
			{
				this.currentSort.index++;
			}
			else
			{
				if (sortArr[0] !== this.defaultColumn && this.defaultColumn !== '')
				{
					this.currentSort.index = 1;
				}
				else
				{
					this.currentSort.index = 3;
				}
			}

			if (sortArr[0] === this.defaultColumn && this.defaultColumn !== '')
			{
				this.currentSort.index = 1;
			}

			if (typeof sortArr[1] !== 'undefined') direction = sortArr[1];

			if (sortArr[0] === this.currentSort.column)
			{
				if (this.currentSort.direction === 'asc' && this.currentSort.index !== 3)
				{
					this.currentSort.direction = 'desc';
				}
				else if (this.currentSort.index !== 3)
				{
					this.currentSort.direction = 'asc';
				}
				else
				{
					this.currentSort.direction = '';
				}
			}
			else if (sortArr[0] === this.defaultColumn && this.defaultColumn !== '')
			{
				this.currentSort.column = this.defaultColumn;

				this.currentSort.direction = this.defaultDirection === 'asc' ? 'desc' : 'asc';
			}
			else
			{
				this.currentSort.column = sortArr[0];

				this.currentSort.direction = direction;
			}
		},

		/**
		 * Extracts filters from route.
		 *
		 * @param  array  routeArr
		 * @return void
		 */
		extractFiltersFromRoute: function(routeArr)
		{
			var self = this,
				grid = this.grid,
				labels,
				filters;

			routeArr = routeArr.splice(1);

			this.appliedFilters = [];

			labels = $('[data-label][data-filter]' + grid + ':not([data-filter-default])' + ',' + grid + ' [data-label][data-filter]:not([data-filter-default])');

			for (var i = 0; i < routeArr.length; i++)
			{
				filters = routeArr[i].split(this.opt.delimiter);

				for (var x = 0; x < labels.length; x++)
				{
					var label  = $(labels[x]).data('label').split(', '),
						filter = $(labels[x]).data('filter').split(', ');

					for (var j = 0; j < label.length; j++)
					{
						if (filter[j].indexOf(filters[0]) !== -1 && filter[j].indexOf(filters[1]) !== -1)
						{
							if (filters[2] !== undefined)
							{
								if (filter[j].indexOf(filters[2]) === -1) continue;
							}

							var	matchedLabel = label[j].split(':');

							// Check for contained operators
							var hasOperator = false;

							if (this.checkOperator(filters[1]))
							{
								hasOperator = true;
							}

							if (hasOperator)
							{
								var operator = filters[1],
									value = filters[2];

								var filterData = {
									column: filters[0],
									value: $('<p/>').text(value).html(),
									operator: operator,
									colMask: matchedLabel[1],
									valMask: matchedLabel[2]
								};

								self.applyFilter(filterData);
							}
							else
							{
								var filterData = {
									column: filters[0],
									value: $('<p/>').text(filters[1]).html(),
									colMask: matchedLabel[1],
									valMask: matchedLabel[2]
								};

								self.applyFilter(filterData);
							}
						}
					}
				}

				// Check to  make sure filter isn't already set
				var curFilter  = filters[0],
					termsCount = routeArr[i].match(/:/g).length;

				// Range filters
				if ( ! self.checkOperator(routeArr[i]) && termsCount === 2)
				{
					var startFilterEl = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]' + grid + ',' + grid + ' [data-range-start][data-range-filter="' + curFilter + '"]'),
						endFilterEl   = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]' + grid + ',' + grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

					var start      = startFilterEl.data('range-filter'),
						startLabel = startFilterEl.data('label'),
						dateFormat = startFilterEl.data(this.opt.dateFormatAttribute),
						column     = routeArr[i].split(this.opt.delimiter)[0],
						from       = routeArr[i].split(this.opt.delimiter)[1],
						to         = routeArr[i].split(this.opt.delimiter)[2];

					if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
					{
						from = moment(from).format(dbDateFormat);
						to   = moment(to).format(dbDateFormat);
					}

					if (window.moment !== undefined && dateFormat !== undefined)
					{
						startFilterEl.val(moment(from).format(dateFormat));
						endFilterEl.val(moment(to).format(dateFormat));
					}
					else
					{
						startFilterEl.val(from);
						endFilterEl.val(to);
					}

					var filterData = {
						column: column,
						from: from,
						to: to,
						label: startLabel,
						type: 'range'
					};

					self.applyFilter(filterData);
				}
				else
				{
					var filterEl = $('[data-filter*="' +  routeArr[i] + '"]');

					if (termsCount === 2)
					{
						var column     = routeArr[i].split(this.opt.delimiter)[0],
							operator   = routeArr[i].split(this.opt.delimiter)[1],
							value      = routeArr[i].split(this.opt.delimiter)[2];

						var filterData = {
							column: column,
							value: $('<p/>').text(value).html(),
							operator: operator
						};

						if ($(filterEl).data('filter-default') !== undefined)
						{
							self.applyDefaultFilter(filterData);
						}
						else
						{
							self.applyFilter(filterData);
						}
					}
					else
					{
						var curFilter     = this.$body.find('[data-filter*="' + routeArr[i] + '"]' + grid),
							value         = routeArr[i].split(this.opt.delimiter)[1];

						var filterData = {
							column: routeArr[i].split(this.opt.delimiter)[0],
							value: $('<p/>').text(value).html(),
						};

						if ($(curFilter).data('filter-default') !== undefined)
						{
							self.applyDefaultFilter(filterData);
						}
						else
						{
							self.applyFilter(filterData);
						}
					}
				}

			}
		},

		/**
		 * Search for the given value.
		 *
		 * @param  string  key
		 * @param  array   arr
		 * @return int
		 */
		searchForValue: function(key, arr)
		{
			for (var i = 0; i < arr.length; i++)
			{
				if ((arr[i].value === key) || (arr[i].maskOrg === key))
				{
					return i;
				}
			}

			return -1;
		},

		/**
		 * Search for the given filter.
		 *
		 * @param  object  filter
		 * @return int
		 */
		searchForFilter: function(filter)
		{
			var filters = this.appliedFilters;

			for (var i = 0; i < filters.length; i++)
			{
				if (filters[i].value === filter.value &&
					filters[i].operator === filter.operator &&
					(filters[i].column === filter.column || filters[i].maskOrg === filter.column) &&
					filters[i].type === filter.type &&
					filters[i].from === filter.from &&
					filters[i].to === filter.to)
				{
					return i;
				}
			}

			return -1;
		},

		/**
		 * Returns the item index from an array.
		 *
		 * @param  array   array
		 * @param  string  item
		 * @return int
		 */
		_indexOf: function(array, item)
		{
			if (this.checkIE() < 9)
			{
				if (array === null) return -1;

				for (var i = 0; i < array.length; i++)
				{
					if (array[i] === item) return i;
				}

				return -1;
			}

			return array.indexOf(item);
		},

		/**
		 * Extracts sorts from route.
		 *
		 * @param  array  routeArr
		 * @return void
		 */
		extractSortsFromRoute: function(lastItem)
		{
			var sort = lastItem.split(this.opt.delimiter);

			var grid = this.grid;

			var column = sort[0];

			var direction = sort[1];

			// Setup Sort and put index at 1
			if (this.currentSort.column !== column)
			{
				this.currentSort.index = 1;
			}

			this.currentSort.column = column;

			this.currentSort.direction = direction;
		},

		/**
		 * Build page fragment.
		 *
		 * @return string
		 */
		buildPageFragment: function()
		{
			if (this.pagination.pageIdx !== 1 && this.opt.method !== 'infinite')
			{
				return '/page' + this.opt.delimiter + this.pagination.pageIdx + '/';
			}

			return;
		},

		/**
		 * Build filter fragment.
		 *
		 * @return string
		 */
		buildFilterFragment: function()
		{
			var filterFragment = '';

			var delimiter = this.opt.delimiter;

			var filters = [];

			_.each(this.defaultFilters, function(filter)
			{
				filters.push(filter);
			});

			_.each(this.appliedFilters, function(filter)
			{
				filters.push(filter);
			});

			for (var i = 0; i < filters.length; i++)
			{
				var index = filters[i];

				if (index.type !== 'live')
				{
					var parsedValue = $('<p/>').html(index.value).text();

					if (index.mask === 'column')
					{
						if (index.operator !== '' && index.operator !== undefined)
						{
							filterFragment += '/' + index.maskOrg + delimiter + index.operator + delimiter + parsedValue;
						}
						else
						{
							filterFragment += '/' + index.maskOrg + delimiter + parsedValue;
						}
					}
					else if (index.mask === 'value')
					{
						if (index.operator !== '' && index.operator !== undefined)
						{
							filterFragment += '/' + index.maskOrg + delimiter + index.operator + delimiter + parsedValue;
						}
						else
						{
							filterFragment += '/' + index.column + delimiter + index.maskOrg;
						}
					}
					else if (index.type === 'range')
					{
						filterFragment += '/' + index.column + delimiter + index.from + delimiter + index.to;
					}
					else if (index.operator !== undefined && index.operator !== '')
					{
						filterFragment += '/' + index.column + delimiter + index.operator + delimiter + parsedValue;
					}
					else
					{
						filterFragment += '/' + index.column + delimiter + parsedValue;
					}
				}
			}

			return filterFragment + '/';
		},

		/**
		 * Build sort fragment.
		 *
		 * @return string
		 */
		buildSortFragment: function()
		{
			var sortFragment = '';

			var currentColumn = this.currentSort.column;

			var currentDirection = this.currentSort.direction;

			if (currentColumn !== null && currentDirection !== '')
			{
				if (currentColumn !== this.opt.sort.column || currentDirection !== this.opt.sort.direction)
				{
					sortFragment += '/' + currentColumn + this.opt.delimiter + currentDirection;

					return sortFragment + '/';
				}
			}

			return '/';
		},

		/**
		 * Grabs all the results from the server.
		 *
		 * @return void
		 */
		fetchResults: function()
		{
			$(this).trigger('dg:fetching', this);

			var self = this;

			this.showLoader();

			$.ajax({
				url: self.source,
				dataType : 'json',
				data: self.buildAjaxURI()
			})
			.done(function(response)
			{
				if (self.pagination.pageIdx > response.pages_count)
				{
					self.pagination.pageIdx = response.pages_count;

					self.refresh();

					return false;
				}

				self.pagination.filteredCount = response.filtered_count;

				self.pagination.totalCount = response.total_count;

				// Keep infinite results to append load more
				if (self.opt.method !== 'infinite')
				{
					self.$results.empty();
				}

				if (self.opt.method === 'single' || self.opt.method === 'single')
				{
					self.$results.html(self.tmpl['results'](response));
				}
				else
				{
					self.$results.append(self.tmpl['results'](response));
				}

				self.$pagination.html(self.tmpl['pagination'](self.buildPagination(response)));

				if ( ! response.results.length)
				{
					self.$results.html(self.tmpl['empty']());
				}

				if (response.sort !== '')
				{
					var sortEl = $('[data-sort^="' + response.sort + '"]' + self.grid + ',' + self.grid + ' [data-sort="' + response.sort + '"]');

					if (self.buildSortFragment() !== '/')
					{
						self.currentSort.column = response.sort;
						self.currentSort.direction = response.direction;
					}

					if (self.opt.sort.column === undefined)
					{
						self.defaultColumn = response.defaultColumn;
						self.defaultDirection = response.direction;
					}

					self.setSortDirection(sortEl, response.direction);
				}

				self.hideLoader();

				self.callback();

				$(self).trigger('dg:hashchange');

				$(self).trigger('dg:fetched', self);
			})
			.error(function(jqXHR, textStatus, errorThrown)
			{

				console.log('fetchResults' + jqXHR.status, errorThrown);

			});
		},

		/**
		 * Builds the ajax uri.
		 *
		 * @return string
		 */
		buildAjaxURI: function(download)
		{
			var self = this;

			var params = {};
				params.filters   = [];
				params.page      = this.pagination.pageIdx;
				params.method    = this.opt.method;
				params.threshold = this.opt.threshold;
				params.throttle  = this.opt.throttle;

			var filters = [];

			_.each(this.defaultFilters, function(filter)
			{
				filters.push(filter);
			});

			_.each(this.appliedFilters, function(filter)
			{
				filters.push(filter);
			});

			for (var i = 0; i < filters.length; i++)
			{
				var filter = {};

				if ('mask' in filters[i])
				{
					if (filters[i].mask === 'column')
					{
						if (filters[i].operator !== undefined && filters[i].operator !== '')
						{
							filter[filters[i].maskOrg] =
								'|' +
								filters[i].operator +
								$('<p/>').html(filters[i].value).text() +
								'|';
						}
						else if (filters[i].type === 'range')
						{
							if (window.moment !== undefined)
							{
								var from = moment(filters[i].from).startOf('day').format(dbTimestampFormat),
									to   = moment(filters[i].to).endOf('day').format(dbTimestampFormat);
							}
							else
							{
								var from = filters[i].from,
									to   = filters[i].to;
							}

							filter[filters[i].maskOrg] = '|' + '>=' + from + '|' + '<=' + to +'|';
						}
						else
						{
							filter[filters[i].maskOrg] = $('<p/>').html(filters[i].value).text();
						}

						params.filters.push(filter);
					}
					else
					{
						if (filters[i].column === 'all')
						{
							params.filters.push(filters[i].maskOrg);
						}
						else
						{
							if (filters[i].operator !== undefined && filters[i].operator !== null)
							{
								filter[filters[i].column] = '|' + filters[i].operator + filters[i].maskOrg + '|';
								params.filters.push(filter);
							}
							else
							{
								filter[filters[i].column] = filters[i].maskOrg;
								params.filters.push(filter);
							}
						}
					}
				}
				else
				{
					if (filters[i].column === 'all')
					{
						params.filters.push($('<p/>').html(filters[i].value).text());
					}
					else
					{
						if (filters[i].operator !== undefined && filters[i].operator !== '')
						{
							var value = filters[i].value;

							if (self.checkDate(value) && filters[i].operator == '>=')
							{
								value = moment(value).startOf('day').format(dbTimestampFormat);
							}
							else if (self.checkDate(value) && filters[i].operator === '<=')
							{
								value = moment(value).endOf('day').format(dbTimestampFormat);
							}

							filter[filters[i].column] =
								'|' +
								filters[i].operator +
								$('<p/>').html(value).text() +
								'|';
						}
						else if (filters[i].type === 'range')
						{
							if (window.moment !== undefined && self.checkDate(filters[i].from))
							{
								var from = moment(filters[i].from).startOf('day').format(dbTimestampFormat),
									to   = moment(filters[i].to).endOf('day').format(dbTimestampFormat);
							}
							else
							{
								var from = filters[i].from,
									to   = filters[i].to;
							}

							filter[filters[i].column] = '|' + '>=' + from + '|' + '<=' + to +'|';
						}
						else
						{
							filter[filters[i].column] = $('<p/>').html(filters[i].value).text();
						}

						params.filters.push(filter);
					}
				}
			}

			if (this.currentSort.column !== '' && this.currentSort.direction !== '')
			{
				params.sort = this.currentSort.column;
				params.direction = this.currentSort.direction;
			}
			else if (this.opt.sort.column !== undefined && this.opt.sort.direction !== undefined)
			{
				params.sort = this.opt.sort.column;
				params.direction = this.opt.sort.direction;
			}

			if (download)
			{
				params.download = download;
			}

			return $.param(params);
		},

		/**
		 * Builds the pagination.
		 *
		 * @param  object  json
		 * @return object
		 */
		buildPagination: function(json)
		{
			var self = this;
			var rect;

			var page = json.page,
				next = json.next_page,
				prev = json.previous_page,
				total = json.pages_count;

			switch (this.opt.method)
			{
				case 'single':
				case 'group':

					rect = self.buildRegularPagination(page, next, prev, total);

				break;

				case 'infinite':

					rect = self.buildInfinitePagination(page, next, prev, total);

				break;
			}

			return rect;
		},

		/**
		 * Builds regular pagination.
		 *
		 * @param  int  page
		 * @param  int  next
		 * @param  int  prev
		 * @param  int  total
		 * @return object
		 */
		buildRegularPagination: function(page, next, prev, total)
		{
			var params,
				perPage,
				rect = [];

			perPage = this.calculatePagination();

			params = {
				pageStart: perPage === 0 ? 0 : ( this.pagination.pageIdx === 1 ? this.pagination.filteredCount > 0 ? 1 : 0 : ( perPage * (this.pagination.pageIdx - 1 ) + 1)),
				pageLimit: this.pagination.pageIdx === 1 ? perPage > this.pagination.filteredCount ? this.pagination.filteredCount : perPage : ( this.pagination.totalCount < (perPage * this.pagination.pageIdx )) ? this.pagination.filteredCount : perPage * this.pagination.pageIdx < this.pagination.filteredCount ? perPage * this.pagination.pageIdx : this.pagination.filteredCount,
				nextPage: next,
				prevPage: prev,
				page: page,
				active: true,
				totalPages: total,
				totalCount: this.pagination.totalCount,
				filteredCount: this.pagination.filteredCount,
				throttle: this.opt.throttle,
				threshold: this.opt.threshold,
				perPage: perPage
			};

			rect.push(params);

			return { pagination: rect };
		},

		/**
		 * Builds the infinite pagination.
		 *
		 * @param  int  page
		 * @param  int  next
		 * @param  int  prev
		 * @param  int  total
		 * @return object
		 */
		buildInfinitePagination: function(page, next, prev, total)
		{
			var params,
				rect = [];

			params = {
				page: page,
				infinite: true
			};

			rect.push(params);

			if (next === null)
			{
				return { pagination: null };
			}

			return { pagination: rect };
		},

		/**
		 * Calculate results per page.
		 *
		 * @return int
		 */
		calculatePagination: function()
		{
			switch (this.opt.method)
			{
				case 'single':
				case 'infinite':

					return this.opt.throttle;

				case 'group':

					return Math.ceil(this.pagination.filteredCount / this.opt.throttle);
			}
		},

		/**
		 * Removes a range filter.
		 *
		 * @param  object  filter
		 * @return void
		 */
		removeRangeFilters: function(filter)
		{
			var grid = this.grid;

			var startRangeFilter = filter.find('[data-range-start]').data('range-filter') || filter.data('range-filter');

			var endRangeFilter = filter.find('[data-range-end]').data('range-filter') || filter.data('range-filter');

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				if (this.appliedFilters[i].type === 'range' && (this.appliedFilters[i].column === startRangeFilter || this.appliedFilters[i].column === endRangeFilter))
				{
					this.removeFilters(i);
				}
			};
		},

		/**
		 * Removes a select filter.
		 *
		 * @param  object  filter
		 * @return void
		 */
		removeSelectFilter: function(filter)
		{
			var selectFilter     = $(filter).find(':selected').data('filter'),
				label            = $(filter).find(':selected').data('label'),
				operator         = $(filter).find(':selected').data('operator');

			if (selectFilter !== undefined)
			{
				var filterArr = selectFilter.split(':');

				for (var i = 0; i < this.appliedFilters.length; i++)
				{
					if (this.appliedFilters[i].column === filterArr[0]) this.removeFilters(i);
				};
			}
			else
			{
				var col = $(filter).data('select-filter');

				for (var i = 0; i < this.appliedFilters.length; i++)
				{
					if (this.appliedFilters[i].column === col) this.removeFilters(i);
				};
			}
		},

		/**
		 * Applies a select filter.
		 *
		 * @param  object  el
		 * @return void
		 */
		selectFilter: function(el)
		{
			var filter = $(el).find(':selected').data('filter'),
				label = $(el).find(':selected').data('label'),
				operator = $(el).find(':selected').data('operator');

			if (filter !== undefined)
			{
				var filterArr = filter.split(':');

				if (label !== undefined)
				{
					var key = this._indexOf(filter, filter[0]);

					var filterData = {
						column: label,
						value: filterArr[1],
						mask: (key === 0 ? 'column' : 'value'),
						maskOrg: filterArr[0],
					};

					this.applyFilter(filterData);
				}
				else
				{
					var filterData = {
						column: filterArr[0],
						value: filterArr[1]
					};

					this.applyFilter(filterData);
				}
			}
			else
			{
				this.removeSelectFilter($(el));
			}

			this.refresh();
		},

		/**
		 * Applies a range filter.
		 *
		 * @param  object  filter
		 * @return void
		 */
		rangeFilter: function(filter)
		{
			var curFilter     = filter.find('[data-range-filter]').data('range-filter') || filter.data('range-filter'),
				startFilterEl = this.$body.find('[data-range-start][data-range-filter^="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + curFilter + '"]'),
				endFilterEl   = this.$body.find('[data-range-end][data-range-filter^="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

			var startVal = startFilterEl.val(),
				endVal   = endFilterEl.val()

			if (startVal && endVal)
			{
				this.extractRangeFilters(filter);
			}
		},

		/**
		 * Shows the loading bar.
		 *
		 * @return void
		 */
		showLoader: function()
		{
			var grid   = this.grid,
				loader = this.opt.loader;

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).fadeIn();
		},

		/**
		 * Hides the loading bar.
		 *
		 * @return void
		 */
		hideLoader: function()
		{
			var grid   = this.grid,
				loader = this.opt.loader;

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).fadeOut();
		},

		/**
		 * Resets Data Grid.
		 *
		 * @return void
		 */
		reset: function()
		{
			var grid    = this.grid,
				options = this.opt;

			// Elements
			this.$body.find('[data-sort]'+ grid).removeClass(options.sortClasses.asc);
			this.$body.find('[data-sort]'+ grid).removeClass(options.sortClasses.desc);
			this.$body.find('[data-search]'+ grid).find('input').val('');
			this.$body.find('[data-search]'+ grid).find('select').prop('selectedIndex', 0);
			this.$body.find('[data-range-filter]' + grid + ',' + grid +' [data-range-filter]').find('input').val('');

			// Filters
			this.appliedFilters = [];
			this.defaultFilters = [];

			// Sort
			this.currentSort.index = 0;
			this.currentSort.direction = '';
			this.currentSort.column = '';

			// Pagination
			this.pagination.pageIdx = 1;

			// Remove all rendered content
			this.$filters.empty();

			if (this.opt.method === 'infinite')
			{
				this.$results.empty();
			}
		},

		/**
		 * Refreshes Data Grid
		 *
		 * @return void
		 */
		refresh: function()
		{
			$(this).trigger('dg:update');
		},

		/**
		 * Data grid callback.
		 *
		 * @return void
		 */
		callback: function()
		{
			var self = this;

			var callback = this.opt.callback;

			if (callback !== undefined && $.isFunction(callback))
			{
				callback(self);
			}
		},

		/**
		 * Applies the scroll feature animation.
		 *
		 * @return void
		 */
		applyScroll: function()
		{
			var _scroll = this.opt.scroll;

			if (_scroll !== undefined && $.isFunction(_scroll))
			{
				_scroll();
			}

			else if (_scroll)
			{
				$(document.body).animate({ scrollTop: $(_scroll).offset().top }, 200);
			}
		},

		/**
		 * Check for operators.
		 *
		 */
		checkOperator: function(value)
		{
			return />|<|!=|=|<=|>=|<>/.test(value);
		},

		/**
		 * Check for date.
		 *
		 */
		checkDate: function(value)
		{
			return /[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(value);
		},

		/**
		 * Sets the scroll value.
		 *
		 * @param  string  element
		 * @return void
		 */
		setScroll: function(element)
		{
			this.opt.scroll = element;
		},

		/**
		 * Returns the throttle.
		 *
		 * @return int
		 */
		getThrottle: function()
		{
			return this.opt.throttle;
		},

		/**
		 * Sets the throttle.
		 *
		 * @param  int  value
		 * @return void
		 */
		setThrottle: function(value)
		{
			this.opt.throttle = value;
		},

		/**
		 * Returns the threshold.
		 *
		 * @return int
		 */
		getThreshold: function()
		{
			return this.opt.threshold;
		},

		/**
		 * Sets the threshold.
		 *
		 * @param  int  value
		 * @return void
		 */
		setThreshold: function(value)
		{
			this.opt.threshold = value;
		},

	};

	$.datagrid = function(grid, results, pagination, filters, options)
	{
		return new DataGrid(grid, results, pagination, filters, options);
	};

})(jQuery, window, document);
