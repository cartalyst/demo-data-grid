<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="{{ trans('app.tagline') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        @section('title')
        {{ trans('app.title') }}
        @show
    </title>

    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,400,400i,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type='text/css'>
    <link rel="stylesheet" href="{{ mix('assets/demo/css/app.css') }}">
</head>
<body>
    <main class="base">
        <header class="base__header">
            @include('demo/partials/header')
        </header>

        <div class="page">
            @yield('page')
        </div>

        <footer class="base__footer">
            @include('demo/partials/footer')
        </footer>
    </main>

    <script src="{{ mix('assets/demo/js/app.js') }}"></script>

    @includeIf('demo/partials/google-analytics')

    @yield('scripts')
</body>
</html>
