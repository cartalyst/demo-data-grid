@extends('demo/layouts/tutorial')

{{-- Tutorial --}}
@section('tutorial')
<section class="tutorial">
    <ul class="tabs" data-deep-link="true" data-tabs id="tutorial-tabs">
        <li class="tabs-title is-active">
            <a href="#controller" aria-selected="true">
                1. <span>Controller</span>
            </a>
        </li>

        <li class="tabs-title">
            <a href="#routes" aria-selected="true">
                2. <span>Routes</span>
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
            <article class="article article--tutorial">
                <header>
                    <h3>Create the Controller</h3>
                    <p>
                        The controller defines the main grid view and the data grid source that is reponsible for retrieving the data. This is the route the data grid js will consume in order to return the data.
                    </p>
                </header>

                <h5>ApricotsController.php</h5>
                <p>{!! renderCode('app/Http/Controllers/Demo/Examples/ApricotsController.php', 'php') !!}</p>
            </article>
        </div>

        <div class="tabs-panel" id="routes">
            <article class="article article--tutorial">
                <header>
                    <h3>Register the Routes</h3>
                    <p>
                        Define the data grid route and the data grid source route.
                    </p>
                </header>

                <h5>apricots.php</h5>
                <p>{!! renderCode('routes/examples/apricots.php', 'php') !!}</p>
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
                <p>{!! renderCode('resources/views/demo/examples/apricots/init-js.blade.php', 'js') !!}</p>
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
                <p>{!! renderCode('resources/views/demo/examples/apricots/grid.blade.php', 'html') !!}</p>
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
                <p>{!! renderCode('resources/views/demo/examples/apricots/grid/results.blade.php', 'js') !!}</p>
            </article>
        </div>

        <div class="tabs-panel" id="pagination">
            <article class="article article--tutorial">
                <header>
                    <h3>Build A Pagination Template</h3>
                    <p>
                        The pagination template is responsible for the pagination elements to navigate the grid.
                    </p>
                </header>

                <h5>grid/pagination.blade.php</h5>
                <p>{!! renderCode('resources/views/demo/examples/apricots/grid/pagination.blade.php', 'js') !!}</p>
            </article>
        </div>
    </div>
</section>
@stop
