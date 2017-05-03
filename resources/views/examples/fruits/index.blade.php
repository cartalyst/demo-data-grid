@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/fruits/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="apples">

    {{-- Example Start --}}

    @include('examples/fruits/apples')

    {{-- Example End --}}

</section>

<hr>

<h2>Compared to Oranges</h2>

<section class="oranges">

    {{-- Example Start --}}

    @include('examples/fruits/oranges')

    {{-- Example End --}}

</section>

@stop
