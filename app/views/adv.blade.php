@extends('template')

{{-- Page title --}}
@section('title')
Single Pagination
@stop

{{-- Inline styles --}}
@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/single.css') }}">
<link rel="stylesheet" href="{{ URL::asset('assets/css/datepicker.css') }}">
@stop

{{-- Inline scripts --}}
@section('scripts')

<script src="{{ URL::asset('assets/js/moment.js') }}"></script>
<script src="{{ URL::asset('assets/js/bootstrap-datetimepicker.js') }}"></script>

<script>
$(function() {

	// Setup DataGrid
	var grid = $.datagrid('single', '.table', '#pagination', '.applied-filters', {
		throttle: 20,
		defaultFilters: {
			'filter': {
				column: 'country',
				value: 'us'
			}
		},
		loader: '.loading',
		events: {
			'removing': function(obj) {},
			'removed': function(obj) {},

			'applying': function(obj) {},
			'applied': function(obj) {},

			'sorting': function(obj) {},
			'sorted': function(obj) {},

			'switching': function(obj) {},
			'switched': function(obj) {},

			'fetching': function(obj) {},
			'fetched': function(obj) {},
		},
		//scroll: '.table', // Auto Scroll feature.
		callback: function(obj) {

			// Leverage the Callback to show total counts or filtered count


			$('#equation-filtered').html(obj.pagination.filteredCount);
			$('#equation-dividend').html(obj.opt.dividend);
			$('#equation-throttle').html(obj.opt.throttle);

			$('#total').val(obj.pagination.totalCount);
			$('#filtered').val(obj.pagination.filteredCount);
			$('#dividend').val(obj.opt.dividend);
			$('#threshold').val(obj.opt.threshold);
			$('#throttle').val(obj.opt.throttle);

		}
	});

	// Text Binding
	$('.hidden-select').change(function() {

		$('.options').find('li').text($('.hidden-select option:selected').text());

	});

	// Date Picker
	$('.datePicker').datetimepicker({
		pickTime: false
	});

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();


	/**
	 * DEMO ONLY EVENTS
	 */
	$('[data-opt]').on('change', function() {

		var opt = $(this).data('opt'),
			val = $(this).val();

		switch(opt)
		{
			case 'dividend':
				grid.setDividend(val);
			break;

			case 'throttle':
				grid.setThrottle(val);
			break;

			case 'threshold':
				grid.setThreshold(val);
			break;
		}

		grid.reset();
		grid.refresh();

	});

	$('#auto-scroll').on('change', function()
	{
		var isChecked = $(this).prop('checked');

		grid.setScroll(isChecked ? '.table' : null);
	});

});
</script>

@stop

{{-- Page content --}}
@section('content')

<h1>Single Pagination</h1>

<p>Use dividend, throttle, and threshold to create any pagination type that you could possibly imagine.</p>

<hr>

<label>
	<input type="checkbox" name="auto-scroll" id="auto-scroll" value="1">
	Enable / Disable the Auto Scroll feature
</label>

<hr>

<div class="row placeholders">

	<div class="col-xs-12 col-sm-2 placeholder">
		<p class="entice">Go on, play with the throttle.</p>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="total" value="" disabled class="disabled" id="total">
		<h4>Total</h4>
		<span class="text-muted">Results returned from query</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="filtered" value="" disabled class="disabled" id="filtered">
		<h4>Filtered</h4>
		<span class="text-muted">Results after filters applied.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="throttle" value="" data-grid="single" data-opt="throttle" id="throttle">
		<h4>Throttle</h4>
		<span class="text-muted">Maximum results on a single page.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="threshold" value="" data-grid="single" data-opt="threshold" id="threshold" class="disabled" disabled>
		<h4>Threshold</h4>
		<span class="text-muted">Minimum results before paginating.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="dividend" value="" data-grid="single" data-opt="dividend" id="dividend" class="disabled" disabled>
		<h4>Dividend</h4>
		<span class="text-muted">Maximum "pages" to divide results by.</span>
	</div>

</div>

<hr>

<div class="row">

	<div class="col-md-1">
		<div class="btn-group">

			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				Dates <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu" data-filter-reset data-grid="single">
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->format('Y-m-d') }}" data-label="created_at:Created At:Today">Today</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->subDay()->format('Y-m-d') }}" data-label="created_at:Created At:Yesterday">Yesterday</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->startOfWeek()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->format('Y-m-d') }}" data-label="created_at:This Week">This Week</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->subWeek()->startOfWeek()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->subWeek()->endOfWeek()->format('Y-m-d') }}" data-label="created_at:Last Week">Last Week</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->startOfMonth()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->format('Y-m-d') }}" data-label="created_at:This Month">This Month</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->subMonth()->startOfMonth()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->subMonth()->endOfMonth()->format('Y-m-d') }}" data-label="created_at:Last Month">Last Month</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->startOfYear()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->now()->format('Y-m-d') }}" data-label="created_at:This Year">This Year</a></li>
				<li><a href="#" data-filter="created_at:{{ Carbon\Carbon::now()->subYear()->startOfYear()->format('Y-m-d') }}:{{ Carbon\Carbon::now()->subYear()->endOfYear()->format('Y-m-d') }}" data-label="created_at:Last Year">Last Year</a></li>
			</ul>

		</div>
	</div>

	<div class="col-md-1">

		<div class="btn-group">

			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				Filters <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu">
				<li><a href="#" data-grid="single" data-filter="country:ca" data-filter-reset data-label="country:Country:Canada">Canada</a></li>
				<li><a href="#" data-grid="single" data-filter="population:>:10000" data-label="population:Population >:10000">Populations > 10000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:=:5000" data-label="population:Populations is:5000">Populations = 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:>:5000">Populations > 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:<:5000">Populations < 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="country:us; subdivision:washington; population:<:5000" data-label="country:Country:United States; subdivision:Subdivision:Washington; population:Population:5000">Washington, United States < 5000</a></li>
			</ul>

		</div>

	</div>

	<div class="col-md-1">

		<div class="btn-group">

			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				Export <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu">
				<li><a href="#" data-grid="single" data-download="csv">Export to CSV</a></li>
				<li><a href="#" data-grid="single" data-download="pdf">Export to PDF</a></li>
			</ul>

		</div>

	</div>

	<div class="col-md-9">

		<form data-search data-grid="single" class="search">

			<div class="select">

				<select name="column" class="hidden-select">
					<option value="all">All</option>
					<option value="subdivision">Subdivision</option>
					<option value="city">City</option>
				</select>

				<ul class="options">
					<li>All</li>
				</ul>

			</div>

			<input type="text" name="filter" placeholder="Search" class="search-input">

			<div class="loading">Loading &hellip;</div>

			<button class="search-btn"><i class="fa fa-search"></i></button>

		</form>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<div class="default-filters" data-grid="single"></div>
		<div class="applied-filters" data-grid="single"></div>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<table class="table table-bordered table-striped" data-source="{{ URL::to('source') }}" data-grid="single">
			<thead>
				<tr>
					<th data-sort="id" data-grid="single" class="sortable">ID</th>
					<th data-sort="country" data-grid="single" class="sortable">Country</th>
					<th data-sort="subdivision" data-grid="single" class="sortable">Subdivision</th>
					<th data-sort="city" data-grid="single" class="sortable">City</th>
					<th data-sort="population" data-grid="single" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>

	</div>

</div>

<footer id="pagination" class="row" data-grid="single"></footer>

@include('templates/single/results-tmpl')
@include('templates/single/pagination-tmpl')
@include('templates/single/filters-tmpl')
@include('templates/single/no-results-tmpl')

@stop





<script type="text/template" data-grid="single" data-template="default-filters">

	<% _.each(filters, function(f) { %>

			<button class="btn btn-default remove-filter">

				<% if (f.from !== undefined && f.to !== undefined) { %>

					<% if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(f.from) && /[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(f.to)) { %>
						<%= f.label %> <em><%= moment(f.from).format('MMM DD, YYYY') + ' - ' + moment(f.to).format('MMM DD, YYYY') %></em>
					<% } else { %>
						<%= f.label %> <em><%= f.from + ' - ' + f.to %></em>
					<% } %>

				<% } else if (f.colMask !== undefined && f.valMask !== undefined) { %>

					<%= f.colMask %> <em><%= f.valMask %></em>

				<% } else { %>

					<% if (f.column === 'all') { %>

						<%= f.value %>

					<% } else { %>

						<%= f.value %> in <em><%= f.column %></em>

					<% } %>

				<% } %>

				<span><i class="fa fa-minus-square-o"></i></span>

			</button>

	<% }); %>

</script>
