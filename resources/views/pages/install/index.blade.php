@extends('layouts.default')

{{-- Page --}}
@section('page')


<header class="page__header">

    <div class="welcome row">

        <div class="small-12 align-self-middle columns">

            <h1>Installable Demo</h1>

            <h2 class="tagline">An installable application built on Laravel</h2>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <section class="tutorial">

            <article class="article">
                <p>{!! renderMarkdown('content/install.md') !!}
            </article>

        </section>

    </div>

</div>

@stop
