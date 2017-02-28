@extends('layouts/default')

{{-- Page --}}
@section('page')

<header class="page__header">

    <div class="welcome">

        <h1>{{ $example->name }}</h1>

        <h2 class="tagline">Showcasing {{ $example->description }}</h2>

        <a class="tutorial-link" href="{{ route('example.tutorial', $example->id) }}">Read the Tutorial <i class="material-icons">library_books</i></a>

    </div>

    <div class="preview">
        <div>
            <pre><code class="html"></code></pre>
        </div>
    </div>

</header>

@yield('example')

@stop
