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
			delimiter: ':',
			defaultSort: {},
			templateSettings : {
				evaluate    : /<%([\s\S]+?)%>/g,
				interpolate : /<%=([\s\S]+?)%>/g,
				escape      : /<%-([\s\S]+?)%>/g
			},
			scroll: null,
			searchTimeout: 800,
			loader: undefined,
			callback: undefined
		};

	// Hash Settings
	var route = '';
	var defaultHash = '';

	// Search
	var searchTimeout;
	var isSearchActive = false;

	function DataGrid(grid, results, pagination, filters, options) {

		var _this = this;
			_this.key = grid;
			_this.grid = '[data-grid="'+_this.key+'"]';

			_this.appliedFilters = [];

			_this.currentSort = {
				column: null,
				direction: null,
				index: 0
			};

			_this.pagi = {
				pageIdx: 1,
				totalCount: null,
				filteredCount: null,
				baseTrottle: null
			};

			// Our Main Elements
			_this.$results      = $(results + _this.grid);
			_this.$pagination   = $(pagination + _this.grid);
			_this.$filters      = $(filters + _this.grid);
			_this.$body         = $(document.body);

			// Options
			_this.opt = $.extend({}, defaults, options);

			// Source
			_this.source = _this.$results.data('source') || _this.opt.source;

			// Safty Check
			if (_this.$results.get(0).tagName.toLowerCase() === 'table')
			{
				_this.$results = $(results + this.grid).find('tbody');
			}

			// Setup Default Hash
			defaultHash = _this.key;
			// Setup Base Throttle
			this.pagi.baseTrottle = _this.opt.throttle;

		this._checkDependencies(results, pagination, filters);

		this._init();

	}

	DataGrid.prototype = {

		_init: function() {

			this._addEventListeners();

			this._checkHash();

		},

		_checkRangeFilters: function() {

			var _this = this;

			$.each($('[data-range-filter]'+this.grid+','+this.grid+' '+'[data-range-filter]'), function(e)
			{
				var key = $(this).data('range-filter');

				for (var i = 0; i < _this.appliedFilters.length; i++)
				{

					if (_this._searchForKey(key, _this.appliedFilters) !== -1)
					{
						if ($(this).data('operator') === _this.appliedFilters[i].operator)
						{
							$(this).val(_this.appliedFilters[i].value);
						}
					}

				}

			});

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

			this._handleHashChange(newPath);

		},

		_addEventListeners: function() {

			var _this = this;

			$(this).on('dg:update', this._ajaxFetchResults);

			$(window).on('hashchange', function() {

				var hash = String(window.location.hash.slice(3));

				var routeArr = hash.split('/');

				_this.$filters.empty();
				_this.appliedFilters = [];
				_this.$body.find('[data-range-filter]'+_this.grid).find('input').val('');

				routeArr = _.compact(routeArr);

				if ( ! _.isEmpty(routeArr))
				{
					_this._updateOnHash(routeArr);
				}
				else
				{
					_this.$body.find('[data-sort]'+_this.grid).removeClass(_this.opt.sortClasses.asc);
					_this.$body.find('[data-sort]'+_this.grid).removeClass(_this.opt.sortClasses.desc);
					_this.$body.find('[data-search]'+_this.grid).find('input').val('');
					_this.$body.find('[data-search]'+_this.grid).find('select').prop('selectedIndex', 0);
					_this.$body.find('[data-range-filter]'+_this.grid).find('input').val('');

					// Filters
					_this.appliedFilters = [];

					// Sort
					_this.currentSort.index = 0;
					_this.currentSort.direction = '';
					_this.currentSort.column = '';

					// Pagination
					_this.pagi.pageIdx = 1;

					// Remove all rendered content

					if (_this.opt.paginationType === 'infinite')
					{
						_this.$results.empty();
					}

					_this.$filters.empty();
					_this.$pagination.empty();

					$(_this).trigger('dg:update');
				}

			});

			this.$body.on('click', '[data-sort]'+this.grid, function(){

				if (_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty();
				}

				_this._extractSortsFromClick($(this) , $(this).data('sort'));

			});

			this.$body.on('click', '[data-filter]'+this.grid, function(e) {

				e.preventDefault();

				if (_this.opt.scroll && $(this).data('scroll') !== null)
				{
					$(document.body).animate({ scrollTop: $(_this.opt.scroll).offset().top }, 200);
				}

				if ($(this).data('single-filter') !== undefined)
				{
					_this.appliedFilters = [];
				}

				if(_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty();

					_this.pagi.pageIdx = 1;
				}

				_this._extractFiltersFromClick($(this).data('filter'), $(this).data('label'), $(this).data('operator'));

			});

			$('.datePicker').on('change.dp', function(e) {

				_this._removeRangeFilters($(this));

				_this._rangeFilter($(this));

			});

			this.$filters.on('click', '> *', function(e) {

				e.preventDefault();

				_this._removeFilters($(this).index());

				if(_this.opt.paginationType === 'infinite')
				{
					_this.$results.empty();
				}

				_this.$body.find('[data-select-filter]'+_this.grid).find('option:eq(0)').prop('selected', true);

				$(_this).trigger('dg:update');

			});

			_this._selectFilter($('[data-select-filter]'+this.grid));

			this.$body.on('change', '[data-select-filter]'+this.grid, function(){

				$(this).unbind('change');

				_this._selectFilter($(this));

			});

			this.$pagination.on('click', '[data-page]', function(e) {

				e.preventDefault();

				if (_this.opt.scroll)
				{
					$(document.body).animate({ scrollTop: $(_this.opt.scroll).offset().top }, 200);
				}

				_this._handlePageChange($(this));

			});

			this.$pagination.on('click', '[data-throttle]', function(e) {
				e.preventDefault();

				_this.opt.throttle += pagi.baseTrottle;

				$(_this).trigger('dg:update');

			});

			this.$body.on('submit keyup', '[data-search]'+this.grid, function(e){

				e.preventDefault();

				if (e.type === 'submit')
				{
					_this._handleSearchOnSubmit($(this));
				}
				else if (e.type === 'keyup' && e.keyCode !== 13)
				{
					_this._handleLiveSearch($(this));
				}

			});

		},

		_applyFilter: function(filters) {

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

		_handleHashChange: function(hash) {

			var routeArr = hash.split('/');

			routeArr = _.compact(routeArr);

			this._updateOnHash(routeArr);

		},

		_updateOnHash: function(routeArr) {

			var curIndex = _.indexOf(routeArr, this.key);

			var curRoute = routeArr.join('/');

			route = curRoute;

			var routes = _.compact(curRoute.split('grid/'));

			var _this = this;

			if (_this.opt.paginationType === 'infinite')
			{
				_this.$results.empty();
			}

			_.each(routes, function(route)
			{
				var parsedRoute = route.split('/');

				parsedRoute = _.compact(parsedRoute);

				if (parsedRoute[0] === _this.key)
				{
					// Build Array For Sorts
					var lastItem = parsedRoute[(parsedRoute.length - 1)];
					var nextItem = parsedRoute[(parsedRoute.length - 2)];

					// Use test to return true/false
					if (/page/g.test(lastItem))
					{
						// Remove Page From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						_this._extractPageFromRoute(lastItem);
					}
					else
					{
						_this.pagi.pageIdx = 1;
					}

					if ((/desc/g.test(nextItem)) || (/asc/g.test(nextItem)))
					{
						// Remove Sort From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						_this._extractSortsFromRoute(nextItem);
					}
					else if ((/desc/g.test(lastItem)) || (/asc/g.test(lastItem)))
					{
						// Remove Sort From parsedRoute
						parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

						_this._extractSortsFromRoute(lastItem);
					}
					else if (_this.opt.defaultSort.hasOwnProperty('column') &&
							_this.opt.defaultSort.hasOwnProperty('direction'))
					{
						// Convert Object to string
						var str = _this.opt.defaultSort.column+_this.opt.delimiter+_this.opt.defaultSort.direction;

						_this._extractSortsFromRoute(str);
					}
					else
					{
						_this.currentSort.direction = '';
						_this.currentSort.column = '';
					}

					// Build Array For Filters
					if (parsedRoute.length !== 0 )
					{
						// We Must Reset then rebuild.
						_this.appliedFilters = [];

						_this._extractFiltersFromRoute(parsedRoute);
					}
					else
					{
						// Reset Applied Filters if none are set via the hash
						_this.appliedFilters = [];

						_this.$filters.empty();
					}
				}
			});

			// Initial default sort
			if (_.isEmpty(routes) && this.opt.defaultSort.hasOwnProperty('column') && this.opt.defaultSort.hasOwnProperty('direction'))
			{
				var str = this.opt.defaultSort.column+this.opt.delimiter+this.opt.defaultSort.direction;

				this._extractSortsFromRoute(str);
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

			var searchSelect = el.find('select:not([data-select-filter])');

			if (searchSelect.length)
			{
				column = searchSelect.val();

				searchSelect.prop('selectedIndex', 0);
			}

			// If theres a live search item with the same value
			// we remove the live search item
			if (this._searchForValue( $input.val(), this.appliedFilters) > -1)
			{
				var idx = this._searchForValue($input.val(), this.appliedFilters);

				this.appliedFilters.splice(idx, 1);
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

		_handleLiveSearch: function(el) {

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

				var searchSelect = el.find('select:not([data-select-filter])');

				if (searchSelect.length)
				{
					column = searchSelect.val();
				}

				var $input = el.find('input');
				var curr = $input.val();
				var old = $input.data('old');

				// Remove the old term from the applied filters
				for (var i = 0; i < _this.appliedFilters.length; i++)
				{

					if(_this.appliedFilters[i].value === old)
					{
						_this.appliedFilters.splice(i, 1);
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
			$('[data-sort]'+this.grid+','+this.grid+' [data-sort]').not(el).removeClass(this.opt.sortClasses.asc);
			$('[data-sort]'+this.grid+','+this.grid+' [data-sort]').not(el).removeClass(this.opt.sortClasses.desc);

			if (this.currentSort.index === 3)
			{
				el.removeClass(this.opt.sortClasses.asc);

				el.removeClass(this.opt.sortClasses.desc);

				// reset our sorting index back to 0
				// and set the column to nothing
				this.currentSort.index = 0;
				this.currentSort.column = '';
			}
			else
			{
				// get the oppsite class from which is set
				var remove = this.currentSort.direction === 'asc' ? this.opt.sortClasses.desc : this.opt.sortClasses.asc;

				el.removeClass(remove);

				el.addClass(this.opt.sortClasses[this.currentSort.direction]);
			}

		},

		_extractPageFromRoute: function(page) {

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

		_extractRangeFilters: function(filter)
		{
			var curFilter = filter.find('[data-range-filter]').data('range-filter');

			var startDateFilter = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]').data('range-filter');
			var startVal = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]').val();
			var endVal = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]').val();
			var startLabel = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]').data('label');

			var dateFormat = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]').data('format');

			var dbFormat = 'YYYY-MM-DD';

			var column = startDateFilter;
			var from   = startVal;
			var to     = endVal;

			if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
			{
				from   = moment(from).format(dbFormat);
				to     = moment(to).format(dbFormat);
			}

			var filterData = {
				column: startDateFilter,
				from: from,
				to: to,
				label: startLabel,
				type: 'range'
			};

			this._applyFilter(filterData);

		},

		_extractFiltersFromClick: function(filters, labels, operator) {

			var _this = this;
			var rect = [];

			var filtersArr = filters.split(', ');

			for (var i = 0; i < filtersArr.length; i++)
			{
				var filter = filtersArr[i].split(':');

				if (_this._searchForValue(filter[1], _this.appliedFilters) > -1)
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
							maskOrg: label[0],
							operator: operator
						});
					}
					else
					{
						_this._applyFilter({
							column: filter[0],
							value: filter[1],
							operator: operator
						});
					}
				}
				else
				{
					_this._applyFilter({
						column: filter[0],
						value: filter[1],
						operator: operator
					});
				}
			}

			$(this).trigger('dg:update');

			this._goToPage(1);

		},

		_extractSortsFromClick: function(el, sort) {

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

			this._setSortDirection(el);
			$(this).trigger('dg:update');

		},

		_extractFiltersFromRoute: function(routeArr) {

			var _this = this;

			routeArr = routeArr.splice(1);

			this.appliedFilters = [];

			var labels = $('[data-label]'+this.grid+','+this.grid+' [data-label]');

			for (var i = 0; i < routeArr.length; i++)
			{

				var filters = routeArr[i].split(this.opt.delimiter);

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
						if (_this._searchForValue( filters[1], _this.appliedFilters) === -1 && $(labels[x]).data('operator') === '')
						{
							// if its not already set, lets set the filter
							_this._applyFilter({
								column: filters[0],
								value: filters[1],
								mask: (key === 0 ? 'column' : 'value'),
								maskOrg: matchedLabel[0]
							});
						}
						else if (_this._searchForValue( filters[1], _this.appliedFilters) === -1 && $(labels[x]).data('operator') !== '')
						{
							var operator = $(labels[x]).data('operator');

							// if its not already set, lets set the filter
							_this._applyFilter({
								column: filters[0],
								value: filters[1],
								operator: operator,
								mask: (key === 0 ? 'column' : 'value'),
								maskOrg: matchedLabel[0]
							});

						}

					}
				}

				// Check to  make sure filter isn't already set
				if (_this._searchForValue( filters[1], _this.appliedFilters) === -1)
				{
					var start = $('[data-range-start][data-range-filter="' + filters[0] + '"]').data('range-filter');
					var startLabel = $('[data-range-start][data-range-filter="' + filters[0] + '"]').data('label');

					var dateFormat = $('[data-range-start][data-range-filter="' + filters[0] + '"]').data('format');

					var dbFormat = 'YYYY-MM-DD';

					var column = routeArr[i].split(this.opt.delimiter)[0];
					var from   = routeArr[i].split(this.opt.delimiter)[1];
					var to     = routeArr[i].split(this.opt.delimiter)[2];

					if (dateFormat !== null && dateFormat !== undefined && window.moment !== undefined)
					{
						from   = moment(from).format(dbFormat);
						to     = moment(to).format(dbFormat);
					}

					if (window.moment !== undefined)
					{
						$('[data-range-start][data-range-filter="' + filters[0] + '"]').val(moment(from).format(dateFormat));
						$('[data-range-end][data-range-filter="' + filters[0] + '"]').val(moment(to).format(dateFormat));
					}
					else
					{
						$('[data-range-start][data-range-filter="' + filters[0] + '"]').val(from);
						$('[data-range-end][data-range-filter="' + filters[0] + '"]').val(to);
					}

					if (filters[0] === start)
					{
						var filterData = {
							column: column,
							from: from,
							to: to,
							label: startLabel,
							type: 'range'
						};

						_this._applyFilter(filterData);
					}
					else
					{
						var filterEl = $('[data-filter="' +  filters.join(_this.opt.delimiter) + '"]');

						if ( filterEl.data('operator') !== '' && filterEl.data('operator') !== undefined)
						{
							// If its not already set, lets set the filter
							_this._applyFilter({
								column: routeArr[i].split(this.opt.delimiter)[0],
								value: routeArr[i].split(this.opt.delimiter)[1],
								operator: filterEl.data('operator')
							});
						}
						else
						{
							// If its not already set, lets set the filter
							_this._applyFilter({
								column: routeArr[i].split(this.opt.delimiter)[0],
								value: routeArr[i].split(this.opt.delimiter)[1],
							});
						}
					}

				}

			}

		},

		_removeSort: function(route)
		{

			for (var i = 0; i < route.length; i++)
			{
				if ((/desc/g.test(route[i])) || (/asc/g.test(route[i])))
				{
					route = route.splice(i, 1);
				}
			}

			return route;
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

		_searchForKey: function(key, arr) {

			for (var i = 0; i < arr.length; i++)
			{
				if (arr[i].column === key)
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

			var sort = lastItem.split(this.opt.delimiter);

			// Setup Sort and put index at 1
			if (this.currentSort.column !== sort[0])
			{
				this.currentSort.index = 1;
			}

			this.currentSort.column = sort[0];
			this.currentSort.direction = sort[1];

			this._setSortDirection(
				$(
					'[data-sort^="' + sort[0] + '"]' + this.grid + ','+
					this.grid + ' [data-sort="' + sort[0] + '"]'
				)
			);

		},

		_updatedCurrentHash: function() {

			var curHash = String(window.location.hash.slice(3));

			var isset = curHash.indexOf(this.key);

			var routes = _.compact(curHash.split('grid/'));

			var _this = this;

			var base = '';

			var rtIndex = -1;

			_.each(routes, function(route)
			{
				var parsedRoute = route.split('/');

				var key = parsedRoute[0];

				// hash exists
				if (key === _this.key)
				{
					rtIndex = _.indexOf(routes, route);
				}
			});

			// Hash does not exist yet, we'll set a default hash
			// for this grid
			if (rtIndex === -1)
			{
				var curRoutes = routes.join('grid/');

				if (curRoutes !== '')
				{
					curRoutes = 'grid/' + curRoutes;

					base = curRoutes +'grid/' + _this.key;
				}

				// #!/grid/column-value/column-sort
				// var base    = '/'+_this.key;
				var filters = _this._buildFilterFragment();
				var sort    = _this._buildSortFragment();
				var page    = _this._buildPageFragment();

				if (filters.length > 1)
				{
					base += filters;
				}

				if (sort.length > 1)
				{
					base += sort;
				}

				if (_this.pagi.pageIdx > 1 && page !== undefined)
				{
					base += page + '/';
				}

				if (base !== '')
				{
					base = '#!/' + this.key + base;
				}

				if (_this._checkIE() <= 9)
				{
					window.location.hash = base;
				}
				else
				{
					var defaultURI = window.location.protocol + '//' + window.location.host + window.location.pathname;


					if( window.location.href.indexOf('?') > -1 )
					{
						var indexOfQuery = window.location.href.indexOf('?');
						var indexOfHash = window.location.href.indexOf('#');

						if( indexOfHash > -1 ) {
							defaultURI += window.location.href.slice( indexOfQuery, indexOfHash);
						}else{
							defaultURI += window.location.href.substr(indexOfQuery);
						}
					}

					_this._handlePush(defaultURI, base);
				}
			}
			// Update existing hash
			else
			{

				_.each(routes, function(route)
				{
					var parsedRoute = route.split('/');

					var key = parsedRoute[0];

					// hash exists
					if (key === _this.key)
					{
						rtIndex = _.indexOf(routes, route);

						// remove existing hash
						routes = _.without(routes, route);

						var curRoutes = routes.join('grid/');

						if (curRoutes !== '')
						{
							curRoutes = 'grid/' + curRoutes;

							base = curRoutes +'grid/' + _this.key;
						}

						// #!/grid/column-value/column-sort
						// var base    = '/'+_this.key;
						var filters = _this._buildFilterFragment();
						var sort    = _this._buildSortFragment();
						var page    = _this._buildPageFragment();

						if (filters.length > 1)
						{
							base += filters;
						}

						if (sort.length > 1)
						{
							base += sort;
						}

						if (_this.pagi.pageIdx > 1 && page !== undefined)
						{
							base += page + '/';
						}

						if (base !== '')
						{
							base = _this.key + base;
						}

						if (rtIndex === 0)
						{
							base = '#!/' + base + curRoutes;
						}
						else
						{
							base = '#!/' + curRoutes + base;
						}

						if (_this._checkIE() <= 9)
						{
							window.location.hash = base;
						}
						else
						{
							var defaultURI = window.location.protocol + '//' + window.location.host + window.location.pathname;


							if( window.location.href.indexOf('?') > -1 )
							{
								var indexOfQuery = window.location.href.indexOf('?');
								var indexOfHash = window.location.href.indexOf('#');

								if( indexOfHash > -1 ) {
									defaultURI += window.location.href.slice( indexOfQuery, indexOfHash);
								}else{
									defaultURI += window.location.href.substr(indexOfQuery);
								}
							}

							_this._handlePush(defaultURI, base);
						}

					}
				});


			}

		},

		_handlePush: function(defaultURI, base) {

			if (base !== '' && window.location.hash !== base)
				window.history.pushState(null, null, defaultURI + base);

		},

		_buildPageFragment: function() {

			if (this.pagi.pageIdx !== 1 && this.opt.paginationType !== 'infinite')
				return '/page'+this.opt.delimiter+this.pagi.pageIdx;
			else
				return;

		},

		_buildFilterFragment: function() {

			var filterFragment = '';

			for (var i = 0; i < this.appliedFilters.length; i++)
			{

				if (this.appliedFilters[i].type !== 'live')
				{

					if (this.appliedFilters[i].mask === 'column')
					{
						filterFragment += '/'+this.appliedFilters[i].maskOrg+this.opt.delimiter+this.appliedFilters[i].value;
					}
					else if (this.appliedFilters[i].mask === 'value')
					{
						filterFragment += '/'+this.appliedFilters[i].column+this.opt.delimiter+this.appliedFilters[i].maskOrg;
					}
					else if (this.appliedFilters[i].type !== undefined)
					{
						filterFragment += '/'+this.appliedFilters[i].column+this.opt.delimiter+this.appliedFilters[i].from+this.opt.delimiter+this.appliedFilters[i].to;
					}
					else
					{
						filterFragment += '/'+this.appliedFilters[i].column+this.opt.delimiter+this.appliedFilters[i].value;
					}

				}

			}

			return filterFragment;

		},

		_buildSortFragment: function() {

			var sortFragment = '';

			if (this.currentSort.column !== null && this.currentSort.direction !== '')
			{
				if (this.currentSort.column !== this.opt.defaultSort.column || this.currentSort.direction !== this.opt.defaultSort.direction)
				{
					sortFragment += '/'+this.currentSort.column+this.opt.delimiter+this.currentSort.direction;

					return sortFragment;
				}
			}

			return '/';

		},

		_ajaxFetchResults: function() {

			var _this = this;

			this._loading();

			$.ajax({
				url: _this.source,
				dataType : 'json',
				data: _this._buildAjaxURI()
			})
			.done(function(response) {

				if (_this.pagi.pageIdx > response.pages_count)
				{
					_this.pagi.pageIdx = response.pages_count;
					$(_this).trigger('dg:update');
					return false;
				}

				_this.pagi.filteredCount = response.filtered_count;
				_this.pagi.totalCount = response.total_count;

				// Keep infinite results to append load more
				if(_this.opt.paginationType !== 'infinite')
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

				_this._stopLoading();

				_this._updatedCurrentHash();
				_this._callback();

			})
			.error(function(jqXHR, textStatus, errorThrown) {

				console.log('_ajaxFetchResults' + jqXHR.status, errorThrown);

			});

		},

		_buildAjaxURI: function() {

			var _this = this;

			var params = {};
				params.filters      = [];
				params.page         = this.pagi.pageIdx;
				params.dividend     = this.opt.dividend;
				params.threshold    = this.opt.threshold;
				params.throttle     = this.opt.throttle;

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				var filter = {};

				if ('mask' in this.appliedFilters[i])
				{

					if (this.appliedFilters[i].mask === 'column')
					{
						filter[this.appliedFilters[i].maskOrg] = this.appliedFilters[i].value;
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
						params.filters.push(this.appliedFilters[i].value);
					}
					else
					{

						if (this.appliedFilters[i].operator !== undefined && this.appliedFilters[i].operator !== null)
						{
							filter[this.appliedFilters[i].column] = '|' + this.appliedFilters[i].operator + this.appliedFilters[i].value + '|';
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
								var from     = this.appliedFilters[i].from;
								var to       = this.appliedFilters[i].to;
							}

							filter[this.appliedFilters[i].column] = '|' + '>' + from + '|' + '<' + to +'|';
						}
						else
						{
							filter[this.appliedFilters[i].column] = this.appliedFilters[i].value;
						}

						params.filters.push(filter);
					}
				}
			}

			params.sort = this.currentSort.column;
			params.direction = this.currentSort.direction;

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

			if (this.pagi.filteredCount !== this.pagi.totalCount)
			{
				perPage = this._resultsPerPage(this.pagi.filteredCount, total);
			}
			else
			{
				perPage = this._resultsPerPage(this.pagi.totalCount, total);
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

		_buildMultiplePagination: function(page, next, prev, total) {

			var params,
				perPage,
				rect = [];

			if ((this.pagi.totalCount > this.opt.throttle) && (this.pagi.filteredCount > this.opt.throttle))
			{
				perPage = this._resultsPerPage(this.opt.throttle, this.opt.dividend);

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
					perPage = this._resultsPerPage(this.pagi.filteredCount, total);
				}
				else
				{
					perPage = this._resultsPerPage(this.pagi.totalCount, total);
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

		_buildInfinitePagination: function(page, next, prev, total) {

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

		_resultsPerPage: function(dividend, divisor) {

			var pp = Math.ceil(dividend / this.opt.dividend);
			var max = Math.floor(this.opt.throttle / this.opt.dividend);

			if (pp > max)
			{
				pp = max;
			}

			return pp;

		},

		_removeRangeFilters: function(filter)
		{
			var startDateFilter = filter.find('[data-range-start]'+this.grid+','+this.grid+' '+'[data-range-start]').data('range-filter');
			var endDateFilter = filter.find('[data-range-end]'+this.grid+','+this.grid+' '+'[data-range-end]').data('range-filter');

			for (var i = 0; i < this.appliedFilters.length; i++)
			{
				if (this.appliedFilters[i].type === 'range' && (this.appliedFilters[i].column === startDateFilter || this.appliedFilters[i].column === endDateFilter))
				{
					this.appliedFilters.splice(i, 1);
				}
			};

		},

		_removeFilters: function(idx) {

			if (this.appliedFilters[idx].type === 'range')
			{
				this.$body.find('[data-range-filter="' + this.appliedFilters[idx].column + '"]'+this.grid+','+this.grid+' '+'[data-range-filter="' + this.appliedFilters[idx].column + '"]').val('');
			}

			this.appliedFilters.splice(idx, 1);

			// TODO: See about removing this
			this.$filters.html( this.tmpl['filters']({ filters: this.appliedFilters }));
			this._goToPage(1);

			this._triggerEvent('removeFilter');
		},

		_selectFilter: function(el)
		{
			var _this = this;

			this.$body.find('[data-select-filter]'+this.grid).on('change', function() {

				var filter = $(this).find(':selected').data('filter');
				var label = $(this).find(':selected').data('label');
				var operator = $(this).find(':selected').data('operator');

				if (filter !== undefined) {
					_this._extractFiltersFromClick(filter, label, operator);
				} else {
					_this._reset();

					$(_this).trigger('dg:update');
				}
			});

		},

		_rangeFilter: function(filter)
		{
			var curFilter = filter.find('[data-range-filter]').data('range-filter');

			var startVal = this.$body.find('[data-range-start][data-range-filter="' + curFilter + '"]').val();
			var endVal = this.$body.find('[data-range-end][data-range-filter="' + curFilter + '"]').val()

			if (startVal && endVal)
			{
				this._extractRangeFilters(filter);

				this._refresh();
			}
		},

		_goToPage: function(idx) {

			if (isNaN(idx = parseInt(idx, 10)))
			{
				idx = 1;
			}

			this.pagi.pageIdx = idx;

		},

		_loading: function() {
			this.$body.find(this.grid+this.opt.loader+','+this.grid+' '+this.opt.loader).fadeIn();
		},

		_stopLoading: function() {
			this.$body.find(this.grid+this.opt.loader+','+this.grid+' '+this.opt.loader).fadeOut();
		},

		_reset: function() {

			// Elements
			this.$body.find('[data-sort]'+this.grid).removeClass(this.opt.sortClasses.asc);
			this.$body.find('[data-sort]'+this.grid).removeClass(this.opt.sortClasses.desc);
			this.$body.find('[data-search]'+this.grid).find('input').val('');
			this.$body.find('[data-search]'+this.grid).find('select').prop('selectedIndex', 0);
			this.$body.find('[data-range-filter]'+_this.grid).find('input').val('');

			// Filters
			this.appliedFilters = [];

			// Sort
			this.currentSort.index = 0;
			this.currentSort.direction = '';
			this.currentSort.column = '';

			// Pagination
			this.pagi.pageIdx = 1;

			// Remove all rendered content
			this.$results.empty();
			this.$filters.empty();
			this.$pagination.empty();

		},

		_refresh: function() {

			$(this).trigger('dg:update');

		},

		_callback: function() {

			var callbackObject = this;

			if (this.opt.callback !== undefined && $.isFunction(this.opt.callback))
			{
				this.opt.callback(callbackObject);
			}

		},

		_triggerEvent: function(name)
		{
			var callbackObject = this;

			if (this.opt.events !== undefined)
			{
				if ($.isFunction(this.opt.events[name]))
				{
					this.opt.events[name](callbackObject);
				}
			}
		}

	};

	$.datagrid = function(grid, results, pagination, filters, options) {
		return new DataGrid(grid, results, pagination, filters, options);
	};

})(jQuery, window, document);
