<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="{{ trans('app.description') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ trans('app.title') }}</title>

    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type='text/css'>

    <link rel="stylesheet" href="{{ url('css/app.css') }}">

</head>
<body>

    <main class="base">

        <header class="base__header">
            @include('partials/header')
        </header>

        <div class="page">
            @yield('page')
        </div>

        <footer class="base__footer">
            @include('partials/footer')
        </footer>

    </main>

    <script src="{{ url('js/app.js') }}"></script>

    @yield('scripts')

</body>
</html>
