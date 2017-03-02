<script type="text/template" data-grid="crops" data-grid-template="filters">

    <%
        // Get the applied filters, but we'll make sure to not
        // show filters when doing any kind of live search.
        var filters = _.reject(grid.appliedFilters, function(f) { return f.type === 'live'; });

        // To validate, below, if the applied filter is a date with the format: YYYY-mm-dd
        var dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;

        //
        var operators = {
            '='    : 'is equal to',
            '<'    : 'is less than',
            '>'    : 'is greater than',
            '!='   : 'is not equal to',
            'like' : 'contains',
        };
    %>

    <% if (_.isObject(filters)) { %>

        <% _.each(filters, function(f) { %>

            <span data-grid-reset-filter="<%- f.name %>">

                <i class="material-icons">close</i>

                <% if (f.query.from !== undefined && f.query.to !== undefined) { %>

                    <% if (dateRegex.test(f.query.from) && dateRegex.test(f.query.to)) { %>

                        <%- f.label.from %> <em><%- moment(f.query.from).format('MMM DD, YYYY') %></em> <%- f.label.to %> <em><%- moment(f.query.to).format('MMM DD, YYYY') %></em>

                    <% } else { %>

                        <%- f.label.from %> <em><%- f.query.from %></em> <%- f.label.to %> <em><%- f.query.to %></em>

                    <% } %>

                <% } else if (f.label) { %>

                    <%- f.label %>

                <% } else if (f.type === 'search') { %>

                    <%- f.query.value %> in <em><%- f.query.column %>

                <% } else { %>

                    <% _.each(f.query, function (q) { %>

                        <% var operator = q.operator ? q.operator : 'like' %>

                        <i><%- q.column %></i> <%- operators[operator] %> <i><%- q.value %></i>

                    <% })%>

                <% } %>

            </span>

        <% }); %>

    <% } %>

</script>
