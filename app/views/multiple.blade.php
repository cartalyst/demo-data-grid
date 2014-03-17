@extends('template')

{{-- Page title --}}
@section('title')
Multiple Grids
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
	var grid1 = $.datagrid('multi1', '.table', '#pagination1', '.applied-filters', {
		dividend: 1,
		throttle: 20,
		threshold: 20,
		loader: '.loading',
		sort: {
			column: 'city',
			direction: 'asc'
		},
		//scroll: '.table[data-grid="multi1"]', // Auto Scroll feature.
		callback: function(obj) {

			// Leverage the Callback to show total counts or filtered count
			$('#total1').val(obj.pagination.totalCount);
			$('#filtered1').val(obj.pagination.filteredCount);
			$('#dividend1').val(obj.opt.dividend);
			$('#threshold1').val(obj.opt.threshold);
			$('#throttle1').val(obj.opt.throttle);

		}
	});

	// Setup DataGrid
	var grid2 = $.datagrid('multi2', '.table', '#pagination2', '.applied-filters', {
		dividend: 1,
		throttle: 20,
		threshold: 20,
		loader: '.loading',
		sort: {
			column: 'city',
			direction: 'asc'
		},
		//scroll: '.table[data-grid="multi2"]', // Auto Scroll feature.
		callback: function(obj) {

			// Leverage the Callback to show total counts or filtered count
			$('#total2').val(obj.pagination.totalCount);
			$('#filtered2').val(obj.pagination.filteredCount);
			$('#dividend2').val(obj.opt.dividend);
			$('#threshold2').val(obj.opt.threshold);
			$('#throttle2').val(obj.opt.throttle);

		}
	});

	// Text Binding
	$('.hidden-select').change(function() {

		$(this).next('.options').find('li').text($(this).find(':selected').text());

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
				grid1.setDividend(val);
				grid2.setDividend(val);
			break;

			case 'throttle':
				grid1.setThrottle(val);
				grid2.setThrottle(val);
			break;

			case 'threshold':
				grid1.setThreshold(val);
				grid2.setThreshold(val);
			break;
		}

		grid1.reset();
		grid1.refresh();

		grid2.reset();
		grid2.refresh();

	});

	$('#auto-scroll').on('change', function()
	{
		var isChecked = $(this).prop('checked');

		grid1.setScroll(isChecked ? '.table1' : null);
	});

	$('#auto-scroll1').on('change', function()
	{
		var isChecked = $(this).prop('checked');

		grid2.setScroll(isChecked ? '.table2' : null);
	});

});
</script>

@stop

{{-- Page content --}}
@section('content')

<h1>Multiple Grids</h1>

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
		<input type="text" name="total" value="" disabled class="disabled" id="total1">
		<h4>Total</h4>
		<span class="text-muted">Results returned from query</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="filtered" value="" disabled class="disabled" id="filtered1">
		<h4>Filtered</h4>
		<span class="text-muted">Results after filters applied.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="throttle" value="" data-grid="single" data-opt="throttle" id="throttle1">
		<h4>Throttle</h4>
		<span class="text-muted">Maximum results on a single page.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="threshold" value="" data-grid="single" data-opt="threshold" id="threshold1" class="disabled" disabled>
		<h4>Threshold</h4>
		<span class="text-muted">Minimum results before paginating.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="dividend" value="" data-grid="single" data-opt="dividend" id="dividend1" class="disabled" disabled>
		<h4>Dividend</h4>
		<span class="text-muted">Maximum "pages" to divide results by.</span>
	</div>

</div>

<hr>

<div class="row">

	<div class="col-md-2">

		<div class="btn-group">

			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				Filters <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu">
				<li><a href="#" data-filter="population:>:10000" data-grid="multi1">Population > 10000</a></li>
				<li><a href="#" data-filter="population:<:5000" data-grid="multi1">Population < 5000</a></li>
				<li><a href="#" data-filter="population:=:5000" data-grid="multi1">Population = 5000</a></li>
			</ul>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="multi1" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-start data-range-filter="created_at" data-label="Created At" placeholder="Start Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="multi1" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-end data-range-filter="created_at" data-label="Created At" placeholder="End Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-6">

		<form data-search data-grid="multi1" class="search">

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

		<div class="applied-filters" data-grid="multi1"></div>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<table class="table table1 table-bordered table-striped" data-source="{{ URL::to('source') }}" data-grid="multi1">
			<thead>
				<tr>
					<th data-sort="country" class="sortable">Country</th>
					<th data-sort="subdivision" class="sortable">Subdivision</th>
					<th data-sort="city" class="sortable">City</th>
					<th data-sort="population" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>

	</div>

</div>

<footer class="row" data-grid="multi1" id="pagination1"></footer>



<hr>

<label>
	<input type="checkbox" name="auto-scroll" id="auto-scroll1" value="1">
	Enable / Disable the Auto Scroll feature
</label>

<hr>

<div class="row placeholders">

	<div class="col-xs-12 col-sm-2 placeholder">
		<p class="entice">Go on, play with the throttle.</p>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="total" value="" disabled class="disabled" id="total2">
		<h4>Total</h4>
		<span class="text-muted">Results returned from query</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="filtered" value="" disabled class="disabled" id="filtered2">
		<h4>Filtered</h4>
		<span class="text-muted">Results after filters applied.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="throttle" value="" data-grid="single" data-opt="throttle" id="throttle2">
		<h4>Throttle</h4>
		<span class="text-muted">Maximum results on a single page.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="threshold" value="" data-grid="single" data-opt="threshold" id="threshold2" class="disabled" disabled>
		<h4>Threshold</h4>
		<span class="text-muted">Minimum results before paginating.</span>
	</div>

	<div class="col-xs-12 col-sm-2 placeholder">
		<input type="text" name="dividend" value="" data-grid="single" data-opt="dividend" id="dividend2" class="disabled" disabled>
		<h4>Dividend</h4>
		<span class="text-muted">Maximum "pages" to divide results by.</span>
	</div>

</div>

<hr>

<div class="row">

	<div class="col-md-2">

		<div class="btn-group">

			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				Filters <span class="caret"></span>
			</button>

			<ul class="dropdown-menu" role="menu">
				<li><a href="#" data-filter="population:>:10000" data-grid="multi2">Population > 10000</a></li>
				<li><a href="#" data-filter="population:<:5000" data-grid="multi2">Population < 5000</a></li>
				<li><a href="#" data-filter="population:=:5000" data-grid="multi2">Population = 5000</a></li>
			</ul>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="multi2" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-start data-range-filter="created_at" data-label="Created At" placeholder="Start Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="multi2" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-end data-range-filter="created_at" data-label="Created At" placeholder="End Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-6">

		<form data-search data-grid="multi2" class="search">

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

		<div class="applied-filters" data-grid="multi2"></div>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<table class="table table2 table-bordered table-striped" data-source="{{ URL::to('source') }}" data-grid="multi2">
			<thead>
				<tr>
					<th data-sort="country" class="sortable">Country</th>
					<th data-sort="subdivision" class="sortable">Subdivision</th>
					<th data-sort="city" class="sortable">City</th>
					<th data-sort="population" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>

	</div>

</div>

<footer class="row" data-grid="multi2" id="pagination2"></footer>


@include('templates/multiple/1/results-tmpl')
@include('templates/multiple/1/pagination-tmpl')
@include('templates/multiple/1/filters-tmpl')
@include('templates/multiple/1/no-results-tmpl')

@include('templates/multiple/2/results-tmpl')
@include('templates/multiple/2/pagination-tmpl')
@include('templates/multiple/2/filters-tmpl')
@include('templates/multiple/2/no-results-tmpl')

@stop
