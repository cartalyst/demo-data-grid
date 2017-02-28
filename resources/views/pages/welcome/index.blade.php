@extends('layouts.default')

@section('page')

{{-- Welcome --}}
<header class="page__header page__header--welcome">

        <div class="welcome">

            <div class="row">

                <div class="small-12 medium-7 small-order-2 medium-order-1 columns">

                    <h1>Data Grid 4</h1>

                    <h2 class="tagline">Amazing User Experiences Powered by a Fantastically Simple Data Filtration Library.</h2>

                </div>

                <div class="small-12 medium-5 small-order-1 medium-order-2 columns">

                    <img class="brand brand--welcome" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

                </div>

            </div>

        </div>

</header>

<section class="layout">

    <ul class="tabs" data-deep-link="true" data-tabs id="lesson-tabs">

        <li class="tabs-title is-active">
            <a href="#lesson-one" aria-selected="true">
                1. <span>Getting Started</span>
            </a>
        </li>

        <li class="tabs-title">
            <a href="#lesson-two" aria-selected="true">
                2. <span>Overview</span>
            </a>
        </li>

        <li class="tabs-title">
            <a href="#lesson-three" aria-selected="true">
                3. <span>First Data Grid</span>
            </a>
        </li>

    </ul>

    <div class="lesson">

        <div class="tabs-content" data-tabs-content="lesson-tabs">

            <div class="tabs-panel is-active" id="lesson-one">

                @include('lessons/one/index')

            </div>

            <div class="tabs-panel" id="lesson-two">

                @include('lessons/two/index')

            </div>

            <div class="tabs-panel" id="lesson-three">

                @include('lessons/three/index')

            </div>

        </div>

    </div>

</section>

@stop
