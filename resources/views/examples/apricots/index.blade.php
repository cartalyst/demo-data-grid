@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="page__content row align-center">

    <div class="content small-12 columns">

        {{-- Example Start --}}

        @include('examples/apricots/grid')

        {{-- Example End --}}

    </div>

</section>

@stop
