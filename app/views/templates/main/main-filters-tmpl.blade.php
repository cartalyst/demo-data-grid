<script type="text/template" data-grid="main" id="applied-filters-tmpl">

	<% _.each(filters, function(f) { %>

		<li>

			<a href="#" class="remove-filter">

				<% if (f.column === 'all') { %>

					<%= f.value %>

				<% } else { %>

					<%= f.value %> in <em><%= f.column %></em>

				<% } %>

				<span class="close">&times;</span>

			</a>

		</li>

	<% }); %>

</script>
