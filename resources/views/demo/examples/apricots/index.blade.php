@extends('demo/layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('demo/examples/apricots/init-js')
@stop

{{-- Page Content --}}
@section('example')
<section class="apricots">
    {{-- Example Start --}}
    @include('demo/examples/apricots/grid')
    {{-- Example End --}}
</section>
@stop
