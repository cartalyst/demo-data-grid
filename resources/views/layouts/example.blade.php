@extends('layouts/default')

{{-- Page Content --}}
@section('page')
<header class="page__header">

    <div class="welcome row align-midle">

        <div class="small-12 columns">

            <h1>{{ $example->name }}</h1>

            <h2 class="tagline">Showcasing {{ $example->description }}</h2>

            <a class="tutorial-link" href="{{ route('example.tutorial', $example->id) }}">Tutorial <i class="material-icons">info_outline</i></a>

            <div class="preview"><pre><code class="html"></code></pre></div>

        </div>

    </div>

</header>

@yield('example')

@stop
