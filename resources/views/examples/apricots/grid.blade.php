<div class="data-grid" data-example="apricots" data-grid="apricots">

    <header>

        <h3>Apricot Harvests <span>Production quantities by country, 2010-2013</span></h3>

        {{-- Filters --}}
        <nav data-grid-group="examples" data-grid-reset-group>
            <button data-grid-reset-group="examples">Reset</button>
            <button data-grid-filter="Eygpt" data-grid-query="country:=:egypt">Egypt</button>
            <button data-grid-filter="less-than-10000" data-grid-query="value:<:10000">< 10k</button>
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
@include('examples/apricots/grid/results')
@include('examples/apricots/grid/pagination')
