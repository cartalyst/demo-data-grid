@extends('template')

{{-- Page title --}}
@section('title')
Infinite
@stop

{{-- Inline styles --}}
@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/list.css') }}" >
@stop

{{-- Inline scripts --}}
@section('scripts')
<script>
$(function(){

	// Setup DataGrid
	var grid = $.datagrid('infinite', '.infinite', '#pagination', '.applied-filters', {
		loader: '.loading',
		method: 'infinite',
		throttle: 21,
		sort: {
			column: 'city',
			direction: 'asc'
		},
		callback: function(obj) {

			// Leverage the Callback to show total counts or filtered count
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

<h1>Infinite Pagination</h1>

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

	<div class="col-md-12">

		<form data-search data-grid="infinite" class="search">

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

			<div class="loading">
				<div>
					<span><img src="{{ URL::asset('assets/img/loader.gif') }}" /> Loading</span>
				</div>
			</div>

			<button class="search-btn"><i class="fa fa-search"></i></button>

		</form>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<div class="applied-filters" data-grid="infinite"></div>

	</div>

</div>

<div class="row">

	<div class="col-md-12">

		<ul class="infinite grid cf" data-source="{{ URL::to('source') }}" data-grid="infinite"></ul>

	</div>

</div>

<footer id="pagination" class="row" data-grid="infinite"></footer>

@include('templates/infinite/results-tmpl')
@include('templates/infinite/pagination-tmpl')
@include('templates/infinite/filters-tmpl')
@include('templates/infinite/no-results-tmpl')

@stop
