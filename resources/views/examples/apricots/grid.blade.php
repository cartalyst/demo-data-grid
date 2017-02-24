<div class="data-grid data-grid--list" data-example="list" data-grid="apricots">

    <header>

        <h3>Apricot Harvests <span>Production quantities by country, 2010-2013</span></h3>

        {{-- Filters --}}
        <nav data-grid-group="years" data-grid-reset-group>
            <button data-grid-reset-group>All</button>
            <button data-grid-filter="2010" data-grid-query="date:=:2010-01-01">2010</button>
            <button data-grid-filter="2011" data-grid-query="date:=:2011-01-01">2011</button>
            <button data-grid-filter="2012" data-grid-query="date:=:2012-01-01">2012</button>
            <button data-grid-filter="2013" data-grid-query="date:=:2013-01-01">2013</button>
        </nav>

    </header>

    {{-- Results container --}}
    <section data-grid-layout="results"></section>

    {{-- Loader --}}
    <div class="loading"></div>

    {{-- Pagination container --}}
    <footer data-grid-layout="pagination"></footer>

</div>

{{-- Templates --}}
@include('examples/apricots/grid/results')
@include('examples/apricots/grid/pagination')
