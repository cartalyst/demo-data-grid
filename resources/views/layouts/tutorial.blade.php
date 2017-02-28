@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="page__header page__header--tutorial">

    <div class="welcome">

        <h1>
            {{ $example->name }} Tutorial
            <small>
                <a class="tutorial-link" href="{{ $example->route }}">View {{ $example->name }} Example</a>
            </small>
        </h1>

        <h2 class="tagline">Breaking down the {{ $example->name }} example</h2>

    </div>

</header>

@yield('tutorial')

@stop
