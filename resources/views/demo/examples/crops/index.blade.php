@extends('demo/layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('demo/examples/crops/init-js')
@stop

{{-- Page Content --}}
@section('example')
<section class="crops">
    {{-- Example Start --}}
    @include('demo/examples/crops/grid')
    {{-- Example End --}}
</section>
@stop
