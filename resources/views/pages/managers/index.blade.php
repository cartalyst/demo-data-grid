@extends('layouts.default')

@section('scripts')
<script>
$(function() {
    var dg = new DataGridManager();

    // Setup DataGrid
    var grid = dg.create('basic', {
        source: '{{ route('source.database') }}',
    });
});
</script>
@stop

@section('page')

<a name="top"></a>

<div class="section section--welcome">

	<div class="container">

		<div class="mdl-grid center">

			<div class="mdl-cell mdl-cell--6-col">

				<img class="brand brand--welcome-mobile hide-on-med-and-up" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

				<h1>Data Grid 4</h1>

				<h2 class="tagline flow-text">A Fantastically Simple Data Filtration Library for PHP</h2>

			</div>

			<div class="mdl-cell mdl-cell--6-col hide-on-small-only">

				<img class="brand brand--welcome" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

			</div>

		</div>

	</div>

</div>

@stop
