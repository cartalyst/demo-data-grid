/**
 * Part of the Data Grid package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the license.txt file.
 *
 * @package    Data Grid
 * @version    2.0.0
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
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
		sort: {},
		sort_classes: {
			asc: 'asc',
			desc: 'desc'
		},
		delimiter: ':',
		date_format_attribute: 'format',
		template_settings: {
			evaluate    : /<%([\s\S]+?)%>/g,
			interpolate : /<%=([\s\S]+?)%>/g,
			escape      : /<%-([\s\S]+?)%>/g
		},
		cache_response: false,
		scroll: null,
		search_timeout: 800,
		hash: true,
		loader: undefined,
		callback: undefined
	};

	// Hash Settings
	var default_hash = '';
	var initial = true;

	// Database date formats
	var db_timestamp_format = 'YYYY-MM-DD HH:mm:ss';
	var db_date_format      = 'YYYY-MM-DD';

	// Search
	var search_timeout;
	var is_search_active = false;

	function DataGrid(grid, results, pagination, filters, options)
	{
		var self = this;

		self.key = grid;

		self.grid = '[data-grid="' + grid + '"]';

		self.default_filters = [];
		self.applied_filters = [];

		self.default_column = '';
		self.default_direction = '';

		self.current_sort = {
			column: null,
			direction: null,
			index: 0
		};

		self.pagination = {
			page_index: 1,
			total: null,
			filtered: null,
			base_throttle: null
		};

		// Our Main Elements
		self.$results    = $(results + self.grid).length > 0 ? $(results + self.grid) : $(self.grid + ' ' + results);
		self.$pagination = $(pagination + self.grid).length > 0 ? $(pagination + self.grid) : $(self.grid + ' ' + pagination);
		self.$filters    = $(filters + self.grid).length > 0 ? $(filters + self.grid) : $(self.grid + ' ' + filters);
		self.$body       = $(document.body);

		// Options
		self.opt = $.extend({}, defaults, options);

		// Source
		self.source = self.$results.data('source') || self.opt.source;

		// Safety Check
		if (self.$results.get(0).tagName.toLowerCase() === 'table')
		{
			self.$results = $(results + self.grid).length > 0 ? $(results + self.grid).find('tbody') : $(self.grid + ' ' + results).find('tbody');
		}

		// Setup Default Hash
		default_hash = grid;

		// Setup Base Throttle
		self.pagination.base_throttle = self.opt.throttle;

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
				throw new Error('Underscore is not defined. DataGrid Requires UnderscoreJS v1.6.0 or later to run!');
			}

			var grid = this.grid;

			// Set _ templates interpolate
			_.templateSettings = this.opt.template_settings;

			var results_template       = $('[data-template="results"]' + grid).html();
			var pagination_template    = $('[data-template="pagination"]' + grid).html();
			var filters_template       = $('[data-template="filters"]' + grid).html();
			var empty_results_template = $('[data-template="no_results"]' + grid).html();
			var empty_filters_template = $('[data-template="no_filters"]' + grid).html();

			if (results_template === undefined)
			{
				console.error('results template not found.');
			}

			if (pagination_template === undefined)
			{
				console.error('pagination template not found.');
			}

			if (filters_template === undefined)
			{
				console.error('filters template not found.');
			}

			// Allow empty no_results template
			if (empty_results_template === undefined)
			{
				empty_results_template = "";
			}

			// Allow empty no_filters template
			if (empty_filters_template === undefined)
			{
				empty_filters_template = "";
			}

			// Cache the Underscore Templates
			this.tmpl = {
				results:       _.template(results_template),
				pagination:    _.template(pagination_template),
				filters:       _.template(filters_template),
				empty_results: _.template(empty_results_template),
				empty_filters: _.template(empty_filters_template)
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
			) {}

			return v > 4 ? v : undef;
		},

		/**
		 * Initializes all the event listeners.
		 *
		 * @return void
		 */
		events: function()
		{
			var self    = this;
			var grid    = self.grid;
			var options = self.opt;
			var events  = options.events;

			var route_array;
			var date_range_el = this.$body.find('[data-range-filter]' + grid + ',' + grid + ' [data-range-filter]');

			$(this).on('dg:update', this.fetchResults);

			if (options.hash)
			{
				$(this).on('dg:hashchange', this.pushHash);
			}

			$(window).on('hashchange', function()
			{
				route_array = String(window.location.hash.slice(3)).split('/');

				self.updateOnHash(route_array);
			});

			this.$body.on('click', '*', function()
			{
				self.initial = false;
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

			this.$body.on('click', '[data-filter-default]' + grid  + ',' + grid + ' [data-filter-default]', function(e)
			{
				e.preventDefault();

				self.reset();

				self.extractFilters($(this));
			});

			this.$body.on('click', '[data-reset]' + grid + ':not([data-filter]):not([data-select-filter]),' + grid + ' [data-reset]:not([data-filter]):not([data-select-filter])', function(e)
			{
				e.preventDefault();

				self.reset();

				self.refresh();
			});

			this.$body.on('click', '[data-filter]' + grid + ':not([data-filter-default]),' + grid + ' [data-filter]:not([data-filter-default])', function(e)
			{
				e.preventDefault();

				self.applyScroll();

				if ($(this).data('single-filter') !== undefined)
				{
					self.applied_filters = [];
				}

				if (options.method === 'infinite')
				{
					self.$results.empty();

					self.pagination.page_index = 1;
				}

				self.extractFilters($(this));
			});

			$(date_range_el).on('change', function()
			{
				self.removeRangeFilters($(this));

				self.rangeFilter($(this));
			});

			this.$filters.on('click', '> *', function(e)
			{
				e.preventDefault();

				var index   = $(this).index();
				var filter  = self.applied_filters[index];
				var $filter = self.$body.find('[data-filter="'+filter.column+':'+filter.value+'"]');

				if ($filter.prop('tagName') === 'OPTION')
				{
					$filter.parent().find(':eq(0)').prop('selected', true);
				}

				if (self.applied_filters[index].type === 'range' || self.applied_filters[index].type === 'ranges')
				{
					self.$body.find('[data-range-filter="' + self.applied_filters[index].column + '"]' + grid + ',' + grid + ' [data-range-filter="' + self.applied_filters[index].column + '"]').val('');
				}

				self.removeFilters(index);

				if (options.method === 'infinite')
				{
					self.$results.empty();
				}

				self.refresh();
			});

			this.$body.on('change', '[data-select-filter]' + grid + ',' + grid + ' [data-select-filter]', function()
			{
				if ($(this).find(':selected').data('filter') !== undefined)
				{
					self.extractFilters($(this).find(':selected'));
				}
				else
				{
					if ($(this).find(':selected').data('reset') !== undefined)
					{
						self.reset();
					}
					else
					{
						self.removeGroupFilters($(this));
					}
					self.refresh();
				}
			});

			if (this.opt.infinite_scroll && this.opt.method === 'infinite')
			{
				var offset = this.opt.scroll_offset || 400;

				var throttled = _.throttle(function()
				{
					if ($(window).scrollTop() >= $(document).height() - $(window).height() - offset)
					{
						var page = self.pagination.page_index + 1;

						self.goToPage(page);

						self.refresh();
					}
				}, 800);

				$(window).scroll(throttled);
			}

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

				options.throttle += self.pagination.base_throttle;

				self.refresh();
			});

			this.$body.on('submit keyup', '[data-search]' + grid + ',' + grid + ' ' + '[data-search]', function(e)
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

			if (events !== undefined)
			{
				var event_keys = _.keys(events);

				_.each(event_keys, function(key)
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
			var path   = String(window.location.hash.slice(3));
			var routes = path.split('/');

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
			var self             = this;
			var options          = self.opt;
			var current_route    = '/' + routes.join('/');
			var current_hash     = String(window.location.hash.slice(3));
			var sorted_column    = options.sort.hasOwnProperty('column');
			var sorted_direction = options.sort.hasOwnProperty('direction');
			var parsed_route;
			var next_item;
			var last_item;

			routes = _.compact(current_route.split('/grid/'));

			this.reset();

			this.initdefault_filters();

			_.each(routes, function(route)
			{
				parsed_route = _.compact(route.split('/'));

				if (parsed_route[0] === self.key)
				{
					// Build Array For Sorts
					last_item = parsed_route[(parsed_route.length - 1)];
					next_item = parsed_route[(parsed_route.length - 2)];

					// Use test to return true/false
					if (/page/g.test(last_item))
					{
						// Remove Page From parsed_route
						parsed_route = parsed_route.splice(0, (parsed_route.length - 1));

						self.extractPageFromRoute(last_item);
					}
					else
					{
						self.pagination.page_index = 1;
					}

					if ((/desc/g.test(next_item)) || (/asc/g.test(next_item)))
					{
						// Remove Sort From parsed_route
						parsed_route = parsed_route.splice(0, (parsed_route.length - 1));

						self.extractSortsFromRoute(next_item);
					}
					else if ((/desc/g.test(last_item)) || (/asc/g.test(last_item)))
					{
						// Remove Sort From parsed_route
						parsed_route = parsed_route.splice(0, (parsed_route.length - 1));

						self.extractSortsFromRoute(last_item);
					}
					else if (sorted_column && sorted_direction)
					{
						// Convert sort to string
						var str = self.opt.sort.column + self.opt.delimiter + self.opt.sort.direction;

						self.extractSortsFromRoute(str);
					}
					else
					{
						self.current_sort.direction = '';
						self.current_sort.column    = '';
					}

					// Build Array For Filters
					if (parsed_route.length !== 0 )
					{
						// Reset filters then rebuild.
						self.applied_filters = [];

						self.extractFiltersFromRoute(parsed_route);
					}
					else
					{
						// Reset applied filters if none are set via the hash
						self.applied_filters = [];

						self.$filters.html(self.tmpl.empty_filters());
					}
				}
			});

			if (current_hash.indexOf(self.key) === -1)
			{
				if (sorted_column && sorted_direction)
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
			var self           = this;
			var base           = '';
			var parsed_route   = '';
			var key            = '';
			var appended       = false;
			var path           = '';
			var final_path     = '';
			var current_routes = '';
			var routes_array   = '';
			var route_index    = '';
			var current_hash   = window.location.hash.slice(3);

			if (current_hash.substr(0, 4) !== 'grid' && this.initial)
			{
				return;
			}
			else if (current_hash.substr(0, 4) !== 'grid')
			{
				current_hash = '';
			}

			// #!/grid/key/filters/sorts/page/
			var filters = self.buildFilterFragment();
			var sort    = self.buildSortFragment();
			var page    = self.buildPageFragment();

			if (filters.length > 1)
			{
				base += filters;
			}

			if (sort.length > 1)
			{
				base += sort;
			}

			if (self.pagination.page_index > 1 && page !== undefined)
			{
				base += page;
			}

			if (filters.length < 1 || sort.length < 1 || self.pagination.page_index < 1 && base !== '')
			{
				base = '';
			}
			else
			{
				base = base.length > 1 ? this.key + base : '';
			}

			current_routes = String(current_hash);
			routes_array   = _.compact(current_routes.split('grid/'));
			route_index        = -1;

			_.each(routes_array, function(route)
			{
				parsed_route = route.split('/');
				key = parsed_route[0];

				// hash exists
				if (key === self.key)
				{
					// keep track of hash index for building the new hash
					route_index = _.indexOf(routes_array, route);

					// remove existing hash
					routes_array = _.without(routes_array, route);
				}
			});

			routes_array = _.compact(routes_array);

			for (var i = 0; i < routes_array.length; i++)
			{
				if (i === route_index)
				{
					final_path += base !== '' ? 'grid/' + base : '';

					appended = true;
				}

				final_path += 'grid/' + routes_array[i];
			}

			final_path += ! appended && base !== '' ? 'grid/' + base : '';

			path = _.isEmpty(routes_array) ? base : final_path;

			if (path.length > 1 && path.substr(0, 4) !== 'grid')
			{
				path = 'grid/' + path;
			}

			if (path !== '')
			{
				path = path.replace(/\/\//g, '/');

				if (current_hash !== path)
				{
					window.history.pushState(null, null, '#!/' + path);
				}
			}
			else
			{
				if (current_hash !== '')
				{
					var default_uri = window.location.protocol + '//' + window.location.host + window.location.pathname;

					window.history.pushState(null, null, default_uri);
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

				var without = [];
				var exists  = false;

				_.each(this.applied_filters, function(_filter)
				{
					if (JSON.stringify(_filter) === JSON.stringify(filter))
					{
						exists = true;
					}
				});

				if ( ! exists)
				{
					// Apply filters to our global array.
					this.applied_filters.push(filter);
				}

				// Create a new array without livesearch items
				for (var i = 0; i < this.applied_filters.length; i++)
				{
					if (this.applied_filters[i].type !== 'live')
					{
						without.push(this.applied_filters[i]);
					}
				}

				// Render our filters
				this.$filters.html(this.tmpl.filters({ filters: without }));

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
			$(this).trigger('dg:applying_default', this);

			var exists = false;

			_.each(this.default_filters, function(_filter)
			{
				if (JSON.stringify(_filter) === JSON.stringify(filter))
				{
					exists = true;
				}
			});

			if ( ! exists)
			{
				this.default_filters.push(filter);
			}

			$(this).trigger('dg:applied_default', this);
		},

		/**
		 * Initialize default filters.
		 *
		 * @return void
		 */
		initdefault_filters: function()
		{
			var self = this;

			if (window.location.hash === '')
			{
				_.each($('[data-filter-default]' + self.grid + ', ' + self.grid + ' [data-filter-default]'), function(defaultFilter)
				{
					self.extractFilters($(defaultFilter));
				});
			}
		},

		/**
		 * Remove filter at index.
		 *
		 * @param  int  index
		 * @return void
		 */
		removeFilters: function(index)
		{
			$(this).trigger('dg:removing', this);

			var grid   = this.grid;
			var filter = this.applied_filters[index];
			var $el;

			if (filter.type === 'range')
			{
				$el = $(grid + '[data-filter*="' + filter.column + ':' + filter.from + ':' + filter.to + '"],' + grid + ' [data-filter*="' + filter.column + ':' + filter.from + ':' + filter.to + '"]');
			}
			else
			{
				$el = $(grid + '[data-filter*="' + filter.column + ':' + filter.value + '"],' + grid + ' [data-filter*="' + filter.column + ':' + filter.value + '"]');
			}

			this.applied_filters.splice(index, 1);

			if (this.applied_filters.length > 0)
			{
				this.$filters.html(this.tmpl.filters({ filters: this.applied_filters }));
			}
			else
			{
				this.$filters.html(this.tmpl.empty_filters);
			}

			this.goToPage(1);

			$(this).trigger('dg:removed', this);
		},

		/**
		 * Remove filters from group.
		 *
		 * @param  object $filters
		 * @return void
		 */
		removeGroupFilters: function($filters)
		{
			var self    = this;
			var filters = $filters.find('[data-filter]');
			var index   = -1;
			var filter_data;
			var terms_count;
			var operator;

			_.each(filters, function(filter)
			{
				filter      = $(filter).data('filter');
				terms_count = filter.match(/:/g).length;
				filter      = filter.split(':');
				operator    = self.checkOperator(filter[1]) ? filter[1] : null;

				if (terms_count === 2 && operator === null)
				{
					filter_data = {
						column: filter[0],
						from: filter[1],
						to: filter[2],
						type: 'range'
					};
				}
				else if (terms_count === 2 && operator !== undefined)
				{
					filter_data = {
						column: filter[0],
						value: $('<p/>').text(filter[2]).html(),
						operator: operator
					};
				}
				else
				{
					filter_data = {
						column: filter[0],
						value: $('<p/>').text(filter[1]).html()
					};
				}

				index = self.searchForFilter(filter_data);

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
			var page_array = page.split(this.opt.delimiter);

			if (page_array[1] === '' || page_array[1] <= 0)
			{
				this.pagination.page_index = 1;
			}
			else
			{
				this.pagination.page_index = parseInt(page_array[1], 10);
			}
		},

		/**
		 * Handles the page change from the pagination.
		 *
		 * @param  object  $el
		 * @return void
		 */
		handlePageChange: function($el)
		{
			var index;

			if (this.opt.method === 'infinite')
			{
				index = $el.data('page');

				$el.data('page', ++index);
			}
			else
			{
				index = $el.data('page');
			}

			this.goToPage(index);

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
			this.pagination.page_index = isNaN(page = parseInt(page, 10)) ? 1 : page;
		},

		/**
		 * Handles the search on submit.
		 *
		 * @param  object  $el
		 * @param  bool    refresh
		 * @return void
		 */
		handleSearchOnSubmit: function($el, refresh)
		{
			refresh = refresh !== undefined ? refresh : true;

			var $input = $el.find('input');
			var column = 'all';

			// Make sure we arn't submiting white space only
			if ( ! $.trim($input.val()).length)
			{
				return;
			}

			this.is_search_active = true;

			clearTimeout(search_timeout);

			var search_select = $el.find('select:not([data-select-filter])');

			if (search_select.length)
			{
				column = search_select.val();

				search_select.prop('selectedIndex', 0);
			}

			// If theres a live search item with the same value
			// we remove the live search item
			if (this.searchForValue( $input.val(), this.applied_filters) > -1)
			{
				var index = this.searchForValue($input.val(), this.applied_filters);

				this.applied_filters.splice(index, 1);
			}

			this.applyFilter({
				column: column,
				value: $('<p/>').text($input.val()).html()
			});

			// Clear results for infinite grids
			if (this.opt.method === 'infinite')
			{
				this.$results.empty();
			}

			// Reset
			$input.val('').data('old', '');

			if (refresh)
			{
				this.goToPage(1);
				this.refresh();
			}
		},

		/**
		 * Handles the live search.
		 *
		 * @param  object  $el
		 * @return void
		 */
		handleLiveSearch: function($el)
		{
			var column = 'all';
			var self   = this;

			if (is_search_active)
			{
				return;
			}

			clearTimeout(search_timeout);

			search_timeout = setTimeout(function()
			{
				var search_select = $el.find('select:not([data-select-filter])');

				if (search_select.length)
				{
					column = search_select.val();
				}

				var $input = $el.find('input'),
					curr = $input.val(),
					old = $input.data('old');

				// Remove the old term from the applied filters
				for (var i = 0; i < self.applied_filters.length; i++)
				{
					if (self.applied_filters[i].value === old && self.applied_filters[i] !== undefined && old !== undefined)
					{
						self.applied_filters.splice(i, 1);
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

			}, this.opt.search_timeout);
		},

		/**
		 * Sets the sort direction on the given element.
		 *
		 * @param  object  $el
		 * @param  string  direction
		 * @return void
		 */
		setSortDirection: function($el, direction)
		{
			$(this).trigger('dg:sorting', this);

			var grid             = this.grid;
			var options          = this.opt;
			var $search_elements = $('[data-sort]' + grid + ',' + grid + ' [data-sort]');
			var ascClass         = options.sort_classes.asc;
			var descClass        = options.sort_classes.desc;
			var remove           = direction === 'asc' ? descClass : ascClass;
			var add              = direction === 'asc' ? ascClass : descClass;

			// Remove All Classes from other sorts
			$search_elements.not($el).removeClass(ascClass);
			$search_elements.not($el).removeClass(descClass);

			$el.removeClass(remove);
			$el.addClass(add);

			$(this).trigger('dg:sorted', this);
		},

		/**
		 * Extracts range filters
		 *
		 * @param  object  $filter
		 * @return void
		 */
		extractRangeFilters: function($filter)
		{
			this.default_filters = [];

			var current_filter = $filter.find('[data-range-filter]').data('range-filter') || $filter.data('range-filter');
			var $start_filter  = this.$body.find('[data-range-start][data-range-filter="' + current_filter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + current_filter + '"]');
			var $end_filter    = this.$body.find('[data-range-end][data-range-filter="' + current_filter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + current_filter + '"]');

			var start_range_filter = $start_filter.data('range-filter');
			var start_val          = $start_filter.val();
			var end_val            = $end_filter.val();
			var start_label        = $start_filter.data('label');
			var date_format        = $start_filter.data(this.opt.date_format_attribute);
			var from               = start_val;
			var to                 = end_val;
			var filter_data;

			if (date_format !== null && date_format !== undefined && window.moment !== undefined)
			{
				from = moment(from).format(db_date_format);
				to   = moment(to).format(db_date_format);
			}

			filter_data = {
				column: start_range_filter,
				from: from,
				to: to,
				label: start_label,
				type: 'ranges'
			};

			this.applyFilter(filter_data);
		},

		/**
		 * Extracts filters from element.
		 *
		 * @param  object  $filter
		 * @param  bool    refresh
		 * @return void
		 */
		extractFilters: function($filter, refresh)
		{
			refresh = refresh !== undefined ? refresh : true;

			this.default_filters = [];

			if ($filter.data('reset') !== undefined)
			{
				this.reset();
			}
			else if ($filter.parent().data('reset') !== undefined)
			{
				this.removeGroupFilters($filter.parent());
			}
			else if ($filter.parent().parent().data('reset') !== undefined)
			{
				this.removeGroupFilters($filter.parent().parent());
			}

			var filters_array = $filter.data('filter').split(', ');
			var labels        = $filter.data('label');
			var filter;
			var operator;
			var filter_data;
			var labels_array;
			var label;
			var terms_count;

			for (var i = 0; i < filters_array.length; i++)
			{
				filter = filters_array[i].split(':');
				terms_count = filters_array[i].match(/:/g).length;

				if (this.checkOperator(filters_array[i]))
				{
					operator = filter[1];

					filter.splice(1, 1);
				}

				filter_data = {
					column: filter[0],
					value: $('<p/>').text(filter[1]).html(),
					operator: operator
				};

				if (this.searchForFilter(filter_data) !== -1)
				{
					continue;
				}

				if (labels !== undefined)
				{
					labels_array = labels.split(', ');

					if (labels_array[i] !== undefined)
					{
						label = labels_array[i].split(':');
					}

					if (terms_count === 2 && operator === undefined)
					{
						filter_data = {
							column: filter[0],
							from: filter[1],
							to: filter[2],
							col_mask: label[1],
							val_mask: label[2],
							type: 'range'
						};
					}
					else if (terms_count === 2 && operator !== undefined)
					{
						filter_data = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							col_mask: label[1],
							val_mask: label[2],
							operator: operator
						};
					}
					else
					{
						filter_data = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							col_mask: label[1],
							val_mask: label[2],
							operator: operator
						};
					}

					if ($filter.data('filter-default') === undefined)
					{
						this.applyFilter(filter_data);
					}
					else
					{
						this.applyDefaultFilter(filter_data);
					}

				}
				else
				{
					if (terms_count === 2 && operator === undefined)
					{
						filter_data = {
							column: filter[0],
							from: filter[1],
							to: filter[2],
							type: 'range'
						};
					}
					else if (terms_count === 2 && operator !== undefined)
					{
						filter_data = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							operator: operator
						};
					}
					else
					{
						filter_data = {
							column: filter[0],
							value: $('<p/>').text(filter[1]).html(),
							operator: operator
						};
					}

					if ($filter.data('filter-default') === undefined)
					{
						this.applyFilter(filter_data);
					}
					else
					{
						this.applyDefaultFilter(filter_data);
					}
				}
			}

			if (refresh)
			{
				this.goToPage(1);
				this.refresh();
			}
		},

		/**
		 * Extracts sorts from click.
		 *
		 * @param  object  $el
		 * @return void
		 */
		extractSortsFromClick: function($el)
		{
			var sort_array = $el.data('sort').split(':');
			var direction  = 'asc';

			// Reset page for infinite grids
			if (this.opt.method === 'infinite')
			{
				this.goToPage(1);
			}

			if (this.current_sort.column === sort_array[0] && this.current_sort.index < 3 && this.current_sort.column !== this.opt.sort.column)
			{
				this.current_sort.index++;
			}
			else
			{
				if (sort_array[0] !== this.default_column && this.default_column !== '')
				{
					this.current_sort.index = 1;
				}
				else
				{
					this.current_sort.index = 3;
				}
			}

			if (sort_array[0] === this.default_column && this.default_column !== '')
			{
				this.current_sort.index = 1;
			}

			if (typeof sort_array[1] !== 'undefined')
			{
				direction = sort_array[1];
			}

			if (sort_array[0] === this.current_sort.column)
			{
				if (this.current_sort.direction === 'asc' && this.current_sort.index !== 3)
				{
					this.current_sort.direction = 'desc';
				}
				else if (this.current_sort.index !== 3)
				{
					this.current_sort.direction = 'asc';
				}
				else
				{
					this.current_sort.direction = '';
				}
			}
			else if (sort_array[0] === this.default_column && this.default_column !== '')
			{
				this.current_sort.column = this.default_column;

				this.current_sort.direction = this.default_direction === 'asc' ? 'desc' : 'asc';
			}
			else
			{
				this.current_sort.column = sort_array[0];

				this.current_sort.direction = direction;
			}
		},

		/**
		 * Extracts filters from route.
		 *
		 * @param  array  route_array
		 * @return void
		 */
		extractFiltersFromRoute: function(route_array)
		{
			var self = this;
			var grid = this.grid;

			route_array = route_array.splice(1);

			this.applied_filters = [];

			for (var i = 0; i < route_array.length; i++)
			{
				var $filter     = $('[data-filter*="' + route_array[i] + '"]' + grid + ',' + grid + ' [data-filter*="' + route_array[i] + '"]');
				var filter      = route_array[i].split(':');
				var terms_count = route_array[i].match(/:/g).length;
				var label;

				if ( ! $filter.length && terms_count === 2)
				{
					// Range filters
					var $start_filter = this.$body.find('[data-range-start][data-range-filter="' + filter[0] + '"]' + grid + ',' + grid + ' [data-range-start][data-range-filter="' + filter[0] + '"]');
					var $end_filter   = this.$body.find('[data-range-end][data-range-filter="' + filter[0] + '"]' + grid + ',' + grid + ' [data-range-end][data-range-filter="' + filter[0] + '"]');
					var date_format    = $start_filter.data(this.opt.date_format_attribute);

					if (window.moment !== undefined && date_format !== undefined)
					{
						$start_filter.val(moment(filter[1]).format(date_format));
						$end_filter.val(moment(filter[2]).format(date_format));
					}
					else
					{
						$start_filter.val(filter[1]);
						$end_filter.val(filter[2]);
					}

					self.rangeFilter($start_filter, false);
				}
				else if (terms_count === 1 && ! $filter.length)
				{
					// Search
					var $search = $('[data-search]' + grid).length > 0 ? $('[data-search]' + grid) : $(grid + ' [data-search]');

					$search.find('[value="' + filter[0] + '"]').prop('selected', true);
					$search.find('input').val(filter[1]);

					self.handleSearchOnSubmit($search, false);
				}
				else
				{
					// Select drop down filters
					if ($filter.prop('tagName') === 'OPTION')
					{
						$filter.prop('selected', true);
					}

					// All other filters
					filter      = $filter.data('filter');
					label       = $filter.data('label');
					terms_count = filter.match(/:/g).length;
					filter      = filter.split(':');

					var $filter_clone = $filter.clone();

					$filter_clone.attr('data-filter', route_array[i]);

					if ($filter.data('label'))
					{
						label = label.split(', ');
					}

					var data_label = '';

					if (label !== undefined)
					{
						for(var j = 0; j < label.length; j++)
						{
							var label_array  = label[j].split(':'),
								filter_array = route_array[i].split(':');

							if (label_array[0] === filter_array[0])
							{
								data_label = label[j];

								break;
							}
						}
					}

					$filter_clone.attr('data-label', data_label);

					data_label = '';

					self.extractFilters($filter_clone, false);
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
				if ((arr[i].value === key) || (arr[i].mask_original === key))
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
			var filters = this.applied_filters;

			for (var i = 0; i < filters.length; i++)
			{
				if (filters[i].value    === filter.value &&
					filters[i].operator === filter.operator &&
					(filters[i].column  === filter.column || filters[i].mask_original === filter.column) &&
					filters[i].type     === filter.type &&
					filters[i].from     === filter.from &&
					filters[i].to       === filter.to)
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
		 * @param  string  sort
		 * @return void
		 */
		extractSortsFromRoute: function(sort)
		{
			sort = sort.split(this.opt.delimiter);

			var column    = sort[0];
			var direction = sort[1];

			// Setup Sort and put index at 1
			if (this.current_sort.column !== column)
			{
				this.current_sort.index = 1;
			}

			this.current_sort.column = column;

			this.current_sort.direction = direction;
		},

		/**
		 * Build page fragment.
		 *
		 * @return string
		 */
		buildPageFragment: function()
		{
			if (this.pagination.page_index !== 1 && this.opt.method !== 'infinite')
			{
				return '/page' + this.opt.delimiter + this.pagination.page_index + '/';
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
			var filter_fragment = '';
			var delimiter       = this.opt.delimiter;
			var filters         = [];

			_.each(this.default_filters, function(filter)
			{
				filters.push(filter);
			});

			_.each(this.applied_filters, function(filter)
			{
				filters.push(filter);
			});

			for (var i = 0; i < filters.length; i++)
			{
				var index = filters[i];

				if (index.type !== 'live')
				{
					var parsed_value = $('<p/>').html(index.value).text();

					if (index.mask === 'column')
					{
						if (index.operator !== '' && index.operator !== undefined)
						{
							filter_fragment += '/' + index.mask_original + delimiter + index.operator + delimiter + parsed_value;
						}
						else
						{
							filter_fragment += '/' + index.mask_original + delimiter + parsed_value;
						}
					}
					else if (index.mask === 'value')
					{
						if (index.operator !== '' && index.operator !== undefined)
						{
							filter_fragment += '/' + index.mask_original + delimiter + index.operator + delimiter + parsed_value;
						}
						else
						{
							filter_fragment += '/' + index.column + delimiter + index.mask_original;
						}
					}
					else if (index.type === 'range' || index.type === 'ranges')
					{
						filter_fragment += '/' + index.column + delimiter + index.from + delimiter + index.to;
					}
					else if (index.operator !== undefined && index.operator !== '')
					{
						filter_fragment += '/' + index.column + delimiter + index.operator + delimiter + parsed_value;
					}
					else
					{
						filter_fragment += '/' + index.column + delimiter + parsed_value;
					}
				}
			}

			return filter_fragment + '/';
		},

		/**
		 * Build sort fragment.
		 *
		 * @return string
		 */
		buildSortFragment: function()
		{
			var sortFragment = '';

			var currentColumn = this.current_sort.column;

			var currentDirection = this.current_sort.direction;

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
				if (self.opt.cache_response)
				{
					self.response = response;
				}

				if (self.pagination.page_index > response.pages)
				{
					self.pagination.page_index = response.pages;

					self.refresh();

					return false;
				}

				self.pagination.filtered = response.filtered;

				self.pagination.total = response.total;
				// Keep infinite results to append load more
				if (self.opt.method !== 'infinite')
				{
					self.$results.empty();
				}

				if (self.opt.method === 'single' || self.opt.method === 'group')
				{
					self.$results.html(self.tmpl.results(response));
				}
				else
				{
					self.$results.append(self.tmpl.results(response));
				}

				self.$pagination.html(self.tmpl.pagination(self.buildPagination(response)));

				if ( ! response.results.length)
				{
					self.$results.html(self.tmpl.empty_results());
				}

				if ( ! self.applied_filters.length)
				{
					self.$filters.html(self.tmpl.empty_filters());
				}

				if (response.sort !== '')
				{
					var sortEl = $('[data-sort^="' + response.sort + '"]' + self.grid + ',' + self.grid + ' [data-sort="' + response.sort + '"]');

					if (self.buildSortFragment() !== '/')
					{
						self.current_sort.column = response.sort;
						self.current_sort.direction = response.direction;
					}

					if (self.opt.sort.column === undefined)
					{
						self.default_column = response.default_column;
						self.default_direction = response.direction;
					}

					self.setSortDirection(sortEl, response.direction);
				}

				self.hideLoader();

				$(self).trigger('dg:hashchange');

				self.callback();

				$(self).trigger('dg:fetched', self);
			})
			.error(function(jqXHR, textStatus, errorThrown)
			{

				console.error('fetchResults ' + jqXHR.status, errorThrown);

			});
		},

		/**
		 * Builds the ajax uri.
		 *
		 * @return string
		 */
		buildAjaxURI: function(download)
		{
			var self = this,
				params = {},
				from,
				to;

			params.filters   = [];
			params.page      = this.pagination.page_index;
			params.method    = this.opt.method;
			params.threshold = this.opt.threshold;
			params.throttle  = this.opt.throttle;

			var filters = [];

			_.each(this.default_filters, function(filter)
			{
				filters.push(filter);
			});

			_.each(this.applied_filters, function(filter)
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
							filter[filters[i].mask_original] =
								'|' +
								filters[i].operator +
								$('<p/>').html(filters[i].value).text() +
								'|';
						}
						else if (filters[i].type === 'range' || index.type === 'ranges')
						{
							if (window.moment !== undefined)
							{
								from = moment(filters[i].from).startOf('day').format(db_timestamp_format);
								to   = moment(filters[i].to).endOf('day').format(db_timestamp_format);
							}
							else
							{
								from = filters[i].from;
								to   = filters[i].to;
							}

							filter[filters[i].mask_original] = '|' + '>=' + from + '|' + '<=' + to +'|';
						}
						else
						{
							filter[filters[i].mask_original] = $('<p/>').html(filters[i].value).text();
						}

						params.filters.push(filter);
					}
					else
					{
						if (filters[i].column === 'all')
						{
							params.filters.push(filters[i].mask_original);
						}
						else
						{
							if (filters[i].operator !== undefined && filters[i].operator !== null)
							{
								filter[filters[i].column] = '|' + filters[i].operator + filters[i].mask_original + '|';
								params.filters.push(filter);
							}
							else
							{
								filter[filters[i].column] = filters[i].mask_original;
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

							if (self.checkDate(value) && window.moment !== undefined)
							{
								if (filters[i].operator === '>=')
								{
									value = moment(value).startOf('day').format(db_timestamp_format);
								}
								else if (filters[i].operator === '<=')
								{
									value = moment(value).endOf('day').format(db_timestamp_format);
								}
							}

							filter[filters[i].column] =
								'|' +
								filters[i].operator +
								$('<p/>').html(value).text() +
								'|';
						}
						else if (filters[i].type === 'range' || filters[i].type === 'ranges')
						{
							if (window.moment !== undefined && self.checkDate(filters[i].from))
							{
								from = moment(filters[i].from).startOf('day').format(db_timestamp_format);
								to   = moment(filters[i].to).endOf('day').format(db_timestamp_format);
							}
							else
							{
								from = filters[i].from;
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

			if (this.current_sort.column !== '' && this.current_sort.direction !== '')
			{
				params.sort = this.current_sort.column;
				params.direction = this.current_sort.direction;
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
			var self  = this;
			var page  = json.page;
			var next  = json.next_page;
			var prev  = json.previous_page;
			var total = json.pages;
			var rect;

			switch (this.opt.method)
			{
				case 'single':
				case 'group':

					rect = self.buildRegularPagination(page, next, prev, total);

					break;

				case 'infinite':

					rect = self.buildInfinitePagination(page, next, total);

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
			var params;
			var per_page;
			var page_limit;
			var rect = [];

			per_page = this.calculatePagination();

			if (this.opt.threshold > this.pagination.filtered)
			{
				page_limit = this.pagination.filtered;
			}
			else
			{
				if (this.pagination.page_index === 1)
				{
					page_limit = per_page > this.pagination.filtered ? this.pagination.filtered : per_page;
				}
				else
				{
					page_limit = this.pagination.total < (per_page * this.pagination.page_index) ? this.pagination.filtered : (per_page * this.pagination.page_index);
				}
			}

			params = {
				page_start: per_page === 0 ? 0 : ( this.pagination.page_index === 1 ? this.pagination.filtered > 0 ? 1 : 0 : ( per_page * (this.pagination.page_index - 1 ) + 1)),
				page_limit: page_limit,
				next_page: next,
				previous_page: prev,
				page: page,
				active: true,
				pages: total,
				total: this.pagination.total,
				filtered: this.pagination.filtered,
				throttle: this.opt.throttle,
				threshold: this.opt.threshold,
				per_page: per_page
			};

			rect.push(params);

			return { pagination: rect };
		},

		/**
		 * Builds the infinite pagination.
		 *
		 * @param  int  page
		 * @param  int  next
		 * @param  int  total
		 * @return object
		 */
		buildInfinitePagination: function(page, next, total)
		{
			var params,
				rect = [];

			params = {
				page: page,
				total: total,
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

					return Math.ceil(this.pagination.filtered / this.opt.throttle);
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
			var rangeStart = filter.find('[data-range-start]').data('range-filter') || filter.data('range-filter'),
				rangeEned  = filter.find('[data-range-end]').data('range-filter') || filter.data('range-filter');

			for (var i = 0; i < this.applied_filters.length; i++)
			{
				if (this.applied_filters[i].type === 'ranges' && (this.applied_filters[i].column === rangeStart || this.applied_filters[i].column === rangeEned))
				{
					this.removeFilters(i);
				}
			}
		},

		/**
		 * Applies a range filter.
		 *
		 * @param  object  filter
		 * @param  bool    refresh
		 * @return void
		 */
		rangeFilter: function(filter, refresh)
		{
			refresh = refresh !== undefined ? refresh : true;

			var current_filter     = filter.find('[data-range-filter]').data('range-filter') || filter.data('range-filter'),
				$start_filter = this.$body.find('[data-range-start][data-range-filter^="' + current_filter + '"]' + this.grid + ',' + this.grid + ' [data-range-start][data-range-filter="' + current_filter + '"]'),
				$end_filter   = this.$body.find('[data-range-end][data-range-filter^="' + current_filter + '"]' + this.grid + ',' + this.grid + ' [data-range-end][data-range-filter="' + current_filter + '"]');

			var start_val = $start_filter.val(),
				end_val   = $end_filter.val();

			if (start_val && end_val)
			{
				this.extractRangeFilters(filter);

				if (refresh)
				{
					this.goToPage(1);
					this.refresh();
				}
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

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).finish().fadeIn();
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

			this.$body.find(grid + loader + ',' + grid + ' ' + loader).finish().fadeOut();
		},

		/**
		 * Resets Data Grid.
		 *
		 * @return void
		 */
		reset: function()
		{
			var grid    = this.grid;
			var options = this.opt;

			// Elements
			this.$body.find('[data-sort]'+ grid).removeClass(options.sort_classes.asc);
			this.$body.find('[data-sort]'+ grid).removeClass(options.sort_classes.desc);
			this.$body.find('[data-search]'+ grid).find('input').val('');
			this.$body.find('[data-search]'+ grid).find('select').prop('selectedIndex', 0);
			this.$body.find('[data-range-filter]' + grid + ',' + grid +' [data-range-filter]').find('input').val('');
			this.$body.find('[data-select-filter]' + grid + ',' + grid +' [data-select-filter]').find(':eq(0)').prop('selected', true);

			// Filters
			this.applied_filters = [];
			this.default_filters = [];

			// Sort
			this.current_sort.index = 0;
			this.current_sort.direction = '';
			this.current_sort.column = '';

			// Pagination
			this.pagination.page_index = 1;

			// Remove all rendered content
			this.$filters.html(this.tmpl.empty_filters());

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

	/**
	 * Data grid init.
	 *
	 * @param  string  grid
	 * @param  string  results
	 * @param  string  pagination
	 * @param  string  filters
	 * @param  object  options
	 * @return DataGrid
	 */
	$.datagrid = function(grid, results, pagination, filters, options)
	{
		return new DataGrid(grid, results, pagination, filters, options);
	};

	/**
	 * Data grid prototype
	 *
	 * @type object
	 */
	$.datagrid.prototype = DataGrid.prototype;

})(jQuery, window, document);
