<script type="text/template" data-grid="single" id="pagination-tmpl">

	<% _.each(pagination, function(p) { %>

		<div>

			<div class="pull-right">

				<ul class="pagination pagination-sm">

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

			{{{ trans('general.showing') }}} <%= p.pageStart %> {{{ trans('general.to') }}} <%= p.pageLimit %> {{{ trans('general.of') }}} <span class="total"><%= p.filteredCount %></span>

		</div>

	<% }); %>

</script>
