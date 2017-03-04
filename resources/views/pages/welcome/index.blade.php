@extends('layouts.default')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page --}}
@section('page')

<header class="page__header">

    <div class="welcome mascot mascot--welcome mascot--brand row align-stretch">

        <div class="small-12 medium-5 align-self-bottom columns">

            <h1>Data Grid 4</h1>

            <h2 class="tagline">Data Filtration Over Pagination</h2>

        </div>

        <div class="call-to-action call-to-action--welcome small-12 medium-7 columns">

            <a class="hollow large button" href="{{ route('examples') }}">Examples &amp; Tutorials</a

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <div class="small-12 medium-5">

            <article class="article article--welcome">
                {!! renderMarkdown('content/introduction.md') !!}

                <a href="https://cartalyst.com/pricing" class="primary button">Subscribe</a>

            </article>

        </div>

        <div class="small-12 medium-7">

            <section class="section section--box apricots">

                @include('examples/apricots/grid')

            </section>

        </div>

    </div>

</div>

@stop
