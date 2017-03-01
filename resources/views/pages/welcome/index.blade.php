@extends('layouts.default')

{{-- Inline Scripts --}}
@section('scripts')
    @include('examples/apricots/init-js')
@stop

{{-- Page --}}
@section('page')

<header class="layout__header">

    <div class="row">

        <div class="small-12 medium-7 small-order-2 medium-order-1 columns">

            <h1>Data Grid 4</h1>

            <h2 class="tagline">Amazing User Experiences Powered by a Fantastically Simple Data Filtration Library.</h2>

            <a class="hollow button call-to-action" href="#getting-started">Get Started</a>

        </div>

        <div class="small-12 medium-5 small-order-1 medium-order-2 columns">

            <div class="mascot">
                <img class="brand brand--welcome" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">
            </div>

        </div>

    </div>

</header>

<div class="layout__body">

    <div class="page row">

        <section class="section section--box example example--apricots">

            @include('examples/apricots/grid')

        </section>

        <section class="section row">

            <div id="getting-started" class="small-12 medium-8 columns">

                {!! renderMarkdown('content/introduction.md') !!}

                <p>not a member? <a href="" class="large primary button">subscribe</a></p>

            </div>

            <div class="small-12 medium-4 columns">

                {!! renderMarkdown('content/requirements.md') !!}

            </div>

        </section>

    </div>

</div>

@stop
