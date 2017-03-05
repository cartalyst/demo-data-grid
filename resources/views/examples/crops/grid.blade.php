<div class="data-grid" data-example="crops" data-grid="crops">

    <header>

        <h3><div data-grid-layout="count"></div> Crop Harvests <span>Crop production 2010-2013</span></h3>

        {{-- Search Form --}}
        <div class="search">

            <form data-grid-search>
                <input type="text" id="search" placeholder="Search...">
            </form>

        </div>

    </header>

    <nav>

        {{-- Filters --}}
        <ul class="filters dropdown menu" data-dropdown-menu data-grid-group="filters">
            <li>
                <a>Production</a>
                <ul class="menu">
                    <li>
                        <a
                            data-grid-filter="less-than-10000"
                            data-grid-query="value:<:10000">
                            Less than 10,000
                        </a>
                    </li>
                    <li>
                        <a  data-grid-filter="greater-than-100000"
                            data-grid-query="value:>:100000">
                            Greater than 100,000
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a>Countries</a>
                <ul class="menu">
                    <li>
                        <a  data-grid-filter="only-portugal"
                            data-grid-query="country:=:portugal">
                            Equal to Portugal
                        </a>
                    </li>
                    <li>
                        <a  data-grid-filter="portugal-egypt"
                            data-grid-query="country:portugal, egypt">
                            Only Portugal, Egypt
                        </a>
                    </li>
                    <li>
                        <a  data-grid-filter="portugal-egypt-value-desc"
                            data-grid-query="country:portugal, egypt"
                            data-grid-sort="value:desc">
                            Portugal, Egypt, Sort Value Desc
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a>Types</a>
                <ul class="menu">
                    <li>
                        <a  data-grid-filter="melons"
                            data-grid-query="item:melons">
                            Contains Melons
                        </a>
                    </li>
                    <li>
                        <a  data-grid-filter="exclude-agave"
                            data-grid-query="item:!=:Agave fibres nes">
                            Not equal to Agave
                        </a>
                    </li>
                    <li>
                        <a  data-grid-filter="portugal-apples"
                            data-grid-query="country:portugal; item:apples">
                            Portugal, Contains Apples
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        {{-- Layouts --}}
        <div class="layout">

            <button class="button is-active" data-grid-switch-layout="table:table" class="active">
                <i class="material-icons">view_list</i> <span>Table</span>
            </button>

            <button class="button" data-grid-switch-layout="table:blocks">
                <i class="material-icons">view_module</i> <span>Grid</span>
            </button>

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
@include('examples/crops/grid/blocks')
@include('examples/crops/grid/pagination')
@include('examples/crops/grid/filters')
@include('examples/crops/grid/count')
