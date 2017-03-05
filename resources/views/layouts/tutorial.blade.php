@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="page__header">

    <div class="example mascot mascot--example mascot--{{ $example->name }} row">

        <div class="small-12 align-self-middle columns">

            <h1>{{ $example->name }} Tutorial</h1>

            <h2 class="tagline">Disecting the {{ $example->name }} example</h2>

            <a class="large button call-to-action" href="{{ $example->route }}">Back to {{ $example->name }} Example</a>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <div class="small-12 columns">

            @yield('tutorial')

        </div>

    </div>

</div>

@stop
