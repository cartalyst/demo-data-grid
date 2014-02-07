<script type="text/template" data-grid="list" id="pagination-tmpl">

	<% _.each(pagination, function(p) { %>

			<a href="#" class="goto-page" data-grid="list" data-page="<%= p.page %>">
				Load More
			</a>

	<% }); %>

</script>
