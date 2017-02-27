@extends('layouts.default')

@section('scripts')
<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('apricots', {
        source: '{{ route('example.apricots.source') }}',
        pagination: {
            method: 'infinite',
            threshold: '100',
            throttle: '10'
        },
        loader: {
            element: '.loading'
        }
    });
});
</script>
@stop

@section('page')

<a name="top"></a>

{{-- Welcome --}}
<header class="page__header">

        <div class="welcome row align-midle">

            <div class="small-12 medium-7 small-order-2 medium-order-1 columns">

                <h1>Data Grid 4</h1>

                <h2 class="tagline">Amazing User Experiences Powered by a Fantastically Simple Data Filtration Library.</h2>

            </div>

            <div class="small-12 medium-5 small-order-1 medium-order-2 columns">

                <img class="brand brand--welcome" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

            </div>

        </div>

</header>

{{-- Showcase Grid --}}
<section class="page__content row align-center">

    <div class="content small-12 columns">
        @include('pages/welcome/grid')
    </div>

</section>

<!-- <section class="welcome__introduction">

    <div class="container">

        <article>
            {!! renderMarkdown('pages/welcome/content/introduction.md') !!}
        </article>

        <article>
            {!! renderMarkdown('pages/welcome/content/philosophy.md') !!}
        </article>

    </div>

</section> -->

@stop
