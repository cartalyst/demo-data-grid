<script type="text/template" data-grid="watermelons" data-grid-template="pagination">

    <%
        // Declare some variables to avoid duplication
        var previousPage = pagination.previousPage;
        var nextPage = pagination.nextPage;

        // We'll verify here if the previous and next
        // buttons are meant to be clickable.
        var previousButton = previousPage ? 'data-grid-page="' + previousPage + '"' : 'disabled';
        var nextButton = nextPage ? 'data-grid-page="' + nextPage + '"' : 'disabled';
    %>

    <nav>
        <%- pagination.pageStart %> {{ trans('pagination.to') }} <%- pagination.pageLimit %> {{ trans('pagination.of') }} <%- pagination.filtered %>

        <button <%= previousButton %>>
            <i class="material-icons">chevron_left</i>
        </button>

        <button <%= nextButton %>>
            <i class="material-icons">chevron_right</i>
        </button>
    </nav>

</script>
