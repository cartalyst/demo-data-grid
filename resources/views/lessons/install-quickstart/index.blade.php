@extends('layouts.default')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="row">

        <div>

            <h1>Getting Started</h1>

            <h2 class="tagline">How to install the blarg</h2>

        </div>


    </div>

</header>

<div class="layout__body">

    <div class="page row">

        <section class="section section--box lesson">

            <article class="article">
                <p>{!! renderMarkdown('lessons/install-quickstart/install-quicksart.md') !!}
            </article>

        </section>

    </div>

</div>

@stop
