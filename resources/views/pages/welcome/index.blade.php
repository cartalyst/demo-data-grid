@extends('layouts.default')

@section('scripts')
<script>
    $(function() {
        var dg = new DataGridManager();

        // Setup DataGrid
        var grid = dg.create('welcome', {
            source: '{{ route('source.database') }}',
            pagination: {
                throttle: 20
            },
        });
    });
</script>
@stop

@section('page')

<a name="top"></a>

{{-- Welcome --}}
<header class="page__header welcome">

    <div class="container">

        <div class="mdl-grid center">

            <div class="mdl-cell mdl-cell--7-col">

                <img class="brand brand--welcome-mobile hide-on-med-and-up" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

                <h1>Data Grid 4</h1>

                <h2 class="tagline">Amazing User Experiences Powered by a Fantastically Simple Data Filtration Library For PHP</h2>

            </div>

            <div class="mascot mdl-cell mdl-cell--5-col hide-on-small-only">

                <img class="brand brand--welcome" src="{{ URL::to('images/brand-cartalyst.svg') }}" alt="">

            </div>

        </div>

    </div>

</header>

{{-- Showcase Grid --}}
<section class="page__showcase">

    <div class="container">

        <div class="data-grid mdl-card mdl-shadow--2dp">

            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Aquaculture</h2>
            </div>

            <div class="mdl-card__supporting-text">
                Work with data like you've never worked with data before.
            </div>

            <table class="data-grid-table mdl-data-table mdl-js-data-table mdl-data-table--selectable" data-grid-layout="results" data-grid="welcome">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Plants</th>
                    <th>Shellfish</th>
                    <th>Fish</th>
                    <th>All</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Get Started
                </a>
            </div>
            <div class="mdl-card__menu">
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    Table
                </button>
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    Grid
                </button>
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    Rows
                </button>
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    Cards
                </button>
            </div>
        </div>

        {{-- Pagination --}}
        <footer id="pagination" data-grid-layout="pagination" data-grid="welcome"></footer>

    </div>

</section>

<section class="welcome__introduction">

    <div class="container">

        <article>
            {!! renderMarkdown('pages/welcome/content/introduction.md') !!}
        </article>

        <article>
            {!! renderMarkdown('pages/welcome/content/philosophy.md') !!}
        </article>

    </div>

</section>

{{-- Grid Layouts --}}
@include('pages/welcome/grid/results')
@include('pages/welcome/grid/filters')
@include('pages/welcome/grid/pagination')

@stop

