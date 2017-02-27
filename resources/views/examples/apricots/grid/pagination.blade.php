<script type="text/template" data-grid="apricots" data-grid-template="pagination">

    <%
        // We'll verify if the load more button can be triggered or
        // not, depending if we have more results to be loaded.
        var loadMore = pagination ? 'data-grid-page="' + pagination.page + '"' : 'disabled';
    %>

    <button <%= loadMore %>>
        {{ trans('pagination.load') }}
    </button>

</script>
