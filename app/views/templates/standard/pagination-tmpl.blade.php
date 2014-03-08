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


<br>
<br>
<br>
<br>


<% _.each(pagination, function(p) { %>

	<p class="pull-left">Showing <%= p.pageStart %> to <%= p.pageLimit %> of <span class="total"><%= p.filteredCount %></span></p>

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

<% }); %>


<br>
<br>
<br>
<br>


<% _.each(pagination, function(p) { %>

	<%

	var params,
		perPage,
		rect = [],
		total = p.totalPages,
		perPage = p.perPage;

	for (var i = 1; i <= total; i++)
	{
		params = {
			pageStart: perPage === 0 ? 0 : ( i === 1 ? 1 : (perPage * (i - 1) + 1)),
			pageLimit: i === 1 && (p.filteredCount > p.threshold) ? perPage : (p.totalCount < p.throttle) ? p.totalCount : perPage * i > p.threshold ? perPage * i < p.filteredCount ? perPage * i : p.filteredCount : p.filteredCount,
			nextPage: p.nextPage,
			prevPage: p.PrevPage,
			page: i,
			active: p.page,
			totalCount: p.totalCount,
			filteredCount: p.filteredCount
		};

		rect.push(params);
	}

	%>

	<% _.each(rect, function(p) { %>

		<ul class="pagination">

			<% if( ! p.throttleMore){ %>
				<li <%= ( p.active === p.page ? 'class="active"' : '') %>><a data-grid="advanced" data-page="<%= p.page %>" class="goto-page <%= ( p.active ? 'active' : '') %>">
					<%= p.pageStart %> - <%= p.pageLimit %>
				</a></li>
			<% } %>

		</ul>

	<% }); %>

<% }); %>

</script>
