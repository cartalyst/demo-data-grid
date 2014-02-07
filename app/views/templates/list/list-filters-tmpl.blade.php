<script type="text/template" data-grid="list" id="applied-tmpl">

	<% if (filters.length >= 1) { %>
	<div class="module">

		<h3>Applied Filters</h3>

		<ul>
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
		</ul>

	</div>
	<% } %>

</script>
