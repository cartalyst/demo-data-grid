@extends('layouts.default')

@section('page')

<a name="top"></a>

<header class="page__header">

    <div class="container">

        <div class="mdl-grid center">

            <div class="mdl-cell mdl-cell--7-col">

                <h1>Cartalyst Quickstarts</h1>

                <h2 class="tagline">Installable Applications, Accelerated Learning</h2>

            </div>

            <div class="mascot mdl-cell mdl-cell--5-col hide-on-small-only">

                <img src="{{ URL::to('images/developer_mode_white.svg') }}" alt="Application Quickstart">

            </div>

        </div>

    </div>

</header>

<section>

    <article class="container tutorial">

        {{-- Tutorial Intro --}}
        <header>
            {!! renderMarkdown('pages/developers/content/introduction.md') !!}
        </header>

        {{-- Mardown Section --}}

        <section>
            {!! renderMarkdown('pages/developers/content/installation.md') !!}
        </section>

        <section>
            {!! renderMarkdown('pages/developers/content/structure.md') !!}
        </section>

        <!-- <section>
            <h5>renderCode()</h5>
            <p>{!! renderCode('examples/basic/example.blade.php', 'html') !!}</p>
        </section> -->

    </article>

</section>

@stop

