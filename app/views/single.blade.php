@extends('template')

@section('title')
Single Pagination
@stop

@section('styles')
<link rel="stylesheet" href="{{ URL::asset('assets/css/table.css') }}" >
@stop

@section('scripts')
<script>
	$(function(){

		//Setup DataGrid
		$.datagrid('main', '.table', '.pagination', '.applied-filters', {
			dividend: 10,
			threshold: 20,
			throttle: 500,
			loader: '.loading',
			paginationType: 'multiple',
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
	<li><a href="{{ URL::to('') }}" class="btn active">Single</a></li>
	<li><a href="{{ URL::to('') }}" class="btn">Multiple Standard</a></li>
	<li><a href="{{ URL::to('') }}" class="btn">Multiple Advanced</a></li>
	<li><a href="{{ URL::to('list') }}" class="btn">Infinite</a></li>
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
	<input type="text" name="threshold" value="20" disabled class="disabled" data-grid="main" data-opt="threshold">
</label>

<label for="dividend">
	Dividend <br>
	<input type="text" name="dividend" value="10" disabled class="disabled" data-grid="main" data-opt="dividend">
</label>

<label for="throttle">
	Throttle <br>
	<input type="text" name="throttle" value="500" disabled class="disabled" data-grid="main" data-opt="throttle">
</label>
@stop

@section('content')

<div class="cf">

	<form data-search data-grid="main" class="search">

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

<ul class="applied-filters" data-grid="main"></ul>

<section class="content cf">

	<div class="grid">

		<table class="table" data-source="{{ URL::to('source') }}" data-grid="main">
			<thead>
				<tr>
					<th data-sort="country" data-grid="main" class="sortable">Country</th>
					<th data-sort="subdivision" data-grid="main" class="sortable">Subdivision</th>
					<th data-sort="city" data-grid="main" class="sortable">City</th>
					<th data-sort="population" data-grid="main" class="sortable">Population</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>

	</div>

	<div class="pagination" data-grid="main"></div>

</section>

	@include('templates/main/main-results-tmpl')
	@include('templates/main/main-pagination-tmpl')
	@include('templates/main/main-filters-tmpl')
	@include('templates/main/main-no-results-tmpl')

@stop
