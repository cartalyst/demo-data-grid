<script type="text/template" data-grid="apples" data-grid-template="results" data-grid-action="append">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>

        <div>No Results</div>

    <% } else { %>

        <% _.each(results, function (r) { %>

            <div class="row">

                <div><%- r.country %></div>

                <div><%- r.value %> <small><%- r.unit %></small></div>

                <div><%- r.year %></div>

            </div>

        <% }); %>

    <% } %>

</script>
