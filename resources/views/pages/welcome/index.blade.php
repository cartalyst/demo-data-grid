@extends('layouts.default')

@section('scripts')
<script>
    // $(function() {
    //     var dg = new DataGridManager();
    //
    //     // Setup DataGrid
    //     var grid = dg.create('welcome', {
    //         source: '{{ route('source.database') }}',
    //         pagination: {
    //             throttle: 20
    //         },
    //     });
    // });
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

@stop
