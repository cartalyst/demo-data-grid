<script type="text/template" data-grid="infinite" data-template="filters">

	<% _.each(filters, function(f) { %>

			<a href="#" class="btn btn-default remove-filter">

				<% if (f.from !== undefined && f.to !== undefined) { %>

					<%= f.label %> <em><%= moment(f.from).format('MMM DD, YYYY') + ' - ' + moment(f.to).format('MMM DD, YYYY') %></em>

				<% } else if (f.operator !== undefined) { %>

					<%= f.column + ' ' + f.operator %> <em><%= f.value %></em>

				<% } else { %>

					<% if (f.column === 'all') { %>

						<%= f.value %>

					<% } else { %>

						<%= f.value %> in <em><%= f.column %></em>

					<% } %>

				<% } %>

				<span><i class="fa fa-minus-square-o"></i></span>

			</a>

	<% }); %>

</script>
