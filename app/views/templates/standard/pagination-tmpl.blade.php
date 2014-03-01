<script type="text/template" data-grid="main" data-template="pagination">

<ul class="pagination">

	<% _.each(pagination, function(p) { %>

		<% if (p.prevPage !== null) { %>

			<li><a data-grid="single" data-page="1"><i class="fa fa-angle-double-left"></i></a></li>

			<li><a data-grid="single" data-page="<%= p.prevPage %>"><i class="fa fa-chevron-left"></i></a></li>

		<% } else { %>

			<li class="disabled"><span><i class="fa fa-angle-double-left"></i></span></li>

			<li class="disabled"><span><i class="fa fa-chevron-left"></i></span></li>

		<% } %>

		<%

		var numPages = 11,
			split    = numPages - 1,
			middle   = Math.floor(split / 2);

		var i = p.page - middle > 0 ? p.page - middle : 1,
			j = p.totalPages;

		j = p.page + middle > p.totalPages ? j : p.page + middle;

		i = j - i < split ? j - split : i;

		if (i < 1)
		{
			i = 1;
			j = p.totalPages > split ? split + 1 : p.totalPages;
		}

		%>

		<% for(i; i <= j; i++) { %>

			<li <%= ( p.page === i ? 'class="active"' : '') %>><a data-grid="single" data-page="<%= i %>"><%= i %></a></li>

		<% } %>

		<% if (p.nextPage !== null) { %>

			<li><a data-grid="single" data-page="<%= p.nextPage %>"><i class="fa fa-chevron-right"></i></a></li>

			<li><a data-grid="single" data-page="<%= p.totalPages %>"><i class="fa fa-angle-double-right"></i></a></li>

		<% } else { %>

			<li class="disabled"><span><i class="fa fa-chevron-right"></i></span></li>

			<li class="disabled"><span><i class="fa fa-angle-double-right"></i></span></li>

		<% } %>

	<% }); %>

</ul>
</script>
