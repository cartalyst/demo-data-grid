@extends('layouts/tutorial')

{{-- Tutorial --}}
@section('tutorial')

<section class="section section--box tutorial">

        <ul class="tabs" data-deep-link="true" data-tabs id="tutorial-tabs">

            <li class="tabs-title is-active">
                <a href="#controller" aria-selected="true">
                    1. <span>Controller</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#route" aria-selected="true">
                    2. <span>Route</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#instansiate" aria-selected="true">
                    3. <span>Instansiate</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#grid" aria-selected="true">
                    4. <span>Grid</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#results" aria-selected="true">
                    5. <span>Results</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#pagination" aria-selected="true">
                    6. <span>Pagination</span>
                </a>
            </li>

        </ul>

            <div class="tabs-content" data-tabs-content="tutorial-tabs">

                <div class="tabs-panel is-active" id="controller">

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

                <div class="tabs-panel" id="route">

                    <article class="tutorial__article">
                        <header>
                            <h3>Register the Route</h3>
                            <p>
                                introduction to this particular section. Clear, concise summary of the file / code and its purpose.
                            </p>
                        </header>

                        <h5>apricots.php</h5>
                        <p>{!! renderCode('routes/examples/apricots.php', 'php') !!}</p>
                    </article>

                </div>

                <div class="tabs-panel" id="instantiate">

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

                <div class="tabs-panel" id="grid">

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

                <div class="tabs-panel" id="results">

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

                <div class="tabs-panel" id="pagination">

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

</section>

@stop
