<?php $host = 'http://data-grid.dev/source' ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Data Grid Native Demo</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    </head>
    <body>

        <div class="container" style="margin-top: 40px;">
            <div class="jumbotron text-center">
                <h1>Data Grid Native Demo</h1>
            </div>
        </div>

        <div class="container" data-grid="main">

            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Download
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" data-download="json">JSON</a></li>
                    <li><a href="#" data-download="csv">CSV</a></li>
                </ul>
            </div>

            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Filters
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" data-filter="country:United States">United States</a></li>
                    <li><a href="#" data-filter="country:Canada">Canada</a></li>
                </ul>
            </div>

            <button data-reset type="button" class="btn btn-default">
                Reset
            </button>

            <div class="filters"></div>

            <table class="table" data-source="<?php echo $host; ?>">

                <thead>
                    <tr>
                        <th data-sort="country">Country</th>
                        <th data-sort="city">City</th>
                    </tr>
                </thead>
                <tbody></tbody>

            </table>

            <div class="text-center">
                <ul class="pagination"></ul>
            </div>

        </div>

        <!-- Start data templates -->
        <script type="text/template" data-grid="main" data-template="results">

            <% _.each(results, function(r) { %>

                <tr>
                    <td><%= r.country %></td>
                    <td><%= r.city %></td>
                </tr>

            <% }); %>

        </script>

        <script type="text/template" data-grid="main" data-template="filters">

            <% _.each(filters, function(f) { %>

                <a href="#"><span class="label label-success"><%= f.value %> in <%= f.column %> <i class="glyphicon icnon glyphicon-remove"></i></span></a>

            <% }); %>

        </script>

        <script type="text/template" data-grid="main" data-template="pagination">

            <% _.each(pagination, function(p) { %>

                <li><button class="btn" data-page="<%= p.previous_page %>"><i class="glyphicon icnon glyphicon-chevron-left"></i></a></li>
                <li><button class="btn" data-page="<%= p.next_page %>"><i class="glyphicon icnon glyphicon-chevron-right"></i></a></li>

            <% }); %>

        </script>

        <script type="text/template" data-grid="main" data-template="no_results">
            <tr>
                <td colspan="2">No Results</td>
            </tr>
        </script>
        <!-- End data templates -->

        <!-- Start script  -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src="vendor/cartalyst/data-grid/public/js/underscore.js"></script>
        <script src="vendor/cartalyst/data-grid/public/js/data-grid.js"></script>

        <script>
            $.datagrid('main', '.table', '.pagination', '.filters', {
                throttle: 20
            });
        </script>
        <!-- End scripts  -->

    </body>
</html>
