<script type="text/template" data-grid="infinite" id="pagination-tmpl">
	<div class="col-md-12">
		<% _.each(pagination, function(p) { %>

				<a href="#" class="goto-page" data-grid="infinite" data-page="<%= p.page %>">
					Load More
				</a>

		<% }); %>
	</div>
</script>
