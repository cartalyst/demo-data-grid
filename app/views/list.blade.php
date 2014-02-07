@extends('template')

@section('title')
Data Grid
@stop

@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/list.css') }}" >
@stop

@section('scripts')
<script>

	$(function(){

		//Setup DataGrid
		$.datagrid('list', '.grid', '.pagination', '.applied', {
			loader: '.loading',
			dividend: 40,
			threshold: 12,
			throttle: 500,
			paginationType: 'infinite',
			callback: function(obj){

				//Leverage the Callback to show total counts or filtered count
				$('#filtered').val(obj.filteredCount);
				$('#total').val(obj.totalCount);

			}
		});

		//Text Binding
		$('.hidden-select').change(function(){
			$('.options').find('li').text($('.hidden-select option:selected').text());
		});

	});

</script>
@stop

@section('menu')
<ul class="menu">
	<li><a href="{{ URL::to('') }}">Table</a></li>
	<li><a href="{{ URL::to('list') }}" class="active">List</a></li>
</ul>
@stop

@section('settings')
<label for="total">
	Total <br>
	<input type="text" name="total" value="" disabled class="disabled" id="total">
</label>

<label for="filtered">
	Filtered <br>
	<input type="text" name="filtered" value="" disabled class="disabled" id="filtered">
</label>

<label for="threshold">
	Threshold <br>
	<input type="text" name="threshold" value="12" data-grid="list" data-opt="threshold">
</label>

<label for="dividend">
	Dividend <br>
	<input type="text" name="dividend" value="40" data-grid="list" data-opt="dividend">
</label>

<label for="throttle">
	Throttle <br>
	<input type="text" name="throttle" value="500" data-grid="list" data-opt="throttle">
</label>
@stop


@section('content')

<div class="cf">

	<form data-search data-grid="list" class="search">

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

		<button class='search-btn'>Add</button>
	</form>

</div>

<section class="content cf">

	<div class="col-left">

		<div class="applied cf" data-grid="list"></div>

		<div class="module">
			<h3>Filter By</h3>
			<ul>
				<li data-filter="country:ca" data-label="ca:Canada" data-grid="list">Canada</li>
				<li data-filter="country:us" data-label="us:USA" data-grid="list">United States</li>
				<li data-filter="subdivision:alberta" data-label="alberta:Alberta" data-grid="list">Alberta</li>
				<li data-filter="subdivision:california" data-label="california:California" data-grid="list">California</li>
			</ul>
		</div>

		<div class="module">
			<h3>Sort By</h3>
			<ul>
				<li data-sort="city" data-grid="list">Sort By City</li>
				<li data-sort="subdivision" data-grid="list">Sory By Subdivision</li>
				<li data-sort="population:desc" data-grid="list">Sort By Population</li>
			</ul>
		</div>

	</div>

	<div class="col-right">

		<div class="loading">
			<div>
				<span><img src="{{ URL::asset('assets/img/loader.gif') }}" /> Loading</span>
			</div>
		</div>

		<ul class="grid cf" data-source="{{ URL::to('source') }}" data-grid="list"></ul>

		<div class="pagination" data-grid="list"></div>

	</div>

</section>

@include('templates/list/list-results-tmpl')
@include('templates/list/list-pagination-tmpl')
@include('templates/list/list-filters-tmpl')
@include('templates/list/list-no-results-tmpl')

@stop
