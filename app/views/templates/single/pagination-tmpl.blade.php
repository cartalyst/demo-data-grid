<script type="text/template" data-grid="single" data-template="pagination">

	<% _.each(pagination, function(p) { %>

		<div class="col-md-8">
			<p>Showing <%= p.pageStart %> to <%= p.pageLimit %> of <span class="total"><%= p.filteredCount %></span></p>
		</div>
		<div class="col-md-4">
			<ul class="pagination pagination-lg pull-right">

				<% if (p.prevPage !== null) { %>

					<li><a data-grid="single" data-page="<%= p.prevPage %>"><i class="fa fa-chevron-left"></i></a></li>

				<% } else { %>

					<li class="disabled"><span><i class="fa fa-chevron-left"></i></span></li>

				<% } %>

				<% if (p.nextPage !== null) { %>

					<li><a data-grid="single" data-page="<%= p.nextPage %>"><i class="fa fa-chevron-right"></i></a></li>

				<% } else { %>

					<li class="disabled"><span><i class="fa fa-chevron-right"></i></span></li>

				<% } %>

			</ul>
		</div>

	<% }); %>

</script>
