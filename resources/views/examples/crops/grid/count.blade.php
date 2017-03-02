<script type="text/template" data-grid="crops" data-grid-template="count">

    <% if (response.results.length != 0) { %>
		<% var count = response.filtered; %>
		<%= count %>
	<% } %>

</script>
