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

;(function ($, window, document, undefined) {

	'use strict';

	// Overwritable Values
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
			defaultSort: {},
			templateSettings : {
				evaluate    : /<%([\s\S]+?)%>/g,
				interpolate : /<%=([\s\S]+?)%>/g,
				escape      : /<%-([\s\S]+?)%>/g
			},
			searchTimeout: 800,
			loader: undefined,
			callback: undefined
		};

	// Hash Settings
	var route = '';
	var defaultHash = '';

	// Sort
	var currentSort = {
		column: null,
		direction: null,
		index: 0
	};

	// Search
	var searchTimeout;
	var isSearchActive = false;

	// Global Applied Filters Array
	var appliedFilters = [];

	// Pagination
	var pagi = {
		pageIdx: 1,
		totalCount: null,
		filteredCount: null,
		baseTrottle: null
	};

	function DataGrid(grid, results, pagination, filters, options) {

		var _this = this;
			_this.key = grid;
			_this.grid = '[data-grid="'+_this.key+'"]';

			// Our Main Elements
			_this.$results      = $(results + _this.grid);
			_this.$pagination   = $(pagination + _this.grid);
			_this.$filters      = $(filters + _this.grid);
			_this.$body         = $(document.body);

			// Source
			_this.source = _this.$results.data('source') || _this.opt.source;

			// Safty Check
			if (_this.$results.get(0).tagName.toLowerCase() === 'table')
			{
				_this.$results = $(results + this.grid).find('tbody');
			}

			// Options
			_this.opt = $.extend({}, defaults, options);

			// Setup Default Hash
			defaultHash = _this.key;
			// Setup Base Throttle
			pagi.baseTrottle = _this.opt.throttle;

		this._checkDependencies(results, pagination, filters);

		this._init();

	}

	DataGrid.prototype = {

		_init: function() {

			this._addEventListeners();

			this._loading();

			this._checkHash();

		},

		_checkDependencies: function (results, pagination, filters) {

			if (typeof window._ === 'undefined')
			{
				throw new Error('Underscore is not defined. DataGrid Requires UnderscoreJS v 1.5.2 or later to run!');
			}

			// Set _ templates interpolate
			_.templateSettings = {
				evaluate    : this.opt.templateSettings.evaluate,
				interpolate : this.opt.templateSettings.interpolate,
				escape      : this.opt.templateSettings.escape
			};

			// Build Template Selectors based on classes set
			results     = $('#'+results.substr(1)+'-tmpl' + this.grid);
			pagination  = $('#'+pagination.substr(1)+'-tmpl' + this.grid);
			filters     = $('#'+filters.substr(1)+'-tmpl' + this.grid);

			// Cache Underscore Templates
			this.tmpl = {
				results:    _.template(results.html()),
				pagination: _.template(pagination.html()),
				filters:    _.template(filters.html()),
				empty:      _.template($('#no-results-tmpl'+ this.grid).html())
			};

		},

		_checkIE: function() {
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

		_checkHash: function() {

			var newPath = window.location.hash;
				newPath = String(newPath.slice(3));

			if (newPath === '')
			{
				newPath = defaultHash;
			}

			if (newPath !== route)
			{
				this._handleHashChange(newPath);
			}

		},

		_addEventListeners: function() {

			var _this = this;

			$(this).on('dg:update', this._ajaxFetchResults);

			$(window).on('hashchange', function() {

				_this._checkHash();

			});

			this.$body.on('click', '[data-sort]'+this.grid, function(){

				if(_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty(); //safty
				}
				_this._extractSortsFromClick($(this) , $(this).data('sort'));

			});

			this.$body.on('click', '[data-filter]'+this.grid, function(e) {

				e.preventDefault();
				_this.$results.empty(); //safty
				_this._extractFiltersFromClick($(this).data('filter'), $(this).data('label'));

			});

			this.$filters.on('click', '> *', function(e) {

				e.preventDefault();
				if(_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty(); //safty
				}
				_this._removeFilters($(this).index());

			});

			this.$pagination.on('click', '[data-page]', function(e) {

				e.preventDefault();

				_this._handlePageChange($(this));

			});

			this.$pagination.on('click', '[data-throttle]', function(e) {
				e.preventDefault();

				_this.opt.throttle += pagi.baseTrottle;

				$(_this).trigger('dg:update');

			});

			this.$body.on('submit keyup', '[data-search]', function(e){

				e.preventDefault();

				if (e.type === 'submit')
				{
					_this._handleSearchOnSubmit($(this));
				}
				else if (e.type === 'keyup' && e.keyCode !== 13)
				{
					_this._handeLiveSearch($(this));
				}

			});

		},

		_applyFilter: function(filters) {

			var without = [];

			// Apply filters to our global array.
			appliedFilters.push(filters);

			// Create A New Array Without any livesearch items
			for (var i = 0; i < appliedFilters.length; i++)
			{
				if (appliedFilters[i].type !== 'live')
				{
					without.push(appliedFilters[i]);
				}
			}

			// Render Our Filters
			this.$filters.html(this.tmpl['filters']({ filters: without }));

		},

		_handleHashChange: function(hash) {

			if (hash !== route)
			{
				route = hash;

				var routeArr = route.split('/');

				if (routeArr[0] === this.key)
				{
					this._updateOnHash(routeArr);
				}
			}

		},

		_updateOnHash: function(routeArr) {

			// Remove Key From Array
			routeArr = routeArr.splice(1);

			// Build Array For Sorts
			var lastItem = routeArr[(routeArr.length - 1)];
			var nextItem = routeArr[(routeArr.length - 2)];

			// Use test to return true/false
			if (/page/g.test(lastItem))
			{
				// Remove Page From routeArr
				routeArr = routeArr.splice(0, (routeArr.length - 1));
				this._extractPageFromRoute(lastItem);
			}

			if ((/desc/g.test(nextItem)) || (/asc/g.test(nextItem)))
			{
				// Remove Sort From routeArr
				routeArr = routeArr.splice(0, (routeArr.length - 1));
				this._extractSortsFromRoute(nextItem);
			}
			else if (this.opt.defaultSort.hasOwnProperty('column') &&
					this.opt.defaultSort.hasOwnProperty('direction'))
			{
				// Convert Object to string
				var str = this.opt.defaultSort.column+'-'+this.opt.defaultSort.direction;

				this._extractSortsFromRoute(str);
			}

			// Build Array For Filters
			if (routeArr.length !== 0 )
			{
				// We Must Reset then rebuild.
				appliedFilters = [];

				this._extractFiltersFromRoute(routeArr);
			}
			else
			{
				// Reset Applied Filters if none are set via the hash
				appliedFilters = [];

				this.$filters.empty();
			}

			$(this).trigger('dg:update');

		},

		_handleSearchOnSubmit: function(el) {

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

			if (el.find('select').length)
			{
				column = el.find('select').val();

				el.find('select').prop('selectedIndex', 0);
			}

			// If theres a live search item with the same value
			// we remove the live search item
			if (this._searchForValue( $input.val(), appliedFilters) > -1)
			{
				var idx = this._searchForValue($input.val(), appliedFilters);

				appliedFilters.splice(idx, 1);
			}

			this._applyFilter({
				column: column,
				value: $input.val()
			});

			// Safety
			if(this.opt.paginationType === 'infinite')
			{
				this.$results.empty();
			}

			// Reset
			$input.val('').data('old', '');
			this._goToPage(1);
			$(this).trigger('dg:update');

		},

		_handeLiveSearch: function(el) {

			var rect = [];
			var column = 'all';
			var _this = this;

			if (isSearchActive)
			{
				return;
			}

			clearTimeout(searchTimeout);

			searchTimeout = setTimeout(function()
			{

				if (el.find('select').length)
				{
					column = el.find('select').val();
				}

				var $input = el.find('input');
				var curr = $input.val();
				var old = $input.data('old');

				// Remove the old term from the applied filters
				for (var i = 0; i < appliedFilters.length; i++)
				{

					if(appliedFilters[i].value === old)
					{
						appliedFilters.splice(i, 1);
					}

				}

				if (curr.length > 0)
				{
					_this._applyFilter({
						column: column,
						value: curr,
						type: 'live'
					});
				}

				// Safety
				if(_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty();
				}

				$input.data('old', curr);

				_this._goToPage(1);

				$(_this).trigger('dg:update');

			}, this.opt.searchTimeout);

		},

		_handlePageChange: function(el) {

			var idx;

			if (this.opt.paginationType === 'single' ||
				this.opt.paginationType === 'multiple')
			{
				idx = el.data('page');
			}

			if (this.opt.paginationType === 'infinite')
			{
				idx = el.data('page');

				el.data('page', ++idx);
			}

			this._goToPage(idx);

			$(this).trigger('dg:update');

		},

		_setSortDirection: function(el) {

			// Remove All Classes from other sorts
			$('[data-sort]').not(el).removeClass(this.opt.sortClasses.asc);
			$('[data-sort]').not(el).removeClass(this.opt.sortClasses.desc);

			if (currentSort.index === 3)
			{
				el.removeClass(this.opt.sortClasses.asc);

				el.removeClass(this.opt.sortClasses.desc);

				// reset our sorting index back to 0
				// and set the column to nothing
				currentSort.index = 0;
				currentSort.column = '';
			}
			else
			{
				// get the oppsite class from which is set
				var remove = currentSort.direction === 'asc' ? this.opt.sortClasses.desc : this.opt.sortClasses.asc;

				el.removeClass(remove);

				el.addClass(this.opt.sortClasses[currentSort.direction]);
			}

		},

		_extractPageFromRoute: function(page) {

			var pageArr = page.split('-');

			if (pageArr[1] === '' || pageArr[1] <= 0)
			{
				pagi.pageIdx = 1;
			}
			else
			{
				pagi.pageIdx = parseInt(pageArr[1], 10);
			}

		},

		_extractFiltersFromClick: function(filters, labels) {

			var _this = this;
			var rect = [];

			var filtersArr = filters.split(', ');

			for (var i = 0; i < filtersArr.length; i++)
			{
				var filter = filtersArr[i].split(':');

				if (_this._searchForValue(filter[1], appliedFilters) > -1)
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
						var key = _this._indexOf(filter, label[0]);

						// Map Filter that is equal to the returned key
						// to the label value for renaming
						filter[key] = label[1];

						_this._applyFilter({
							column: filter[0],
							value: filter[1],
							mask: (key === 0 ? 'column' : 'value'),
							maskOrg: label[0]
						});
					}
					else
					{
						_this._applyFilter({
							column: filter[0],
							value: filter[1]
						});
					}
				}
				else
				{
					_this._applyFilter({
						column: filter[0],
						value: filter[1]
					});
				}
			}

			$(this).trigger('dg:update');

			this._goToPage(1);

		},

		_extractSortsFromClick: function(el, sort) {

			var sortArr = sort.split(':');
			var direction = 'asc';

			if (currentSort.column === sortArr[0])
			{
				currentSort.index++;
			}
			else
			{
				// Column Changed so set to first order
				currentSort.index = 1;
			}

			if (typeof sortArr[1] !== 'undefined')
			{

				direction = sortArr[1];

			}

			if (sortArr[0] === currentSort.column)
			{

				if (currentSort.direction === 'asc' && currentSort.index !== 3)
				{
					currentSort.direction = 'desc';
				}
				else if (currentSort.index !== 3)
				{
					currentSort.direction = 'asc';
				}
				else
				{
					currentSort.direction = '';
				}
			}
			else
			{
				currentSort.column = sortArr[0];
				currentSort.direction = direction;
			}

			this._setSortDirection(el);
			$(this).trigger('dg:update');

		},

		_extractFiltersFromRoute: function(routeArr) {

			var _this = this;

			var labels = $('[data-label]'+this.grid);

			for (var i = 0; i < routeArr.length; i++)
			{

				var filters = routeArr[i].split('-');

				for (var x = 0; x < labels.length; x++)
				{

					if( $(labels[x]).data('label').indexOf( filters[0] ) !== -1 ||
						$(labels[x]).data('label').indexOf( filters[1] ) !== -1 )
					{
						var matchedLabel = $(labels[x]).data('label').split(':');
						var key = _this._indexOf(filters, matchedLabel[0]);

						// Map Filter that is equal to the returned key
						// to the label value for renaming
						filters[key] = matchedLabel[1];

						// Check to make sure filter isn't already set.
						if (_this._searchForValue( filters[1], appliedFilters) === -1)
						{
							// if its not already set, lets set the filter
							_this._applyFilter({
								column: filters[0],
								value: filters[1],
								mask: (key === 0 ? 'column' : 'value'),
								maskOrg: matchedLabel[0]
							});
						}

					}
				}

				// Check to  make sure filter isn't already set
				if (_this._searchForValue( filters[1], appliedFilters) === -1)
				{
					// If its not already set, lets set the filter
					_this._applyFilter({
						column: routeArr[i].split('-')[0],
						value: routeArr[i].split('-')[1],
					});
				}

			}

		},

		_searchForValue: function(key, arr) {

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

		_indexOf: function(array, item) {

			if (this._checkIE() < 9)
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

		_extractSortsFromRoute: function(lastItem) {

			var sort = lastItem.split('-');

			// Setup Sort and put index at 1
			if (currentSort.column !== sort[0])
			{
				currentSort.index = 1;
			}

			currentSort.column = sort[0];
			currentSort.direction = sort[1];

			this._setSortDirection($('[data-sort="'+sort[0]+'"]'+this.grid));

		},

		_updatedCurrentHash: function() {

			// #!/grid/column-value/column-sort
			var base    = '!/'+this.key;
			var filters = this._buildFilterFragment();
			var sort    = this._buildSortFragment();
			var page    = this._buildPageFragment();

			if (filters.length > 1)
			{
				base += filters;
			}

			if (sort.length > 1)
			{
				base += sort;
			}

			if (pagi.pageIdx >= 1)
			{
				base += page;
			}

			if (this._checkIE() <= 9)
			{
				window.location.hash = base;
			}
			else
			{
				var defaultURI = window.location.protocol + '//' + window.location.host + window.location.pathname;


				if( window.location.href.indexOf('?') > -1 )
				{
					console.log('true');
					var indexOfQuery = window.location.href.indexOf('?');
					var indexOfHash = window.location.href.indexOf('#');

					if( indexOfHash > -1 ) {
						defaultURI += window.location.href.slice( indexOfQuery, indexOfHash);
					}else{
						defaultURI += window.location.href.substr(indexOfQuery);
					}
				}

				window.history.pushState(null, null, defaultURI +'#'+ base);
			}

		},

		_buildPageFragment: function() {

			return '/page-'+pagi.pageIdx;

		},

		_buildFilterFragment: function() {

			var filterFragment = '';

			for (var i = 0; i < appliedFilters.length; i++)
			{

				if (appliedFilters[i].type !== 'live')
				{

					if (appliedFilters[i].mask === 'column')
					{
						filterFragment += '/'+appliedFilters[i].maskOrg+'-'+appliedFilters[i].value;
					}
					else if (appliedFilters[i].mask === 'value')
					{
						filterFragment += '/'+appliedFilters[i].column+'-'+appliedFilters[i].maskOrg;
					}
					else
					{
						filterFragment += '/'+appliedFilters[i].column+'-'+appliedFilters[i].value;
					}

				}

			}

			return filterFragment;

		},

		_buildSortFragment: function() {

			var sortFragment = '';

			if (currentSort.column !== null && currentSort.direction !== '')
			{
				sortFragment += '/'+currentSort.column+'-'+currentSort.direction;
				return sortFragment;
			}

			return '/';

		},

		_ajaxFetchResults: function() {

			var _this = this;

			$.ajax({
				url: _this.source,
				dataType : 'json',
				data: _this._buildAjaxURI()
			})
			.done(function(response) {

				if (pagi.pageIdx > response.pages_count)
				{
					pagi.pageIdx = response.pages_count;
					$(_this).trigger('dg:update');
					return false;
				}

				pagi.filteredCount = response.filtered_count;
				pagi.totalCount = response.total_count;

				if (_this.opt.paginationType !== 'infinite')
				{
					_this.$results.empty();
				}

				if (_this.opt.paginationType === 'single' || _this.opt.paginationType === 'multiple')
				{
					_this.$results.html(_this.tmpl['results'](response));
				}
				else
				{
					_this.$results.append(_this.tmpl['results'](response));
				}

				_this.$pagination.html(_this.tmpl['pagination'](_this._buildPagination(response)));

				if ( ! response.results.length)
				{
					_this.$results.html(_this.tmpl['empty']());
				}

				_this._updatedCurrentHash();
				_this._callback();

			})
			.error(function(jqXHR, textStatus, errorThrown) {

				console.log('_ajaxFetchResults' + jqXHR.status, errorThrown);

			});

		},

		_buildAjaxURI: function() {

			var params = {};
				params.filters      = [];
				params.page         = pagi.pageIdx;
				params.dividend     = this.opt.dividend;
				params.threshold    = this.opt.threshold;
				params.throttle     = this.opt.throttle;

			for (var i = 0; i < appliedFilters.length; i++)
			{
				var filter = {};

				if ('mask' in appliedFilters[i])
				{

					if (appliedFilters[i].mask === 'column')
					{
						filter[appliedFilters[i].maskOrg] = appliedFilters[i].value;
						params.filters.push(filter);
					}
					else
					{

						if (appliedFilters[i].column === 'all')
						{
							params.filters.push(appliedFilters[i].maskOrg);
						}
						else
						{
							filter[appliedFilters[i].column] = appliedFilters[i].maskOrg;
							params.filters.push(filter);
						}

					}
				}
				else
				{
					if (appliedFilters[i].column === 'all')
					{
						params.filters.push(appliedFilters[i].value);
					}
					else
					{
						filter[appliedFilters[i].column] = appliedFilters[i].value;
						params.filters.push(filter);
					}
				}
			}

			params.sort = currentSort.column;
			params.direction = currentSort.direction;

			return $.param(params);
		},

		_buildPagination: function(json) {

			var _this = this;
			var rect;

			var page = json.page,
				next = json.next_page,
				prev = json.previous_page,
				total = json.pages_count;

			switch (this.opt.paginationType)
			{
				case 'single' :
					rect = _this._buildSinglePagination(page, next, prev, total);
				break;

				case 'multiple' :
					rect = _this._buildMultiplePagination(page, next, prev, total);
				break;

				case 'infinite' :
					rect = _this._buildInfinitePagination(page, next, prev, total);
				break;
			}

			return rect;

		},

		_buildSinglePagination: function(page, next, prev, total) {

			var params,
				perPage,
				rect = [];

			if (pagi.filteredCount !== pagi.totalCount)
			{
				perPage = this._resultsPerPage(pagi.filteredCount, total);
			}
			else
			{
				perPage = this._resultsPerPage(pagi.totalCount, total);
			}

			params = {
				pageStart: perPage === 0 ? 0 : ( pagi.pageIdx === 1 ? 1 : ( perPage * (pagi.pageIdx - 1 ) + 1)),
				pageLimit: pagi.pageIdx === 1 ? perPage : ( pagi.totalCount < (perPage * pagi.pageIdx )) ? pagi.totalCount : perPage * pagi.pageIdx,
				nextPage: next,
				prevPage: prev,
				page: page,
				active: true,
				single: true,
				totalPages: total,
				totalCount: pagi.totalCount,
				filteredCount: pagi.filteredCount
			};

			rect.push(params);

			return { pagination: rect };

		},

		_buildMultiplePagination: function(page, next, prev, total) {

			var params,
				perPage,
				rect = [];

			if ((pagi.totalCount > this.opt.throttle) && (pagi.filteredCount > this.opt.throttle))
			{
				perPage = this._resultsPerPage(this.opt.throttle, this.opt.dividend);

				for (var i = 1; i <= this.opt.dividend; i++)
				{

					params = {
						pageStart: perPage === 0 ? 0 : ( i === 1 ? 1 : (perPage * (i - 1) + 1)),
						pageLimit: i === 1 ? perPage : (pagi.totalCount < this.opt.throttle && i === this.opt.dividend) ? pagi.totalCount : perPage * i,
						nextPage: next,
						prevPage: prev,
						page: i,
						active: pagi.pageIdx === i ? true : false,
						throttle: false,
						totalCount: pagi.totalCount,
						filteredCount: pagi.filteredCount
					};

					rect.push(params);
				}

				if (pagi.totalCount > this.opt.throttle)
				{
					params = {
						throttle: true
					};

					rect.push(params);
				}
			}
			else
			{

				if (pagi.filteredCount !== pagi.totalCount)
				{
					perPage = this._resultsPerPage(pagi.filteredCount, total);
				}
				else
				{
					perPage = this._resultsPerPage(pagi.totalCount, total);
				}

				for (var i = 1; i <= total; i++)
				{

					params = {
						pageStart: perPage === 0 ? 0 : ( i === 1 ? 1 : (perPage * (i - 1) + 1)),
						pageLimit: i === 1 ? perPage : (pagi.totalCount < this.opt.throttle && i === this.opt.dividend) ? pagi.totalCount : perPage * i,
						nextPage: next,
						prevPage: prev,
						page: i,
						active: pagi.pageIdx === i ? true : false,
						totalCount: pagi.totalCount,
						filteredCount: pagi.filteredCount
					};

					rect.push(params);
				}

			}

			return { pagination: rect };


		},

		_buildInfinitePagination: function(page, next, prev, total) {

			var params,
				rect = [];

			params = {
				page: page,
				infinite: true
			};

			rect.push(params);

			return { pagination: rect };

		},

		_resultsPerPage: function(dividend, divisor) {

			return Math.ceil(dividend / divisor);

		},

		_removeFilters: function(idx) {

			appliedFilters.splice(idx, 1);

			// TODO: See about removing this
			this.$filters.html( this.tmpl['filters']({ filters: appliedFilters }));
			this._goToPage(1);
			$(this).trigger('dg:update');

		},

		_goToPage: function(idx) {

			if (isNaN(idx = parseInt(idx, 10)))
			{
				idx = 1;
			}

			pagi.pageIdx = idx;

		},

		_loading: function() {

			var _this = this;

			$(document).ajaxStart(function() {
				$(_this.opt.loader).fadeIn();
			}).ajaxStop(function() {
				$(_this.opt.loader).fadeOut();
			});
		},

		_reset: function() {

			// Elements
			this.$body.find('[data-sort]'+this.grid).removeClass(this.opt.sortClasses.asc);
			this.$body.find('[data-sort]'+this.grid).removeClass(this.opt.sortClasses.desc);
			this.$body.find('[data-search]'+this.grid).find('input').val('');
			this.$body.find('[data-search]'+this.grid).find('select').prop('selectedIndex', 0);

			// Filters
			appliedFilters = [];

			// Sort
			currentSort.index = 0;
			currentSort.direction = '';
			currentSort.column = '';

			// Pagination
			pagi.pageIdx = 1;

			// Remove all rendered content
			this.$results.empty();
			this.$filters.empty();

			// Updated
			$(this).trigger('dg:update');

		},

		_refresh: function() {

			$(this).trigger('dg:update');

		},

		_callback: function() {

			var callbackObject = $.extend({}, pagi, currentSort, appliedFilters);

			if (this.opt.callback !== undefined && $.isFunction(this.opt.callback))
			{
				this.opt.callback(callbackObject);
			}

		}

	};

	$.datagrid = function(grid, results, pagination, filters, options) {
		return new DataGrid(grid, results, pagination, filters, options);
	};

})(jQuery, window, document);
