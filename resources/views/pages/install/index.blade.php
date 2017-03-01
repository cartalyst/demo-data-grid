@extends('layouts.default')

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="row">

        <div>

            <h1>Getting Started</h1>

            <h2 class="tagline">How to install</h2>

        </div>


    </div>

</header>

<div class="layout__body">

    <div class="page row">

        <section class="section section--box lesson">

            <article class="article">
                <p>{!! renderMarkdown('install/install.md') !!}
            </article>

        </section>

    </div>

</div>

@stop
