<div class="data-grid data-grid--table" data-example="table" data-grid="watermelons">

    <header>

        <h3>{{ $example->name }} <span>Production &amp; areas harvested, 2010-2013</span></h3>

        <nav>

            {{-- Loader --}}
            <div class="loading"></div>

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
            <div class="menu">

                <button id="menu">
                    <i class="material-icons">filter_list</i>
                </button>

                <ul for="menu" data-grid-group data-grid-reset-group>
                    <li data-grid-filter="production"
                        data-grid-query="element_code:=:5510">
                            Production
                    </li>

                    <li data-grid-filter="area_harvested"
                        data-grid-query="element_code:=:5312"
                        data-grid-label="Area Harvested">
                            Area Harvested
                    </li>
                </ul>

            </div>

        </nav>

    </header>

    {{-- Applied Filters container --}}
    <div data-grid-layout="filters"></div>

    <table>

        {{-- Column sorts --}}
        <thead>
            <tr>
                <th data-grid-sort="Country">Country</th>
                <th data-grid-sort="date">Year</th>
                <th data-grid-sort="item">Crop</th>
                <th data-grid-sort="value">Value</th>
            </tr>
        </thead>

        {{-- Results container --}}
        <tbody data-grid-layout="results"></tbody>

    </table>

    {{-- Pagination container --}}
    <footer data-grid-layout="pagination"></footer>

</div>

{{-- Templates --}}
@include('examples/watermelons/grid/results')
@include('examples/watermelons/grid/pagination')
@include('examples/watermelons/grid/filters')
