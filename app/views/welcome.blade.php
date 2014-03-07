<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="{{ URL::asset('assets/css/bootstrapdompdf.min.css') }}" >

    </head>
    <body>

		<div class="row">

            <div class="col-md-12">

                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th data-sort="id" class="sortable">ID</th>
                            <th data-sort="country" class="sortable">Country</th>
                            <th data-sort="subdivision" class="sortable">Subdivision</th>
                            <th data-sort="city" class="sortable">City</th>
                            <th data-sort="population" class="sortable">Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($results as $city)
                            <tr>
                                <td>
                                    {{ $city['id'] }}
                                </td>
                                <td>
                                    {{ $city['country'] }}
                                </td>
                                <td>
                                    {{ $city['subdivision'] }}
                                </td>
                                <td>
                                    {{ $city['city'] }}
                                </td>
                                <td>
                                    {{ $city['population'] }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

            </div>

        </div>

    </body>
</html>

