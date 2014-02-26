<script type="text/template" data-grid="main" id="table-tmpl">

	<% _.each(results, function(r) { %>

		<tr>
			<td><%= r.country %></td>
			<td><%= r.subdivision %></td>
			<td><%= r.city %></td>
			<td><%= r.population %></td>
		</tr>

	<% }); %>

</script>

