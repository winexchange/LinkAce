@if()
    <link href="{{ mix('assets/dist/css/app-dark.css') }}" rel="stylesheet">
@elseif()
    <link rel="stylesheet" media="(prefers-color-scheme: light)" href="{{ mix('assets/dist/css/app.css') }}">
    <link rel="stylesheet" media="(prefers-color-scheme: dark)" href="{{ mix('assets/dist/css/app-dark.css') }}">
@else
    <link href="{{ mix('assets/dist/css/app.css') }}" rel="stylesheet">
@endif
