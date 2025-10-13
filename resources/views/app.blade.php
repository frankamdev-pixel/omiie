<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- SEO de base --}}
    <title inertia>{{ config('app.name', 'OMIIE | Organisation des Milieux et Interfaces Informatiques pour Entreprises') }}</title>
    <meta name="description" content="OMIIE est une plateforme innovante qui aide les entreprises à organiser, automatiser et améliorer leurs environnements informatiques grâce à des outils modernes et efficaces.">
    <meta name="keywords" content="OMIIE, informatique, entreprise, digitalisation, automatisation, organisation, interface, technologie, logiciel, SaaS">
    <meta name="author" content="OMIIE Team">
    <meta name="robots" content="index, follow">

    {{-- Open Graph (Facebook, LinkedIn, etc.) --}}
    <meta property="og:title" content="OMIIE - Organisation des Milieux et Interfaces Informatiques pour Entreprises">
    <meta property="og:description" content="Optimisez la performance et la gestion de vos systèmes informatiques avec OMIIE.">
    <meta property="og:image" content="{{ asset('assets/logo.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">

    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="OMIIE - Organisation des Milieux et Interfaces Informatiques pour Entreprises">
    <meta name="twitter:description" content="Optimisez la performance et la gestion de vos systèmes informatiques avec OMIIE.">
    <meta name="twitter:image" content="{{ asset('assets/logo.png') }}">

    {{-- Favicon --}}
    <link rel="icon" href="/assets/logo.png" sizes="any">
    <link rel="apple-touch-icon" href="/assets/logo.png">
    <link rel="icon" type="image/png" href="/assets/logo.png">

    {{-- Préférences de thème --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    <style>
        html {
            background-color: oklch(1 0 0);
        }
        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
