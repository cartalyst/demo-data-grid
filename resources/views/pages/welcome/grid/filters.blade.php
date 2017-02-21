<script type="text/template" data-grid="welcome" data-grid-template="filters">

    <% var filters = _.reject(grid.applied_filters, function(f) {return f.type === 'live';}); %>

    <% if (_.isEmpty(filters)) { %>

        <i>There are no filters applied.</i>

    <% } else { %>

        <% _.each(filters, function(f) { %>
            <button class="btn btn-default" data-grid-reset-filter="<%= f.name %>">

                <% if (f.query.from !== undefined && f.query.to !== undefined) { %>

                    <% if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(f.query.from) && /[0-9]{4}-[0-9]{2}-[0-9]{2}/g.test(f.query.to)) { %>

                        <%- f.label %> <em><%- moment(f.query.from).format('MMM DD, YYYY') %> - <%- moment(f.query.to).format('MMM DD, YYYY') %></em>

                    <% } else { %>

                        <%- f.label %> <em><%- f.query.from %> - <%- f.query.to %></em>

                    <% } %>

                <% } else if (f.label) { %>

                    <%- f.label %>

                <% } else { %>

                    <% if (f.query.column === 'all') { %>

                        <%- f.query.value %>

                    <% } else { %>

                        <%- f.query.value %> in <em><%- f.query.column %></em>

                    <% } %>

                <% } %>

                <span><i class="fa fa-times-circle"></i></span>

            </button>

        <% }); %>
    <% } %>

</script>
