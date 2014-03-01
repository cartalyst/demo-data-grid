@extends('template')

{{-- Page title --}}
@section('title')
Multiple Advanced
@stop

{{-- Inline styles --}}
@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/table.css') }}" >
@stop

{{-- Inline scripts --}}
@section('scripts')
<script>
$(function() {

	// Setup DataGrid
	$.datagrid('multiple', '.gridTable', '.pagination', '.applied-filters', {
		dividend: 10,
		threshold: 20,
		throttle: 500,
		loader: '.loading',
		paginationType: 'multiple',
		defaultSort: {
			column: 'city',
			direction: 'asc'
		},
		scroll: '.table',
		callback: function(obj){

			// Leverage the Callback to show total counts or filtered count
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

});
</script>
@stop

{{-- Page content --}}
@section('content')

<h1>Multiple Advanced Pagination</h1>

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
		<input type="text" name="throttle" value="" disabled class="disabled" data-grid="single" data-opt="throttle" id="throttle">
		<h4>Throttle</h4>
		<span class="text-muted">Maxmim results on a single page.</span>
	</div>

	<div class="col-xs-6 col-sm-2 placeholder">
		<input type="text" name="threshold" value="" data-grid="single" data-opt="threshold" id="threshold" class="disabled" disabled>
		<h4>Threshold</h4>
		<span class="text-muted">Minimum results before paginating.</span>
	</div>

	<div class="col-xs-6 col-sm-2 placeholder">
		<input type="text" name="dividend" value="" data-grid="single" data-opt="dividend" id="dividend" class="disabled" disabled>
		<h4>Dividend</h4>
		<span class="text-muted">Maximum "pages" to divide results by.</span>
	</div>

</div>

<hr>

<div class="cf">

	<form data-search data-grid="multiple" class="search">

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

		<input type="text" name="filter" placeholder="Filter All" class="search-input">

		<div class="loading"> Loading &hellip;</div>

		<button class='search-btn'>Apply Filter</button>
	</form>

</div>

<ul class="applied-filters" data-grid="multiple"></ul>

<section class="content cf">

	<div class="grid">

		<table class="gridTable" data-source="{{ URL::to('source') }}" data-grid="multiple">
			<thead>
				<tr>
					<th data-sort="country" data-grid="multiple" class="sortable">Country</th>
					<th data-sort="subdivision" data-grid="multiple" class="sortable">Subdivision</th>
					<th data-sort="city" data-grid="multiple" class="sortable">City</th>
					<th data-sort="population" data-grid="multiple" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>

	</div>

	<div class="pagination" data-grid="multiple"></div>

</section>

@include('templates/multiple/results-tmpl')
@include('templates/multiple/pagination-tmpl')
@include('templates/multiple/filters-tmpl')
@include('templates/multiple/no-results-tmpl')

@stop
