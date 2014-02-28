<script type="text/template" data-grid="single" id="applied-filters-tmpl">

	<% _.each(filters, function(f) { %>

		<li>

			<a href="#" class="remove-filter">

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

				<span class="close">&times;</span>

			</a>

		</li>

	<% }); %>

</script>
