<div class="data-grid" data-example="apples" data-grid="apples">

    <header>

        <h3>Apple Harvests <span>Production quantities, 2012-2013</span></h3>

        {{-- Filters --}}
        <nav data-grid-group="examples" data-grid-reset-group>
            <button data-grid-reset-group="examples">Reset</button>
            <button data-grid-filter="2012" data-grid-query="date:=:2012-01-01">2012</button>
            <button data-grid-filter="2013" data-grid-query="date:=:2013-01-01">2013</button>
        </nav>

    </header>

    <div class="grid__wrapper">

        {{-- Loader --}}
        <div class="progress__wrapper">
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
        </div>

        {{-- Results container --}}
        <section data-grid-layout="results"></section>

        {{-- Pagination container --}}
        <footer data-grid-layout="pagination"></footer>

    </div>

</div>

{{-- Templates --}}
@include('examples/fruits/grid/apples-results')
@include('examples/fruits/grid/apples-pagination')
