<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="csrf-token" value="{{ csrf_token() }}"/>
   <title>Vue</title>

   {{-- <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.core.css"> --}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<script src="https://cdnjs.cloudfare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
   <script async defer src="https://apis.google.com/js/api.js"></script>
   {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css"> --}}
   <link href="{{ asset('css/app.css') }}" type="text/css" rel="stylesheet"/>
</head>
<body>
   <div id="app">
   </div>
   <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
