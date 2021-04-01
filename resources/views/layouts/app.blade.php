@php
    $requireDarkMode = usersettings('darkmode_setting') === '1'
        || (request()->is('guest/*') && systemsettings('guest_darkmode_setting') === '1');
    $respectSystemColorScheme = usersettings('darkmode_setting') === '2'
        || (request()->is('guest/*') && systemsettings('guest_darkmode_setting') === '2')
@endphp
    <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @if($requireDarkMode) class="dark" @endif>
<head>
    @include('partials.header')
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-400">
<div id="app">

    @include('partials.nav')

    <main class="main container dark:bg-gray-900">
        @include('partials.alerts')
        @yield('content')
    </main>

    @include('partials.footer')

</div>
</body>
</html>
