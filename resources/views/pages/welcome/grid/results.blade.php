<script type="text/template" data-grid="apricots" data-grid-template="results" data-grid-action="append">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>

        <div>No Results</div>

    <% } else { %>

        <% _.each(results, function (r) { %>

            <div class="row">

                <div class="item">
                   <%- r.item %>
                </div>

                <div class="date">
                     <%- r.year %> <span><%- r.country %></span>
                </div>

                <div class="value">
                    <%- r.value %> <span><%- r.unit %></span>
                </div>

            </div>

        <% }); %>

    <% } %>

</script>
