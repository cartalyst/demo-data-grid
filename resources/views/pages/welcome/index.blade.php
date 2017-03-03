@extends('layouts.default')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="row">

        <div class="small-12 medium-5 small-order-2 medium-order-1 columns">

            <h1>Data Grid 4</h1>

            <h2 class="tagline">Data Filtration Over Pagination</h2>

            <a class="hollow large button call-to-action" href="{{ route('examples') }}">Examples &amp; Tutorials</a>

        </div>

        <div class="small-12 medium-7 small-order-1 medium-order-2 columns">

            <div class="mascot">
                <img src="{{ URL::to('images/apricot.svg') }}" alt="">
            </div>

        </div>

    </div>

</header>

<div class="layout__body">

    <div class="showcase row">

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


        <section class="section row">

            <div class="small-12 medium-8 columns">

            </div>

            <div class="small-12 medium-4 columns">

            </div>

        </section>

    </div>

</div>

@stop
