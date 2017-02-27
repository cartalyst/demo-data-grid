@extends('layouts/default')

{{-- Page Content --}}
@section('page')
<header class="page__header">

    <div class="welcome">

        <h1>
            {{ $example->name }}
            <small>
                <a class="tutorial-link" href="{{ route('example.tutorial', $example->id) }}">Read Tutorial</a>
            </small>
        </h1>

        <h2 class="tagline">Showcasing {{ $example->description }}</h2>

    </div>

    <div class="preview">
        <div>
            <pre><code class="html"></code></pre>
        </div>
    </div>

</header>

@yield('example')

@stop
