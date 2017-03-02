<div class="data-grid" data-example="crops" data-grid="crops">

    <header>
        <h3><span data-grid-layout="count"></span> Crop Harvests <small>Crop production 2010-2013</small></h3>
    </header>

    <nav>

        {{-- Layouts --}}
        <div class="layout">

            <button class="tabs-title is-active" data-grid-switch-layout="table:table">
                <i class="material-icons">view_list</i> <span>Table Layout</span>
            </button>

            <button class="tabs-title" data-grid-switch-layout="table:grid">
                <i class="material-icons">view_module</i> <span>Grid Layout</span>
            </button>

        </div>

        {{-- Filters --}}
        <div class="filters">
            <select data-grid-group="filters" data-grid-reset-group>

                <option data-grid-reset-group="filters">
                    Less than 10,000
                </option>


                <option data-grid-filter="less-than-10000"
                    data-grid-query="value:<:10000">
                    Less than 10,000
                </option>

                <option data-grid-filter="greater-than-100000"
                    data-grid-query="value:>:100000">
                    Greater than 100,000
                </option>

                <option data-grid-filter="only-portugal"
                    data-grid-query="country:=:portugal">
                    Equal to Portugal
                </option>

                <option data-grid-filter="melons"
                    data-grid-query="item:melons">
                    Contains Melons
                </option>

                <option data-grid-filter="exclude-agave"
                    data-grid-query="item:!=:Agave fibres nes">
                    Not equal to Agave
                </option>

                <option data-grid-filter="portugal-egypt"
                    data-grid-query="country:portugal, egypt">
                    Only Portugal, Egypt
                </option>

                <option data-grid-filter="portugal-egypt-value-desc"
                    data-grid-query="country:portugal, egypt"
                    data-grid-sort="value:desc">
                    Portugal, Egypt, Sort Value Desc
                </option>

                <option data-grid-filter="portugal-apples"
                    data-grid-query="country:portugal; item:apples">
                    Portugal, Contains Apples
                </option>

            </select>
        </div>

        {{-- Search Form --}}
        <div class="search">

            <form method="post" accept-charset="utf-8" data-grid-search>
                <div>
                    <input type="text" id="search" placeholder="Search...">
                    <label class="" for="search"></label>
                </div>
            </form>

        </div>

    </nav>

    {{-- Loader --}}

    <div class="progress__wrapper">
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
    </div>

    {{-- Applied filters container --}}
    <div data-grid-layout="filters"></div>

    {{-- Applied filters container --}}
    <div data-grid-layout="table"></div>

    {{-- Pagination container --}}
    <footer data-grid-layout="pagination"></footer>

</div>

{{-- Templates --}}
@include('examples/crops/grid/table')
@include('examples/crops/grid/grid')
@include('examples/crops/grid/pagination')
@include('examples/crops/grid/filters')
@include('examples/crops/grid/count')
