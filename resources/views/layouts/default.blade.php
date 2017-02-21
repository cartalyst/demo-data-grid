<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="{{ trans('app.description') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ trans('app.title') }}</title>

    <!-- Page styles -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,700' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="{{ url('css/styles.css') }}">
    <link rel="stylesheet" href="{{ url('css/app.css') }}">


</head>
<body>

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

        @include('partials/header')

        @include('partials/sidebar')

        <div class="page mdl-layout__content">

            @yield('page')

            <div class="mdl-layout-spacer"></div>

            @include('partials/footer')

        </div>

    </div>

    <script src="{{ url('js/scripts.js') }}"></script>

    @yield('scripts')

</body>
</html>
