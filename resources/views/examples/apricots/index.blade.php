@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page Content --}}
@section('example')

<section class="page__content">

    <div class="content">

        {{-- Example Start --}}

        @include('examples/apricots/grid')

        {{-- Example End --}}

    </div>

</section>

@stop
