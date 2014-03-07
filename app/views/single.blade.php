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
		loader: '.loading',
		events: {
			'removeFilter:before': function(obj) {},
			'removeFilter:after': function(obj) {},

			'applyFilter:before': function(obj) {},
			'applyFilter:after': function(obj) {},

			'sortDirection:before': function(obj) {},
			'sortDirection:after': function(obj) {},

			'switchPage:before': function(obj) {},
			'switchPage:after': function(obj) {},

			'fetchResults:before': function(obj) {},
			'fetchResults:after': function(obj) {},
		},
		sort: {
			column: 'city',
			direction: 'asc'
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
				Filters <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu">
				<li><a href="#" data-grid="single" data-filter="country:us" data-label="country:Country:United States">United States</a></li>
				<li><a href="#" data-grid="single" data-filter="country:ca" data-label="country:Country:Canada">Canada</a></li>
				<li><a href="#" data-grid="single" data-filter="population:>:10000" data-label="population:Population >:10000">Populations > 10000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:=:5000" data-label="population:Populations is:5000">Populations = 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:>:5000">Populations > 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="population:<:5000">Populations < 5000</a></li>
				<li><a href="#" data-grid="single" data-filter="country:us, subdivision:washington, population:<:5000" data-label="country:Country:United States, subdivision:Subdivision:Washington, population:Population:5000">Washington, United States < 5000</a></li>
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

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="single" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-start data-range-filter="created_at" data-label="Created At" placeholder="Start Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="single" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-end data-range-filter="created_at" data-label="Created At" placeholder="End Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-6">

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
