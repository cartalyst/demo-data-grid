<script type="text/template" data-grid="apricots" data-grid-template="results" data-grid-action="append">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>

        <div>No Results</div>

    <% } else { %>

        <% _.each(results, function (r) { %>

            <div class="row">

                <div><%- r.country %></div>

                <div><%- r.item %></div>

                <div><%- r.value %> <span><%- r.unit %></span></div>

                <div><%- r.year %></div>

            </div>

        <% }); %>

    <% } %>

</script>
