<script type="text/template" data-grid="welcome" data-grid-template="pagination">

    <% var pagination = grid.buildPagination(response); %>

    <% _.each(pagination, function(p) { %>

        <div class="row">

            <div class="col-md-5">

                <p>Showing <%= p.page_start %> to <%= p.page_limit %> of <%= p.filtered %></p>

            </div>

            <div class="col-md-7">

                <ul class="pagination pagination-sm pull-right" style="margin-top: 0">

                    <% if (p.previous_page !== null) { %>

                        <li><a href="#" data-grid="basic" data-grid-page="1"><i class="fa fa-angle-double-left"></i></a></li>

                        <li><a href="#" data-grid="basic" data-grid-page="<%= p.previous_page %>"><i class="fa fa-chevron-left"></i></a></li>

                    <% } else { %>

                        <li class="disabled"><span><i class="fa fa-angle-double-left"></i></span></li>

                        <li class="disabled"><span><i class="fa fa-chevron-left"></i></span></li>

                    <% } %>

                    <%

                    var num_pages = 8,
                        split    = num_pages - 1,
                        middle   = Math.floor(split / 2);

                    var i = p.page - middle > 0 ? p.page - middle : 1,
                        j = p.pages;

                    j = p.page + middle > p.pages ? j : p.page + middle;

                    i = j - i < split ? j - split : i;

                    if (i < 1)
                    {
                        i = 1;
                        j = p.pages > split ? split + 1 : p.pages;
                    }

                    %>

                    <% for(i; i <= j; i++) { %>

                        <% if (p.page === i) { %>

                        <li class="active"><span><%= i %></span></li>

                        <% } else { %>

                        <li><a href="#" data-grid="basic" data-grid-page="<%= i %>"><%= i %></a></li>

                        <% } %>

                    <% } %>

                    <% if (p.next_page !== null) { %>

                        <li><a href="#" data-grid="basic" data-grid-page="<%= p.next_page %>"><i class="fa fa-chevron-right"></i></a></li>

                        <li><a href="#" data-grid="basic" data-grid-page="<%= p.pages %>"><i class="fa fa-angle-double-right"></i></a></li>

                    <% } else { %>

                        <li class="disabled"><span><i class="fa fa-chevron-right"></i></span></li>

                        <li class="disabled"><span><i class="fa fa-angle-double-right"></i></span></li>

                    <% } %>

                </ul>

            </div>

        </div>

    <% }); %>

</script>
