<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Pizza" />
    <meta name="Keywords" content="Pizza" />
    <meta name="theme-color" content="#ece8e0"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="react" content="yes"/>

    {{-- <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet"> --}}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <title>Pizza</title>
</head>

<body>
    <div id="app" data-items="{{ $items }}" data-root="{{ $root }}"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
