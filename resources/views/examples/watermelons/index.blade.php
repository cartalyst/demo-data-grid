@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/watermelons/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="page__showcase">

    <div class="container">

        {{-- Example Start --}}

        @include('examples/watermelons/grid')

        {{-- Example End --}}

    </div>

</section>

@stop
