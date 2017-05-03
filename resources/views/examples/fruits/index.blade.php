@extends('layouts/example')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/fruits/init-js')
@stop

{{-- Page Content --}}
@section('example')

<div class="row fruits">

    <div class="column">

        <section class="apples">

            {{-- Example Start --}}

            @include('examples/fruits/apples')

            {{-- Example End --}}

        </section>

    </div>

    <div class="column">

        <section class="oranges">

            {{-- Example Start --}}

            @include('examples/fruits/oranges')

            {{-- Example End --}}

        </section>

    </div>

</div>

@stop
