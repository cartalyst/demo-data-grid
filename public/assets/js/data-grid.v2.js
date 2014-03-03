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
		dividend: 1,
		threshold: 50,
		throttle: 50,
		paginationType: 'single',
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

	// Search
	var searchTimeout;
	var isSearchActive = false;

	function DataGrid(grid, results, pagination, filters, options)
	{

		var self = this;

		self.key = grid;

		self.grid = '[data-grid="' + grid + '"]';

		self.appliedFilters = [];

		self.currentSort = {
			column: null,
			direction: null,
			index: 0
		};

		self.pagi = {
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
		self.pagi.baseThrottle = self.opt.throttle;

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

			// Initialize the event listeners
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

			this.$body.on('click', '[data-sort]' + grid + ',' + grid + ' [data-sort]', function(){

				if (options.paginationType === 'infinite')
				{
					self.$results.empty();
				}

				self.extractSortsFromClick($(this), $(this).data('sort'));

			});

			this.$body.on('click', '[data-filter]' + grid, function(e)
			{

				e.preventDefault();

				self.applyScroll();

				if ($(this).data('single-filter') !== undefined)
				{
					self.appliedFilters = [];
				}

				if (options.paginationType === 'infinite')
				{
					self.$results.empty();

					self.pagi.pageIdx = 1;
				}

				self.extractFiltersFromClick($(this).data('filter'), $(this).data('label'), $(this).data('operator'));

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

				self.removeFilters($(this).index());

				if (options.paginationType === 'infinite')
				{
					self.$results.empty();
				}

				self.$body.find('[data-select-filter]' + grid).find('option:eq(0)').prop('selected', true);

				$(self).trigger('dg:update');

			});

			this.$body.on('change', '[data-select-filter]' + grid, function(){

				self.removeSelectFilter($(this));

				self.selectFilter($(this));

			});

			this.$pagination.on('click', '[data-page]', function(e)
			{

				e.preventDefault();

				self.applyScroll();

				self.handlePageChange($(this));

			});

			this.$pagination.on('click', '[data-throttle]', function(e)
			{

				e.preventDefault();

				options.throttle += self.pagi.baseThrottle;

				$(self).trigger('dg:update');

			});

			this.$body.on('submit keyup', '[data-search]' + grid, function(e){

				e.preventDefault();

				if (e.type === 'submit')
				{
					self.handleSearchOnSubmit($(this));
				}
				else if (e.type === 'keyup' && e.keyCode !== 13)
				{
					self.handleLiveSearch($(this));
				}

			});

		},

		/**
		 * Check hash.
		 *
		 * @return void
		 */
		checkHash: function()
		{

			var path = String(window.location.hash.slice(3));

			var routes = path.split('/');

			routes = _.compact(routes);

			this.updateOnHash(routes);

		},

		/**
		 * Update on hash change.
		 *
		 * @param  array routes
		 * @return void
		 */
		updateOnHash: function(routes)
		{
			// Reset grid
			this.reset();

			if (this.opt.paginationType === 'infinite')
			{
				this.emptyResults();
			}

			var self = this;

			var curIndex = _.indexOf(routes, self.key);

			var curRoute = '/' + routes.join('/');

			var routes = _.compact(curRoute.split('/grid/'));

			_.each(routes, function(route)
			{
				var parsedRoute = route.split('/');

				parsedRoute = _.compact(parsedRoute);

				if (parsedRoute[0] === self.key)
				{
					// Build Array For Sorts
					var lastItem = parsedRoute[(parsedRoute.length - 1)];
					var nextItem = parsedRoute[(parsedRoute.length - 2)];

					// Use test to return true/false
					if (/page/g.test(lastItem))
					{
						// Remove Page From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						self.extractPageFromRoute(lastItem);
					}
					else
					{
						self.pagi.pageIdx = 1;
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
					else if (self.opt.sort.hasOwnProperty('column') &&
							self.opt.sort.hasOwnProperty('direction'))
					{
						// Convert Object to string
						var str = self.opt.sort.column + self.opt.delimiter + self.opt.sort.direction;

						self.extractSortsFromRoute(str);
					}
					else
					{
						self.currentSort.direction = '';
						self.currentSort.column = '';
					}

					// Build Array For Filters
					if (parsedRoute.length !== 0 )
					{
						// We Must Reset then rebuild.
						self.appliedFilters = [];

						self.extractFiltersFromRoute(parsedRoute);
					}
					else
					{
						// Reset Applied Filters if none are set via the hash
						self.appliedFilters = [];

						self.$filters.empty();
					}
				}
			});

			var routePath = routes.join('/grid/'),
				currentHash = String(window.location.hash.slice(3));

			if (currentHash.indexOf(this.key) === -1)
			{
				if (this.opt.sort.hasOwnProperty('column') && this.opt.sort.hasOwnProperty('direction'))
				{
					var str = this.opt.sort.column+this.opt.delimiter+this.opt.sort.direction;

					this.extractSortsFromRoute(str);
				}
			}

			$(this).trigger('dg:update');

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

			if (self.pagi.pageIdx > 1 && page !== undefined)
			{
				base += page;
			}

			if ( ! filters.length > 1 || ! sort.length > 1 || ! self.pagi.pageIdx > 1 && base !== '')
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

			for(var i = 0; i < routesArr.length; i++)
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
				path = path.replace('//', '/');

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
		 * @param  object filter
		 * @return void
		 */
		applyFilter: function(filters)
		{

			var without = [];

			var exists = false;

			window.fff = this.appliedFilters;

			_.each(this.appliedFilters, function(filter)
			{
				if (JSON.stringify(filter) === JSON.stringify(filters))
				{
					exists = true;
				}
			});

			if ( ! exists)
			{
				// Apply filters to our global array.
				this.appliedFilters.push(filters);
			}

			// Create A New Array Without any livesearch items
			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				if (this.appliedFilters[i].type !== 'live')
				{
					without.push(this.appliedFilters[i]);
				}
			}

			// Render Our Filters
			this.$filters.html(this.tmpl['filters']({ filters: without }));

		},


		/**
		 * Remove filter at index.
		 *
		 * @param  int idx
		 * @return void
		 */
		removeFilters: function(idx)
		{

			var grid = this.grid;

			if (this.appliedFilters[idx].type === 'range')
			{
				this.$body.find('[data-range-filter="' + this.appliedFilters[idx].column + '"]' + grid + ',' + grid + ' [data-range-filter="' + this.appliedFilters[idx].column + '"]').val('');
			}

			this.appliedFilters.splice(idx, 1);

			// TODO: See about removing this
			this.$filters.html(this.tmpl['filters']({ filters: this.appliedFilters }));
			this.goToPage(1);

			this.triggerEvent('removeFilter');
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
				this.pagi.pageIdx = 1;
			}
			else
			{
				this.pagi.pageIdx = parseInt(pageArr[1], 10);
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

			switch (this.opt.paginationType)
			{
				case 'single':
				case 'multiple':

					idx = el.data('page');

				break;

				case 'infinite':

					idx = el.data('page');

					el.data('page', ++idx);

				break;
			}

			this.goToPage(idx);

			$(this).trigger('dg:update');

		},

		/**
		 * Navigates to the given page.
		 *
		 * @param  int  page
		 * @return void
		 */
		goToPage: function(page)
		{

			this.pagi.pageIdx = isNaN(page = parseInt(page, 10)) ? 1 : page;

		},

		/**
		 * Handles the search on submit.
		 *
		 * @param  object  el
		 * @return void
		 */
		handleSearchOnSubmit: function(el)
		{

			var $input = el.find('input');
			var column = 'all';
			var rect = [];

			// Make sure we arn't submiting white space only
			if ( ! $.trim($input.val()).length)
			{
				return;
			}

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

			// Safety
			if (this.opt.paginationType === 'infinite')
			{
				this.$results.empty();
			}

			// Reset
			$input.val('').data('old', '');

			this.goToPage(1);

			$(this).trigger('dg:update');

		},

		/**
		 * Handles the live search.
		 *
		 * @param  object  el
		 * @return void
		 */
		handleLiveSearch: function(el)
		{

			var rect = [];
			var column = 'all';
			var self = this;

			if (isSearchActive)
			{
				return;
			}

			clearTimeout(searchTimeout);

			searchTimeout = setTimeout(function()
			{

				var searchSelect = el.find('select:not([data-select-filter])');

				if (searchSelect.length)
				{
					column = searchSelect.val();
				}

				var $input = el.find('input');
				var curr = $input.val();
				var old = $input.data('old');

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

				// Safety
				if (self.opt.paginationType === 'infinite')
				{
					self.$results.empty();
				}

				$input.data('old', curr);

				self.goToPage(1);

				$(self).trigger('dg:update');

			}, this.opt.searchTimeout);

		},

		/**
		 * Sets the sort direction on the given element.
		 *
		 * @param  object  el
		 * @return void
		 */
		setSortDirection: function(el)
		{

			var grid = this.grid;

			var options = this.opt;

			var $el = $('[data-sort]' + grid + ',' + grid + ' [data-sort]');

			var ascClass = options.sortClasses.asc;
			var descClass = options.sortClasses.desc;

			// Remove All Classes from other sorts
			$el.not(el).removeClass(ascClass);
			$el.not(el).removeClass(descClass);

			if (this.currentSort.index === 3)
			{
				el.removeClass(ascClass);

				el.removeClass(descClass);

				// reset our sorting index back to 0
				// and set the column to nothing
				this.currentSort.index = 0;
				this.currentSort.column = '';
			}
			else
			{
				// get the oppsite class from which is set
				var remove = this.currentSort.direction === 'asc' ? descClass : ascClass;

				el.removeClass(remove);

				el.addClass(options.sortClasses[this.currentSort.direction]);
			}

		},

		/**
		 * Extracts range filters
		 *
		 * @param  object filter
		 * @return void
		 */
		extractRangeFilters: function(filter)
		{
			var curFilter = filter.find('[data-range-filter]').data('range-filter') || filter.data('range-filter');

			var startFilterEl = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + curFilter + '"]');
			var endFilterEl   = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

			var startDateFilter = startFilterEl.data('range-filter');
			var startVal        = startFilterEl.val();
			var endVal          = endFilterEl.val();
			var startLabel      = startFilterEl.data('label');

			var dateFormat      = startFilterEl.data(this.opt.dateFormatAttribute);

			var dbFormat = 'YYYY-MM-DD';

			var column = startDateFilter;
			var from   = startVal;
			var to     = endVal;

			if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
			{
				from   = moment(from).format(dbFormat);
				to     = moment(to).format(dbFormat);
			}

			this.applyFilter({
				column: startDateFilter,
				from: from,
				to: to,
				label: startLabel,
				type: 'range'
			});

		},

		/**
		 * Extracts filters from click.
		 *
		 * @param  string filters
		 * @param  string labels
		 * @param  string operator
		 * @return void
		 */
		extractFiltersFromClick: function(filters, labels, operator)
		{

			var filtersArr = filters.split(', ');

			for (var i = 0; i < filtersArr.length; i++)
			{
				var filter = filtersArr[i].split(':');

				if (this.searchForValue(filter[1], this.appliedFilters) > -1)
				{
					return true;
				}

				if (typeof labels !== 'undefined')
				{
					var labelsArr = labels.split(', ');

					if (typeof labelsArr[i] !== 'undefined')
					{
						var label = labelsArr[i].split(':');

						// Return -1 if no match else return index at match
						var key = this._indexOf(filter, label[0]);

						// Map Filter that is equal to the returned key
						// to the label value for renaming
						filter[key] = label[1];

						this.applyFilter({
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							mask: (key === 0 ? 'column' : 'value'),
							maskOrg: label[0],
							operator: operator
						});
					}
					else
					{
						this.applyFilter({
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							operator: operator
						});
					}
				}
				else
				{
					this.applyFilter({
						column: filter[0],
						value: $('<p/>').text(filter[1]).html(),
						operator: operator
					});
				}
			}

			$(this).trigger('dg:update');

			this.goToPage(1);

		},

		/**
		 * Extracts sorts from click.
		 *
		 * @param  object el
		 * @param  string sort
		 * @return void
		 */
		extractSortsFromClick: function(el, sort)
		{

			var sortArr = sort.split(':');

			var direction = 'asc';

			if (this.currentSort.column === sortArr[0])
			{
				this.currentSort.index++;
			}
			else
			{
				// Column Changed so set to first order
				this.currentSort.index = 1;
			}

			if (typeof sortArr[1] !== 'undefined')
			{
				direction = sortArr[1];
			}

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
			else
			{
				this.currentSort.column = sortArr[0];
				this.currentSort.direction = direction;
			}

			this.setSortDirection(el);

			$(this).trigger('dg:update');

		},

		/**
		 * Extracts filters from route.
		 *
		 * @param  array routeArr
		 * @return void
		 */
		extractFiltersFromRoute: function(routeArr)
		{

			var self = this;

			routeArr = routeArr.splice(1);

			this.appliedFilters = [];

			var labels = $('[data-label]'+this.grid+','+this.grid+' [data-label]');

			for (var i = 0; i < routeArr.length; i++)
			{
				var filters = routeArr[i].split(this.opt.delimiter);

				for (var x = 0; x < labels.length; x++)
				{
					if ( $(labels[x]).data('label').indexOf( filters[0] ) !== -1 ||
						$(labels[x]).data('label').indexOf( filters[1] ) !== -1 )
					{
						var matchedLabel = $(labels[x]).data('label').split(':');
						var key = self._indexOf(filters, matchedLabel[0]);

						// Map Filter that is equal to the returned key
						// to the label value for renaming
						filters[key] = matchedLabel[1];

						// Check to make sure filter isn't already set.
						if (self.searchForValue( filters[1], self.appliedFilters) === -1 && $(labels[x]).data('operator') === '')
						{
							// if its not already set, lets set the filter
							self.applyFilter({
								column: filters[0],
								value: $('<p/>').text(filters[1]).html(),
								mask: (key === 0 ? 'column' : 'value'),
								maskOrg: matchedLabel[0]
							});
						}
						else if (self.searchForValue( filters[1], self.appliedFilters) === -1 && $(labels[x]).data('operator') !== '')
						{
							var operator = $(labels[x]).data('operator');

							// if its not already set, lets set the filter
							self.applyFilter({
								column: filters[0],
								value: $('<p/>').text(filters[1]).html(),
								operator: operator,
								mask: (key === 0 ? 'column' : 'value'),
								maskOrg: matchedLabel[0]
							});
						}
					}
				}

				// Check to  make sure filter isn't already set
				if (self.searchForValue( filters[1], self.appliedFilters) === -1)
				{
					var curFilter = filters[0];

					var startFilterEl = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + curFilter + '"]');
					var endFilterEl   = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

					var start      = startFilterEl.data('range-filter');
					var startLabel = startFilterEl.data('label');

					var dateFormat = startFilterEl.data(this.opt.dateFormatAttribute);

					var dbFormat = 'YYYY-MM-DD';

					var column = routeArr[i].split(this.opt.delimiter)[0];
					var from   = routeArr[i].split(this.opt.delimiter)[1];
					var to     = routeArr[i].split(this.opt.delimiter)[2];

					if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
					{
						from   = moment(from).format(dbFormat);
						to     = moment(to).format(dbFormat);
					}

					if (window.moment !== undefined && dateFormat)
					{
						startFilterEl.val(moment(from).format(dateFormat));
						endFilterEl.val(moment(to).format(dateFormat));
					}
					else
					{
						startFilterEl.val(from);
						endFilterEl.val(to);
					}

					if (curFilter === start)
					{
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
						var filterEl = $('[data-filter="' +  filters.join(self.opt.delimiter) + '"]');

						if ( filterEl.data('operator') !== '' && filterEl.data('operator') !== undefined)
						{
							// If its not already set, lets set the filter
							self.applyFilter({
								column: routeArr[i].split(this.opt.delimiter)[0],
								value: $('<p/>').text(routeArr[i].split(this.opt.delimiter)[1]).html(),
								operator: filterEl.data('operator')
							});
						}
						else
						{
							// If its not already set, lets set the filter
							self.applyFilter({
								column: routeArr[i].split(this.opt.delimiter)[0],
								value: $('<p/>').text(routeArr[i].split(this.opt.delimiter)[1]).html(),
							});
						}
					}

				}

			}

		},

		/**
		 * Search for the given value.
		 *
		 * @param  string key
		 * @param  array arr
		 * @return int
		 */
		searchForValue: function(key, arr)
		{

			for (var i = 0; i < arr.length; i++)
			{
				if ((arr[i].value === key) ||
					(arr[i].maskOrg === key))
				{
					return i;
				}
			}

			return -1;

		},

		/**
		 * Returns the item index from an array.
		 *
		 * @param  array array
		 * @param  string item
		 * @return int
		 */
		_indexOf: function(array, item)
		{

			if (this.checkIE() < 9)
			{
				if (array === null)
				{
					return -1;
				}

				for (var i = 0; i < array.length; i++)
				{
					if (array[i] === item)
					{
						return i;
					}
				}

				return -1;
			}

			return array.indexOf(item);

		},

		/**
		 * Extracts sorts from route.
		 *
		 * @param  array routeArr
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

			var el = $('[data-sort^="' + column + '"]' + grid + ',' + grid + ' [data-sort="' + column + '"]');

			this.setSortDirection(el);

		},

		/**
		 * Build page fragment.
		 *
		 * @return string
		 */
		buildPageFragment: function()
		{

			if (this.pagi.pageIdx !== 1 && this.opt.paginationType !== 'infinite')
			{
				return '/page' + this.opt.delimiter + this.pagi.pageIdx + '/';
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

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				var index = this.appliedFilters[i];

				if (index.type !== 'live')
				{
					var parsedValue = $('<p/>').html(index.value).text();

					if (index.mask === 'column')
					{
						filterFragment += '/' + index.maskOrg + delimiter + parsedValue;
					}
					else if (index.mask === 'value')
					{
						filterFragment += '/' + index.column + delimiter + index.maskOrg;
					}
					else if (index.type !== undefined)
					{
						filterFragment += '/' + index.column + delimiter + index.from + delimiter + index.to;
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

			var self = this;

			this.showLoader();

			$.ajax({
				url: self.source,
				dataType : 'json',
				data: self.buildAjaxURI()
			})
			.done(function(response)
			{

				if (self.pagi.pageIdx > response.pages_count)
				{
					self.pagi.pageIdx = response.pages_count;

					$(self).trigger('dg:update');

					return false;
				}

				self.pagi.filteredCount = response.filtered_count;

				self.pagi.totalCount = response.total_count;

				// Keep infinite results to append load more
				if (self.opt.paginationType !== 'infinite')
				{
					self.$results.empty();
				}

				if (self.opt.paginationType === 'single' || self.opt.paginationType === 'multiple')
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

				self.hideLoader();

				self.callback();

				$(self).trigger('dg:hashchange');
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
		buildAjaxURI: function()
		{

			var self = this;

			var params = {};
				params.filters   = [];
				params.page      = this.pagi.pageIdx;
				params.dividend  = this.opt.dividend;
				params.threshold = this.opt.threshold;
				params.throttle  = this.opt.throttle;

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				var filter = {};

				if ('mask' in this.appliedFilters[i])
				{
					if (this.appliedFilters[i].mask === 'column')
					{
						filter[this.appliedFilters[i].maskOrg] = $('<p/>').html(this.appliedFilters[i].value).text();

						params.filters.push(filter);
					}
					else
					{
						if (this.appliedFilters[i].column === 'all')
						{
							params.filters.push(this.appliedFilters[i].maskOrg);
						}
						else
						{
							if (this.appliedFilters[i].operator !== undefined && this.appliedFilters[i].operator !== null)
							{
								filter[this.appliedFilters[i].column] = '|' + this.appliedFilters[i].operator + this.appliedFilters[i].maskOrg + '|';
								params.filters.push(filter);
							}
							else
							{
								filter[this.appliedFilters[i].column] = this.appliedFilters[i].maskOrg;
								params.filters.push(filter);
							}
						}
					}
				}
				else
				{
					if (this.appliedFilters[i].column === 'all')
					{
						params.filters.push($('<p/>').html(this.appliedFilters[i].value).text());
					}
					else
					{
						if (this.appliedFilters[i].operator !== undefined && this.appliedFilters[i].operator !== null)
						{
							filter[this.appliedFilters[i].column] = '|' + this.appliedFilters[i].operator + $('<p/>').html(this.appliedFilters[i].value).text() + '|';
						}
						else if (this.appliedFilters[i].type === 'range')
						{
							if (window.moment !== undefined)
							{
								var dbFormat = 'YYYY-MM-DD';
								var from     = moment(this.appliedFilters[i].from).format(dbFormat);
								var to       = moment(this.appliedFilters[i].to).format(dbFormat);
							}
							else
							{
								var from = this.appliedFilters[i].from;
								var to   = this.appliedFilters[i].to;
							}

							filter[this.appliedFilters[i].column] = '|' + '>' + from + '|' + '<' + to +'|';
						}
						else
						{
							filter[this.appliedFilters[i].column] = $('<p/>').html(this.appliedFilters[i].value).text();
						}

						params.filters.push(filter);
					}
				}
			}

			params.sort = this.currentSort.column;

			params.direction = this.currentSort.direction;

			return $.param(params);
		},

		/**
		 * Builds the pagination.
		 *
		 * @param  object json
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

			switch (this.opt.paginationType)
			{
				case 'single' :
					rect = self.buildSinglePagination(page, next, prev, total);
				break;

				case 'multiple' :
					rect = self.buildMultiplePagination(page, next, prev, total);
				break;

				case 'infinite' :
					rect = self.buildInfinitePagination(page, next, prev, total);
				break;
			}

			return rect;

		},

		/**
		 * Builds single pagination.
		 *
		 * @param  int  page
		 * @param  int  next
		 * @param  int  prev
		 * @param  int  total
		 * @return object
		 */
		buildSinglePagination: function(page, next, prev, total)
		{

			var params,
				perPage,
				rect = [];

			if (this.pagi.filteredCount !== this.pagi.totalCount)
			{
				perPage = this.resultsPerPage(this.pagi.filteredCount, total);
			}
			else
			{
				perPage = this.resultsPerPage(this.pagi.totalCount, total);
			}

			params = {
				pageStart: perPage === 0 ? 0 : ( this.pagi.pageIdx === 1 ? 1 : ( perPage * (this.pagi.pageIdx - 1 ) + 1)),
				pageLimit: this.pagi.pageIdx === 1 ? perPage : ( this.pagi.totalCount < (perPage * this.pagi.pageIdx )) ? this.pagi.filteredCount : perPage * this.pagi.pageIdx < this.pagi.filteredCount ? perPage * this.pagi.pageIdx : this.pagi.filteredCount,
				nextPage: next,
				prevPage: prev,
				page: page,
				active: true,
				single: true,
				totalPages: total,
				totalCount: this.pagi.totalCount,
				filteredCount: this.pagi.filteredCount
			};

			rect.push(params);

			return { pagination: rect };

		},

		/**
		 * Builds multiple pagination.
		 *
		 * @param  int  page
		 * @param  int  next
		 * @param  int  prev
		 * @param  int  total
		 * @return object
		 */
		buildMultiplePagination: function(page, next, prev, total)
		{

			var params,
				perPage,
				rect = [];

			if ((this.pagi.totalCount > this.opt.throttle) && (this.pagi.filteredCount > this.opt.throttle))
			{
				perPage = this.resultsPerPage(this.opt.throttle, this.opt.dividend);

				for (var i = 1; i <= this.opt.dividend; i++)
				{
					params = {
						pageStart: perPage === 0 ? 0 : ( i === 1 ? 1 : (perPage * (i - 1) + 1)),
						pageLimit: i === 1 ? perPage : (this.pagi.totalCount < this.opt.throttle && i === this.opt.dividend) ? this.pagi.totalCount : perPage * i,
						nextPage: next,
						prevPage: prev,
						page: i,
						active: this.pagi.pageIdx === i ? true : false,
						throttle: false,
						totalCount: this.pagi.totalCount,
						filteredCount: this.pagi.filteredCount
					};

					rect.push(params);
				}

				if (this.pagi.totalCount > this.opt.throttle)
				{
					params = {
						throttle: true
					};

					rect.push(params);
				}
			}
			else
			{

				if (this.pagi.filteredCount !== this.pagi.totalCount)
				{
					perPage = this.resultsPerPage(this.pagi.filteredCount, total);
				}
				else
				{
					perPage = this.resultsPerPage(this.pagi.totalCount, total);
				}

				for (var i = 1; i <= total; i++)
				{

					params = {
						pageStart: perPage === 0 ? 0 : ( i === 1 ? 1 : (perPage * (i - 1) + 1)),
						pageLimit: i === 1 ? perPage : (this.pagi.totalCount < this.opt.throttle && i === this.opt.dividend) ? this.pagi.totalCount : perPage * i,
						nextPage: next,
						prevPage: prev,
						page: i,
						active: this.pagi.pageIdx === i ? true : false,
						totalCount: this.pagi.totalCount,
						filteredCount: this.pagi.filteredCount
					};

					rect.push(params);
				}

			}

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
		 * @param  int  dividend
		 * @param  int  divisor
		 * @return int
		 */
		resultsPerPage: function(dividend, divisor)
		{

			var pp = Math.ceil(dividend / this.opt.dividend);
			var max = Math.floor(this.opt.throttle / this.opt.dividend);

			if (pp > max)
			{
				pp = max;
			}

			return pp;

		},

		/**
		 * Removes a range filter.
		 *
		 * @param  object filter
		 * @return void
		 */
		removeRangeFilters: function(filter)
		{

			var grid = this.grid;

			var startDateFilter = this.$body.find('[data-range-start]' + grid + ',' + grid + ' [data-range-start]').data('range-filter');

			var endDateFilter = this.$body.find('[data-range-end]' + grid + ',' + grid + ' [data-range-end]').data('range-filter');

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				if (this.appliedFilters[i].type === 'range' && (this.appliedFilters[i].column === startDateFilter || this.appliedFilters[i].column === endDateFilter))
				{
					this.appliedFilters.splice(i, 1);
				}
			};

		},

		/**
		 * Removes a select filter.
		 *
		 * @param  object filter
		 * @return void
		 */
		removeSelectFilter: function(filter)
		{
			var selectFilter = $(filter).find(':selected').data('filter'),
				label = $(filter).find(':selected').data('label'),
				operator = $(filter).find(':selected').data('operator');

			if (selectFilter !== undefined)
			{
				var filterArr = selectFilter.split(':');

				for (var i = 0; i < this.appliedFilters.length; i++)
				{
					if (this.appliedFilters[i].column === filterArr[0])
					{
						this.removeFilters(i);
					}
				};
			}
			else
			{
				var col = $(filter).data('select-filter');

				for (var i = 0; i < this.appliedFilters.length; i++)
				{
					if (this.appliedFilters[i].column === col)
					{
						this.removeFilters(i);
					}
				};
			}

		},

		/**
		 * Applies a select filter.
		 *
		 * @param  object el
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
					this.applyFilter({
						column: filterArr[0],
						label: label,
						value: filterArr[1]
					});
				}
				else
				{
					this.applyFilter({
						column: filterArr[0],
						value: filterArr[1]
					});
				}
				// this.extractFiltersFromClick(filter, label, operator);
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
		 * @param  object filter
		 * @return void
		 */
		rangeFilter: function(filter)
		{
			var curFilter = filter.find('[data-range-filter]').data('range-filter') || filter.data('range-filter');

			var startFilterEl = this.$body.find('[data-range-start][data-range-filter^="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + curFilter + '"]');
			var endFilterEl   = this.$body.find('[data-range-end][data-range-filter^="' + curFilter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + curFilter + '"]');

			var startVal = startFilterEl.val();
			var endVal   = endFilterEl.val()

			if (startVal && endVal)
			{
				this.extractRangeFilters(filter);

				this.refresh();
			}
		},

		/**
		 * Shows the loading bar.
		 *
		 * @return void
		 */
		showLoader: function()
		{

			var grid = this.grid;

			var loader = this.opt.loader;

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).fadeIn();

		},

		/**
		 * Hides the loading bar.
		 *
		 * @return void
		 */
		hideLoader: function()
		{

			var grid = this.grid;

			var loader = this.opt.loader;

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).fadeOut();

		},

		/**
		 * Resets Data Grid.
		 *
		 * @return void
		 */
		reset: function()
		{

			var grid = this.grid;

			var options = this.opt;

			// Elements
			this.$body.find('[data-sort]'+ grid).removeClass(options.sortClasses.asc);
			this.$body.find('[data-sort]'+ grid).removeClass(options.sortClasses.desc);
			this.$body.find('[data-search]'+ grid).find('input').val('');
			this.$body.find('[data-search]'+ grid).find('select').prop('selectedIndex', 0);
			this.$body.find('[data-range-filter]' + grid + ',' + grid +' [data-range-filter]').find('input').val('');

			// Filters
			this.appliedFilters = [];

			// Sort
			this.currentSort.index = 0;
			this.currentSort.direction = '';
			this.currentSort.column = '';

			// Pagination
			this.pagi.pageIdx = 1;

			// Remove all rendered content
			this.$filters.empty();

		},

		/**
		 * Empty results.
		 *
		 * @return void
		 */
		emptyResults: function()
		{
			this.$results.empty();
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
		 * Fires an event.
		 *
		 * @param  string  name
		 * @return void
		 */
		triggerEvent: function(name)
		{
			var callback = this;

			var events = this.opt.events;

			if (events !== undefined)
			{
				if ($.isFunction(events[name]))
				{
					events[name](callback);
				}
			}
		},

		/**
		 * Applies the scroll feature animation.
		 *
		 * @return void
		 */
		applyScroll: function()
		{

			var options = this.opt;

			if (options.scroll)
			{
				$(document.body).animate({ scrollTop: $(options.scroll).offset().top }, 200);
			}

		},

		/**
		 * Returns the dividend.
		 *
		 * @return int
		 */
		getDividend: function()
		{
			return this.opt.dividend;
		},

		/**
		 * Sets the dividend.
		 *
		 * @param  int  value
		 * @return void
		 */
		setDividend: function(value)
		{
			this.opt.dividend = value;
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
		}

	};

	$.datagrid = function(grid, results, pagination, filters, options)
	{
		return new DataGrid(grid, results, pagination, filters, options);
	};

})(jQuery, window, document);
