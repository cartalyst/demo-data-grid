<script type="text/template" data-grid="crops" data-grid-template="blocks">

<% var results = response.results; %>

<div class="data-grid__grid">

    {{-- Column sorts --}}
    <nav>
        <button data-grid-sort="country">Country</button>
        <button data-grid-sort="date">Year</button>
        <button data-grid-sort="item">item</button>
        <button data-grid-sort="value">Production <span>(Tonnes)</span></button>
    </nav>

    <div class="row small-up-1 medium-up-2">

    <% if (_.isEmpty(results)) { %>

        <div class="column">No Results</div>

    <% } else { %>

        <% _.each(results, function(r) { %>

            <div class="column">

                <div class="card">

                    <div class="card-section">
                        <h4><%- r.item %></h4>
                    </div>

                    <div class="card-section">

                        <p><%- r.value %> <small><%- r.unit %></small></p>
                        <p><%- r.country %> <%- r.year %></p>

                    </div>

                </div>

            </div>

        <% }); %>

    <% } %>

    </div>

</div>

</script>
