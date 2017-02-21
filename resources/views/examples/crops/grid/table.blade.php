<script type="text/template" data-grid="crops" data-grid-template="table">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>

        <tr>
            <td class="no-results" colspan="4">No Results</td>
        </tr>

    <% } else { %>

        <% _.each(results, function(r) { %>

            <tr>
                <td class="mdl-data-table__cell--non-numeric">table <%- r.country %></td>
                <td><%- r.year %></td>
                <td><%- r.item %></td>
                <td><%- r.value %> <%- r.unit %></td>
            </tr>

        <% }); %>

    <% } %>

</script>
