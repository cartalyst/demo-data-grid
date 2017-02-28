@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="page__header page__header--tutorial">

    <div class="welcome">

        <h1>{{ $example->name }} Tutorial</h1>

        <h2 class="tagline">Breaking down the {{ $example->name }} example</h2>

        <a class="tutorial-link" href="{{ $example->route }}">Back to {{ $example->name }} Example <i class="material-icons">devices</i></a>

    </div>

</header>

@yield('tutorial')

@stop
