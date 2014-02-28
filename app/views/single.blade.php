@extends('template')

{{-- Page title --}}
@section('title')
Single Pagination
@stop

{{-- Inline styles --}}
@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/single.css') }}" >
<link rel="stylesheet" href="{{ URL::asset('assets/css/datepicker.css') }}" >
@stop

{{-- Inline scripts --}}
@section('scripts')

<script src="{{ URL::asset('assets/js/moment.js') }}"></script>
<script src="{{ URL::asset('assets/js/bootstrap-datetimepicker.js') }}"></script>

<script>
	$(function(){

	// Setup DataGrid
	$.datagrid('single', '.table', '#pagination', '.applied-filters', {
		dividend: 1,
		throttle: 20,
		threshold: 20,
		loader: '.loading',
		paginationType: 'single',
		sort: {
			column: 'city',
			direction: 'asc'
		},
		callback: function(obj){

			//Leverage the Callback to show total counts or filtered count
			$('#total').val(obj.pagi.totalCount);
			$('#filtered').val(obj.pagi.filteredCount);
			$('#dividend').val(obj.opt.dividend);
			$('#threshold').val(obj.opt.threshold);
			$('#throttle').val(obj.opt.throttle);

		}
	});

	// Text Binding
	$('.hidden-select').change(function(){
		$('.options').find('li').text($('.hidden-select option:selected').text());
	});

	$('#pagination').on('click', 'a', function() {

		$(document.body).animate({ scrollTop: $('.table').offset().top }, 200);

	});

	$('.datePicker').datetimepicker({
		pickTime: false
	});

		$('[data-toggle="tooltip"]').tooltip();
});
</script>

@stop

{{-- Page content --}}
@section('content')

<h1>Single Pagination</h1>

<hr>

<div class="row placeholders">
	<div class="col-xs-6 col-sm-3 placeholder">
		<input type="text" name="total" value="" disabled class="disabled" id="total">
		<h4>Total</h4>
		<span class="text-muted">Results returned from query</span>
	</div>
	<div class="col-xs-6 col-sm-3 placeholder">
		<input type="text" name="filtered" value="" disabled class="disabled" id="filtered">
		<h4>Filtered</h4>
		<span class="text-muted">Results after filters applied.</span>
	</div>
	<div class="col-xs-6 col-sm-2 placeholder">
		<input type="text" name="threshold" value="" disabled class="disabled" data-grid="single" data-opt="threshold" id="threshold">
		<h4>Threshold</h4>
		<span class="text-muted">Minimum results before paginating.</span>
	</div>
	<div class="col-xs-6 col-sm-2 placeholder">
		<input type="text" name="dividend" value="" disabled class="disabled" data-grid="single" data-opt="dividend" id="dividend">
		<h4>Dividend</h4>
		<span class="text-muted">Maximum "pages" to divide results by.</span>
	</div>
	<div class="col-xs-6 col-sm-2 placeholder">
		<input type="text" name="throttle" value="" class="" data-grid="single" data-opt="throttle" id="throttle">
		<h4>Throttle</h4>
		<span class="text-muted">Maxmim results on a single page.</span>
	</div>
</div>

<hr>

<div class="row">

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="single" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-start data-range-filter="created_at" data-label="Created At" data-grid="single" placeholder="Start Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-2">

		<div class="form-group">

			<div class="input-group datePicker" data-grid="single" data-range-filter>

				<input type="text" data-format="DD MMM, YYYY" disabled class="form-control" data-range-filter="created_at" data-label="Created At" data-range-end data-grid="single" placeholder="End Date">

				<span class="input-group-addon" style="cursor: pointer;"><i class="fa fa-calendar"></i></span>

			</div>

		</div>

	</div>

	<div class="col-md-8">

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

			<button class='search-btn'>Apply Filter</button>

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
