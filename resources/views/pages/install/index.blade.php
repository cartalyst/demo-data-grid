@extends('layouts.default')

{{-- Page --}}
@section('page')

<header class="page__header">

    <div class="row align-middle">

        <div class="column">

            <h1>Installable Demo</h1>

            <h2 class="tagline">An installable application built on Laravel</h2>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <section class="section section--box lesson">

            <article class="article">
                <p>{!! renderMarkdown('content/install.md') !!}
            </article>

        </section>

    </div>

</div>

@stop
