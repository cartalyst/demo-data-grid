@extends('layouts/default')

{{-- Page Content --}}
@section('page')

<header class="page__header examples">

    <div class="container">

        <div class="mdl-grid center">

            <div class="mdl-cell mdl-cell--12-col">

                <h1>{{ $example->name }} Tutorial</h1>

                <h2 class="tagline">Breaking down the {{ $example->name }} example</h2>

                <nav>
                    <a href="{{ $example->route }}"><i class="material-icons">mouse</i> {{ $example->name }} Example</a>
                </nav>

            </div>

        </div>

    </div>

</header>

@yield('tutorial')

@stop
