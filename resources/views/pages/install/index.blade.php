@extends('layouts.default')

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="row">

        <div>

            <h1>Installable Demo</h1>

            <h2 class="tagline">An installable application built on Laravel</h2>

        </div>


    </div>

</header>

<div class="layout__body">

    <div class="page row">

        <section class="section section--box lesson">

            <article class="article">
                <p>{!! renderMarkdown('content/install.md') !!}
            </article>

        </section>

    </div>

</div>

@stop
