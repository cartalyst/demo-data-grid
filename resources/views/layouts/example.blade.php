@extends('layouts/default')

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="welcome row">

        <div>

            <h1>{{ $example->name }}</h1>

            <h2 class="tagline">Showcasing {{ $example->description }}</h2>

            <a class="large hollow button call-to-action" href="{{ route('example.tutorial', $example->id) }}">Read the Tutorial</a>

        </div>

    </div>

    <div class="preview row">
        <div>
            <pre><code class="html"></code></pre>
        </div>
    </div>

</header>

<div class="layout__body">

    <div class="showcase row">

        @yield('example')

    </div>

</div>

@stop
