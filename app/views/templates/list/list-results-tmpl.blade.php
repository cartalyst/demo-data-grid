<script type="text/template" data-grid="list" id="grid-tmpl">

	<% _.each(results, function(r) { %>

		<li>
			<h2><%= r.city %>
				<small><%= r.subdivision %></small>
			</h2>

			<span><%= r.population %></span>
		</li>

	<% }); %>

</script>

