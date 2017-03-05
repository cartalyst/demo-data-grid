@extends('layouts.default')

{{-- Page title --}}
@section('title')
@parent
    Demo Installation
@stop

{{-- Page --}}
@section('page')

<header class="page__header">

    <div class="welcome row">

        <div class="small-12 align-self-middle columns">

            <h1>Demo Installation</h1>

            <h2 class="tagline">An installable demo application built on Laravel</h2>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-top">

        <div class="small-12 columns">

            <div id="tutorial" class="tutorial">

                <div data-sticky-container>
                    <div class="sticky" id="install" data-sticky data-margin-top="0" style="width:100%;" data-top-anchor="tutorial" data-margin-top="0">

                        <nav data-magellan>
                            <ul class="horizontal menu">
                                <li><a href="#purpose">Purpose</a></li>
                                <li><a href="#requirements">Requirements</a></li>
                                <li><a href="#download">Download</a></li>
                                <li><a href="#installation">Install</a></li>

                            </ul>
                        </nav>

                    </div>
                </div>

                <article class="article">
                    {!! renderMarkdown('content/install.md') !!}
                </article>

            </div>

        </div>

    </div>

</div>

@stop
