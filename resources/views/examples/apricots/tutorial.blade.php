@extends('layouts/tutorial')

{{-- Tutorial Content --}}
@section('tutorial')


<section class="page__content">

    <div class="content">


        <div class="tutorial tutorial--examples">

            <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">

                <div class="mdl-tabs__tab-bar">
                    <a href="#panel-1" class="mdl-tabs__tab is-active">1. <span class="show-on-medium-and-up">Controller</span></a>
                    <a href="#panel-2" class="mdl-tabs__tab">2. <span class="show-on-medium-and-up">Route</span></a>
                    <a href="#panel-3" class="mdl-tabs__tab">3. <span class="show-on-medium-and-up">Instantiate</span></a>
                    <a href="#panel-4" class="mdl-tabs__tab">4. <span class="show-on-medium-and-up">Grid</span></a>
                    <a href="#panel-5" class="mdl-tabs__tab">5. <span class="show-on-medium-and-up">Results</span></a>
                    <a href="#panel-6" class="mdl-tabs__tab">6. <span class="show-on-medium-and-up">Pagination</span></a>
                </div>

                <div class="mdl-tabs__panel is-active" id="panel-1">

                    <article class="tutorial__article">
                        <header>
                            <h3>Create the Controller</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>apricotsController.php</h5>
                        <p>{!! renderCode('app/Http/Controllers/Examples/apricotsController.php', 'php') !!}</p>
                    </article>

                </div>

                <div class="mdl-tabs__panel" id="panel-2">

                    <article class="tutorial__article">
                        <header>
                            <h3>Register the Route</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>apricots.php</h5>
                        <p>{!! renderCode('app/Http/Routes/Examples/apricots.php', 'php') !!}</p>
                    </article>

                </div>

                <div class="mdl-tabs__panel" id="panel-3">

                    <article class="tutorial__article">
                        <header>
                            <h3>Instantiate A Data Grid.</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>init-js.blade.php</h5>
                        <p>{!! renderCode('resources/views/examples/apricots/init-js.blade.php', 'js') !!}</p>
                    </article>

                </div>

                <div class="mdl-tabs__panel" id="panel-4">

                    <article class="tutorial__article">
                        <header>
                            <h3>Create A Layout</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>grid.blade.php</h5>
                        <p>{!! renderCode('resources/views/examples/apricots/grid.blade.php', 'html') !!}</p>
                    </article>

                </div>

                <div class="mdl-tabs__panel" id="panel-5">

                    <article class="tutorial__article">
                        <header>
                            <h3>Build A Results Template</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>grid/results.blade.php</h5>
                        <p>{!! renderCode('resources/views/examples/apricots/grid/results.blade.php', 'js') !!}</p>
                    </article>

                </div>

                <div class="mdl-tabs__panel" id="panel-6">

                    <article class="tutorial__article">
                        <header>
                            <h3>Build A Pagination Template</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>grid/pagination.blade.php</h5>
                        <p>{!! renderCode('resources/views/examples/apricots/grid/pagination.blade.php', 'js') !!}</p>
                    </article>

                </div>

            </div>

        </div>

    </div>

</section>

@stop
