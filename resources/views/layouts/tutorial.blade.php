@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="page__header">

    <div class="example mascot mascot--example mascot--{{ $example->name }} row">

        <div class="small-12 medium-5 align-self-middle columns">

            <h1>{{ $example->name }} Tutorial</h1>

        </div>

        <div class="call-to-action small-12 medium-7 columns">

            <a class="large hollow button" href="{{ $example->route }}">Back to {{ $example->name }} Example</a>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <div class="column">

            @yield('tutorial')

        </div>

    </div>

</div>

@stop
