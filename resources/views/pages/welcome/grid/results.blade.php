<script type="text/template" data-grid="welcome" data-grid-template="results">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>
        <tr>
            <td colspan="5">No Results</td>
        </tr>
    <% } else { %>

        <% _.each(results, function(r) { %>

            <tr>
                <td><%= r.country %></td>
                <td><%= r.year %></td>
                <td><%= r.plants %></td>
                <td><%= r.shellfish %></td>
                <td><%= r.fish %></td>
                <td><%= r.total %></td>
            </tr>

        <% }); %>

    <% } %>

</script>


<script type="text/template" data-grid="basic" data-grid-template="results_alt">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>
        <li>
            <h1>ALT</h1>
            <td colspan="4">No Results</td>
        </li>
    <% } else { %>

        <% _.each(results, function(r) { %>

            <li>
                <span><%= r.country %></span>
                <span><%= r.subdivision %></span>
                <span><%= r.city %></span>
                <span><%= r.population %></span>
            </li>

        <% }); %>

    <% } %>

</script>

