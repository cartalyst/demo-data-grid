@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="apricots">

    {{-- Example Start --}}

    @include('examples/apricots/grid')

    {{-- Example End --}}

</section>

@stop
