<script type="text/template" data-grid="crops" data-grid-template="grid">

<% var results = response.results; %>

<div>

    {{-- Column sorts --}}
    <div class="expanded button-group">

        <button data-grid-sort="country">Country</button>
        <button data-grid-sort="date">Year</button>
        <button data-grid-sort="item">item</button>
        <button data-grid-sort="value">Production <span>(Tonnes)</span></button>

    </div>

    <div class="row small-up-1 medium-up-2">

    <% if (_.isEmpty(results)) { %>

        <div>No Results</div>


    <% } else { %>

        <% _.each(results, function(r) { %>

            <div class="column">
                <div class="card">
                    <div class="card-section">
                        <h4>
                            <%- r.country %>
                        </h4>
                    </div>
                    <div class="card-section">
                        <p><%- r.year %></p>
                        <p><%- r.item %></p>
                        <p><%- r.value %> <%- r.unit %></p>
                    </div>
                </div>
            </div>


        <% }); %>

    <% } %>

</div>

</script>
