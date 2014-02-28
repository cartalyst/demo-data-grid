<script type="text/template" data-grid="single" id="pagination-tmpl">


	<% _.each(pagination, function(p) { %>

		<div class="col-md-8">
			<p>Showing <%= p.pageStart %> to <%= p.pageLimit %> of <span class="total"><%= p.filteredCount %></span></p>
		</div>
		<div class="col-md-4">
			<ul class="pagination pagination-lg pull-right">

				<% if (p.prevPage !== null) { %>

					<li><a data-grid="single" data-page="<%= p.prevPage %>"><i class="fa fa-chevron-left"></i></a></li>

				<% } else { %>

					<li class="disabled"><a href="#"><i class="fa fa-chevron-left"></i></a></li>

				<% } %>

				<% if (p.nextPage !== null) { %>

					<li><a data-grid="single" data-page="<%= p.nextPage %>"><i class="fa fa-chevron-right"></i></a></li>

				<% } else { %>

					<li class="disabled"><a href="#"><i class="fa fa-chevron-right"></i></a></li>

				<% } %>

			</ul>
		</div>

	<% }); %>

</script>
