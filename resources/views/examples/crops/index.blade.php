@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/crops/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="section section--box crops">

    {{-- Example Start --}}

    @include('examples/crops/grid')

    {{-- Example End --}}

</section>

@stop
