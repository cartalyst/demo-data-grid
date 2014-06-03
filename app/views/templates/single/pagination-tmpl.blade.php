<script type="text/template" data-grid="single" data-template="pagination">

	<% _.each(pagination, function(p) { %>

		<div class="col-md-8">
			<p>Showing <%= p.page_start %> to <%= p.page_limit %> of <span class="total"><%= p.filtered %></span></p>
		</div>
		<div class="col-md-4">
			<ul class="pagination pagination-lg pull-right">

				<% if (p.previous_page !== null) { %>

					<li><a data-grid="single" data-page="<%= p.previous_page %>"><i class="fa fa-chevron-left"></i></a></li>

				<% } else { %>

					<li class="disabled"><span><i class="fa fa-chevron-left"></i></span></li>

				<% } %>

				<% if (p.next_page !== null) { %>

					<li><a data-grid="single" data-page="<%= p.next_page %>"><i class="fa fa-chevron-right"></i></a></li>

				<% } else { %>

					<li class="disabled"><span><i class="fa fa-chevron-right"></i></span></li>

				<% } %>

			</ul>
		</div>

	<% }); %>

</script>
