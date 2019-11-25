<!DOCTYPE html>
<html>
<head>
    <title>Data Grid Demo</title>
    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,400,400i,500" rel="stylesheet">
    <style>
    html, body {
        height: 100%;
    }

    body {
        background-color: rgb(255,160,0);
        margin: 0;
        padding: 0;
        width: 100%;
        color: #FFFFFF;
        display: table;
        font-family: 'Exo 2';
    }

    .container {
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }

    .content {
        text-align: center;
        display: inline-block;
    }

    h1 {
        font-size: 72px;
        margin-bottom: 40px;

    }
    h2 {
        font-size: 36px;
        font-weight: 300;
    }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <img class="brand" src="{{ mix('assets/demo/images/brand-cartalyst.svg') }}">

            <h1>Cartalyst Demo</h1>
            <h2>Something Went Horribly Wrong :(</h2>
        </div>
    </div>
</body>
</html>
