<script type="text/template" data-grid="single" id="pagination-tmpl">

	<% _.each(pagination, function(p) { %>

		<div>
			Showing <%= p.pageStart %> to <%= p.pageLimit %> of <span class="total"><%= p.filteredCount %></span>
		</div>

		<ul>

			<% if (p.prevPage !== null) { %>

				<li><a data-grid="single" data-page="<%= p.prevPage %>"><i class="fa fa-chevron-left"></i></a></li>

			<% } else { %>

				<li><span class="disabled"><i class="fa fa-chevron-left"></i></span></li>

			<% } %>

			<% if (p.nextPage !== null) { %>

				<li><a data-grid="single" data-page="<%= p.nextPage %>"><i class="fa fa-chevron-right"></i></a></li>

			<% } else { %>

				<li><span class="disabled"><i class="fa fa-chevron-right"></i></span></li>

			<% } %>

		</ul>

	<% }); %>

</script>
