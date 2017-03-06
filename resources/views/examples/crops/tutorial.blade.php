@extends('layouts/tutorial')

{{-- Tutorial Content --}}
@section('tutorial')

<section class="section section--box tutorial">

        <ul class="expanded tabs" data-deep-link="true" data-tabs id="tutorial-tabs">

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
                <a href="#instantiate" aria-selected="true">
                    3. <span>Instantiate</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#grid" aria-selected="true">
                    4. <span>Grid</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#layouts" aria-selected="true">
                    5. <span>Layouts</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#results" aria-selected="true">
                    6. <span>Results</span>
                </a>
            </li>

            <li class="tabs-title">
                <a href="#pagination" aria-selected="true">
                    7. <span>Pagination</span>
                </a>
            </li>

        </ul>

        <div class="tabs-content" data-tabs-content="tutorial-tabs">

            <div class="tabs-panel is-active" id="controller">

                <article class="article article--tutorial">
                    <header>
                        <h3>Create the Controller</h3>
                        <p>
                            The controller defines the main grid view and the data grid source that is reponsible for retrieving the data. This is the route the data grid js will consume in order to return the data.
                        </p>
                    </header>

                    <h5>CropsController.php</h5>
                    <p>{!! renderCode('app/Http/Controllers/Examples/CropsController.php', 'php') !!}</p>
                </article>

            </div>

            <div class="tabs-panel" id="route">

                <article class="article article--tutorial">
                    <header>
                        <h3>Register the Route</h3>
                        <p>
                            Define the data grid route and the data grid source route.
                        </p>
                    </header>

                    <h5>crops.php</h5>
                    <p>{!! renderCode('routes/examples/crops.php', 'php') !!}</p>
                </article>

            </div>

            <div class="tabs-panel" id="instantiate">

                <article class="article article--tutorial">
                    <header>
                        <h3>Instantiate A Data Grid.</h3>
                        <p>
                            Instantiating the data grid by calling the js initialization code.
                        </p>
                    </header>

                    <h5>init-js.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/init-js.blade.php', 'js') !!}</p>
                </article>

            </div>

            <div class="tabs-panel" id="grid">

                <article class="article article--tutorial">
                    <header>
                        <h3>Create A Layout</h3>
                        <p>
                            Defining the grid layout including the main markup elements that construct our grid.
                        </p>
                    </header>

                    <h5>grid.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid.blade.php', 'html') !!}</p>
                </article>

            </div>

            <div class="tabs-panel" id="layouts">

                <article class="article article--tutorial">

                    {{-- Table Layout --}}
                    <header>
                        <h3>Layouts</h3>
                        <p>Data Grid allows for the creation of as many templates per data grid as you require. Each layout faciliates any user experiance design which is dependent on data grid results. For this example, we've chosen three layouts.</p>

                        <h3>Table Layout</h3>
                        <p>A standard html table layout for tabular style data.</p>

                    </header>

                    <h5>table.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid/table.blade.php', 'js') !!}</p>

                    {{-- Grid Layout --}}
                    <header>
                        <h3>Grid Layout</h3>
                        <p>
                            A block based grid layout using cards.
                        </p>
                    </header>

                    <h5>grid.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid/blocks.blade.php', 'js') !!}</p>

                    {{-- Count Layout --}}
                    <header>
                        <h3>Count Layout</h3>
                        <p>
                            A simple layout which returns the total filtered count for use within the grids header.
                        </p>
                    </header>

                    <h5>count.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid/count.blade.php', 'js') !!}</p>

                </article>

            </div>

            <div class="tabs-panel" id="results">

                <article class="article article--tutorial">
                    <header>
                        <h3>Build A Results Template</h3>
                        <p>
                            The results template is responsible for rendering the retrieved data.
                        </p>
                    </header>

                    <h5>grid/results.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid/results.blade.php', 'js') !!}</p>
                </article>

            </div>

            <div class="tabs-panel" id="pagination">

                <article class="article article--tutorial">
                    <header>
                        <h3>Build A Pagination Template</h3>
                        <p>
                            Pagination template is responsible for the pagination elements to navigate the grid.
                        </p>
                    </header>

                    <h5>grid/pagination.blade.php</h5>
                    <p>{!! renderCode('resources/views/examples/crops/grid/pagination.blade.php', 'js') !!}</p>
                </article>

            </div>

        </div>

        </section>

@stop
