@extends('demo/layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('demo/examples/fruits/init-js')
@stop

{{-- Page Content --}}
@section('example')
<div class="row fruits">
    <div class="column">
        <section class="apples">
            {{-- Example Start --}}
            @include('demo/examples/fruits/apples')
            {{-- Example End --}}
        </section>
    </div>

    <div class="column">
        <section class="oranges">
            {{-- Example Start --}}
            @include('demo/examples/fruits/oranges')
            {{-- Example End --}}
        </section>
    </div>
</div>
@stop
