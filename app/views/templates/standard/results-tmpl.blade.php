<script type="text/template" data-grid="main" data-template="results">

	<% _.each(results, function(r) { %>

		<tr>
			<td><%= r.country %></td>
			<td><%= r.subdivision %></td>
			<td><%= r.city %></td>
			<td><%= r.population %></td>
		</tr>

	<% }); %>

</script>

