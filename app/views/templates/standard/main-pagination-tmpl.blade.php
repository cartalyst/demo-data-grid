<script type="text/template" data-grid="main" id="pagination-tmpl">

	<% _.each(pagination, function(p) { %>
			<% if(p.throttle){ %>
				<a data-grid="main" data-throttle class="goto-page">
					Load More
				</a>
			<% }else{ %>
				<a data-grid="main" data-page="<%= p.page %>" class="goto-page <%= ( p.active ? 'active' : '') %>">
					<%= p.pageStart %> - <%= p.pageLimit %>
				</a>
			<% } %>

	<% }); %>

</script>

