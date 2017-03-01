<script type="text/template" data-grid="crops" data-grid-template="table">

<% var results = response.results; %>

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

    <tbody>

    <% if (_.isEmpty(results)) { %>

        <tr>
            <td colspan="6">No Results</td>
        </tr>

    <% } else { %>

        <% _.each(results, function(r) { %>

            <tr>
                <td class="mdl-data-table__cell--non-numeric"><%- r.country %></td>
                <td><%- r.year %></td>
                <td><%- r.item %></td>
                <td><%- r.value %> <%- r.unit %></td>
            </tr>

        <% }); %>

    <% } %>

    </tbody>

</table>

</script>
