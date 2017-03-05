@extends('layouts/default')

{{-- Page --}}
@section('page')

<header class="page__header">

    <div class="example mascot mascot--example mascot--{{ $example->name }} row">

        <div class="small-12 medium-5 align-self-middle columns">

            <h1>{{ $example->name }}</h1>

            <h2 class="tagline">Showcasing {{ $example->description }}</h2>

            <a class="large button call-to-action" href="{{ route('example.tutorial', $example->id) }}">Read the Tutorial</a>

        </div>

    </div>

    <div class="preview row align-middle">
        <div class="column">
            <div>
                <pre><code class="html">Hover Around, See the code!</code></pre>
            </div>
        </div>
    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <div class="column">

            @yield('example')

        </div>

    </div>

</div>

@stop
