@extends('layouts.default')

@section('content')

<div class="page-header">
	<h1 class="cover-heading">Data-Grid</h1>
	<p class="lead">A framework agnostic data grid package that shifts focus from pagination to data filtration. Controlled by intuitive data-attributes & underscore templates your presentation, any way you choose.</p>
	<p></p>
	<p class="lead">

		<a href="https://github.com/cartalyst/demo-data-grid" class="btn btn-lg btn-default"><i class="fa fa-github"></i> Github</a>
		<a href="https://cartalyst.com/manual/data-grid" class="btn btn-lg btn-default"><i class="fa fa-file-text-o"></i> Manual</a>
	</p>
</div>

<div class="row">
	<div class="col-lg-6">
		<h2>getting started</h2>
		<p>describe why data-grid is awesome in that it's both a data handler on the backend which comes with one bad ass jquery library.</p>
	</div>
	<div class="col-lg-6">
		<pre><code>
		$.datagrid('main', '.table', '.pagination', '.filters');
		</code></pre>
	</div>
</div>
<div class="row">
	<div class="col-lg-6">
		<h3>Requirements</h3>
		<ul>
			<li>requirement 1</li>
			<li>requirement 2</li>
			<li>requirement 3</li>
		</ul>
	</div>
	<div class="col-lg-6">
		<pre><code>
		composer json & script includes
		</code></pre>

	</div>
</div>

<div class="row">
	<div class="col-lg-6">
		<h3>Step 1</h3>
		<p>shortly describe how to pass a data-object to data-grid</p>

	</div>
	<div class="col-lg-6">
		<pre><code>
		Route::get('source', function()
		{
		    $data = new City;

		    return DataGrid::make($post, [
		        'country',
		        'city',
		    ]);
		});
		</code></pre>

	</div>
</div>

<div class="row">
	<div class="col-lg-6">
		<h3>Step 2</h3>
		<p>describe the view, scripts, options.</p>

		<dl class="dl-horizontal">
			<dt>option</dt>
			<dd>option description</dd>
			<dt>option</dt>
			<dd>option description</dd>
			<dt>option</dt>
			<dd>option description</dd>
			<dt>option</dt>
			<dd>option description</dd>
		</dl>

	</div>
	<div class="col-lg-6">
		<pre><code>
			code yo
		</code></pre>

	</div>
</div>

<div class="row">
	<div class="col-lg-6">
		<h3>Step 3</h3>
		<p>describe templates, data-attributes</p>

		<dl class="dl-horizontal">
			<dt>data-grid</dt>
			<dd>required to identify ownership to the data grid object</dd>
			<dt>data-filter</dt>
			<dd>apply filters</dd>
			<dt>data-label</dt>
			<dd>fix labels that appear on the filters template</dd>
			<dt>data-sort</dt>
			<dd>apply sorts</dd>
			<dt>data-reset</dt>
			<dd>resets the grid</dd>
			<dt>data-template</dt>
			<dd>required on the underscore templates to identify its role</dd>
		</dl>

	</div>
	<div class="col-lg-6">
		<pre><code>

		<div data-grid="main" class="filters"></div>

		<table data-grid="main" class="table" data-source="{{ URL::to('source') }}">

		    <thead>
		        <tr>
		            <th data-sort="country">Country</th>
		            <th data-sort="city">City</th>
		        </tr>
		    </thead>
		    <tbody></tbody>

		</table>

		<ul class="pagination"></ul>

		</code></pre>
	</div>
</div>

@stop
