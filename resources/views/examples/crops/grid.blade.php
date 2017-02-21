<div class="data-grid data-grid--table" data-example="table" data-grid="crops">

    {{-- Loader --}}
    <div class="loading"></div>

    <header>

        <h3>Crop Harvests <span>Crop production 2010-2013</span></h3>

        <nav>

            {{-- Search Form --}}
            <div class="search">

                <form method="post" accept-charset="utf-8" data-grid-search>
                    <div>
                        <input type="text" id="search" placeholder="Search...">
                        <label class="mdl-textfield__label" for="search"></label>
                    </div>
                </form>

            </div>

            {{-- Filters --}}
            <div class="filters">

                <button id="filters">
                    <i class="material-icons">filter_list</i>
                </button>

                <ul for="filters" data-grid-group data-grid-reset-group>
                    <li data-grid-filter="less-than-10000"
                        data-grid-query="value:<:10000">
                        Less than 10,000
                    </li>

                    <li data-grid-filter="greater-than-100000"
                        data-grid-query="value:>:100000">
                        Greater than 100,000
                    </li>

                    <li data-grid-filter="only-portugal"
                        data-grid-query="country:=:portugal">
                        Equal to Portugal
                    </li>

                    <li data-grid-filter="melons"
                        data-grid-query="item:melons">
                        Contains Melons
                    </li>

                    <li data-grid-filter="exclude-agave"
                        data-grid-query="item:!=:Agave fibres nes">
                        Not equal to Agave
                    </li>

                    <li data-grid-filter="portugal-egypt"
                        data-grid-query="country:portugal, egypt">
                        Only Portugal, Egypt
                    </li>

                    <li data-grid-filter="portugal-egypt-value-desc"
                        data-grid-query="country:portugal, egypt"
                        data-grid-sort="value:desc">
                        Portugal, Egypt, Sort Value Desc
                    </li>

                    <li data-grid-filter="portugal-apples"
                        data-grid-query="country:portugal; item:apples">
                        Portugal, Contains Apples
                    </li>
                </ul>

            </div>

            {{-- Layouts --}}
            <div class="layouts">

                <button data-grid-switch-layout="table:table">
                    <i class="material-icons">view_list</i>
                </button>

                <button data-grid-switch-layout="table:grid">
                    <i class="material-icons">view_module</i>
                </button>

            </div>

        </nav>

    </header>

    {{-- Applied filters container --}}
    <div data-grid-layout="filters"></div>

    <table>

        {{-- Column sorts --}}
        <thead>
            <tr>
                <th data-grid-sort="country">Country</th>
                <th data-grid-sort="date">Year</th>
                <th data-grid-sort="item">item</th>
                <th data-grid-sort="value">Production <span>(Tonnes)</span></th>
            </tr>
        </thead>

        {{-- Results container --}}
        <tbody data-grid-layout="table"></tbody>

    </table>

    {{-- Pagination container --}}
    <footer data-grid-layout="pagination"></footer>

</div>

{{-- Templates --}}
@include('examples/crops/grid/table')
@include('examples/crops/grid/grid')
@include('examples/crops/grid/pagination')
@include('examples/crops/grid/filters')
