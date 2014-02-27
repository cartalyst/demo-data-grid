@extends('template')

@section('title')
Single Pagination
@stop

@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/single.css') }}" >
@stop

@section('scripts')
<script>
	$(function(){

		//Setup DataGrid
		$.datagrid('single', '.table', '.pagination', '.applied-filters', {
			dividend: 1,
			throttle: 20,
			threshold: 20,
			loader: '.loading',
			paginationType: 'single',
			defaultSort: {
				column: 'city',
				direction: 'asc'
			},
			callback: function(obj){

				console.log(obj);

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
	<li><a href="{{ URL::to('/') }}" class="btn active">Single</a></li>
	<li><a href="{{ URL::to('/multiple-standard') }}" class="btn">Multiple Standard</a></li>
	<li><a href="{{ URL::to('/multiple-advanced') }}" class="btn">Multiple Advanced</a></li>
	<li><a href="{{ URL::to('/infinite') }}" class="btn">Infinite</a></li>
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

<label for="dividend">
	Dividend <br>
	<input type="text" name="dividend" value="1" disabled class="disabled" data-grid="single" data-opt="dividend">
</label>

<label for="threshold">
	Threshold <br>
	<input type="text" name="threshold" value="20" disabled class="disabled" data-grid="single" data-opt="threshold">
</label>

<label for="throttle">
	Throttle <br>
	<input type="text" name="throttle" value="20" disabled class="disabled" data-grid="single" data-opt="throttle">
</label>
@stop

@section('content')

<div class="cf">

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

		<input type="text" name="filter" placeholder="Filter All" class="search-input">

		<div class="loading"> Loading &hellip;</div>

		<button class='search-btn'>Add</button>
	</form>

</div>

<ul class="applied-filters" data-grid="single"></ul>

<section class="content cf">

	<div class="grid">

		<table class="table" data-source="{{ URL::to('source') }}" data-grid="single">
			<thead>
				<tr>
					<th data-sort="country" data-grid="single" class="sortable">Country</th>
					<th data-sort="subdivision" data-grid="single" class="sortable">Subdivision</th>
					<th data-sort="city" data-grid="single" class="sortable">City</th>
					<th data-sort="population" data-grid="single" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>

		<div class="pagination clearfix" data-grid="single"></div>

	</div>



</section>

	@include('templates/single/results-tmpl')
	@include('templates/single/pagination-tmpl')
	@include('templates/single/filters-tmpl')
	@include('templates/single/no-results-tmpl')

@stop
