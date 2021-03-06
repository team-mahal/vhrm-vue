@php
$config = [
    'appName' => config('app.name'),
    'ismobile' => 'd',
    'locale' => $locale = app()->getLocale(),
    'base_url' => \URL::to('/'),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<style>
  #app{
    width: 100%;
  }
</style>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>{{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ mix('dist/css/main.css') }}">
  <link rel="stylesheet" href="/vue-multiselect.min.css">
</head>
<body class="bg-gray-100">
  <div id="app">
    
  </div>

  {{-- Global configuration object --}}
  <script>
    window.config = @json($config);
  </script>

  {{-- Load the application scripts --}}
  <script src="{{ mix('dist/js/app.js') }}"></script>
</body>
</html>
