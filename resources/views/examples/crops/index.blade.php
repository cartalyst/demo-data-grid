@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/crops/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="page__showcase">

    <div class="container">

        {{-- Example Start --}}

        @include('examples/crops/grid')

        {{-- Example End --}}

    </div>

</section>

@stop
