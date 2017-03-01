@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="layout__header">

    <div class="welcome row">

        <div>

            <h1>{{ $example->name }} Tutorial</h1>

            <h2 class="tagline">Breaking down the {{ $example->name }} example</h2>

            <a class="tutorial-link" href="{{ $example->route }}">Back to {{ $example->name }} Example <i class="material-icons">devices</i></a>

        </div>

    </div>

</header>

<div class="layout__body">

    <div class="page row">

        @yield('tutorial')

    </div>

</div>

@stop
