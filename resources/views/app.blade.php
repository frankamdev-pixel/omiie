<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- =============================== --}}
    {{-- 🧠 SEO GLOBAL --}}
    {{-- =============================== --}}
    <title inertia>{{ config('app.name', 'OMIIE | Organisation des Milieux et Interfaces Informatiques pour Entreprises') }}</title>
    <meta name="description" content="OMIIE aide les entreprises à organiser, automatiser et améliorer leurs environnements informatiques avec des solutions modernes, performantes et adaptées à leurs besoins.">
    <meta name="keywords" content="OMIIE, informatique, entreprise, automatisation, digitalisation, organisation, interfaces, technologie, logiciels, SaaS, Cameroun, Yaoundé, Douala, Bafoussam">
    <meta name="author" content="OMIIE Team">
    <meta name="robots" content="index, follow">

    {{-- Open Graph --}}
    <meta property="og:title" content="OMIIE - Organisation des Milieux et Interfaces Informatiques pour Entreprises">
    <meta property="og:description" content="Optimisez vos environnements informatiques avec OMIIE — l’organisation et la technologie au service de votre entreprise.">
    <meta property="og:image" content="{{ asset('assets/logo.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="OMIIE">

    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="OMIIE - Organisation des Milieux et Interfaces Informatiques pour Entreprises">
    <meta name="twitter:description" content="Optimisez la performance et la gestion de vos systèmes informatiques avec OMIIE.">
    <meta name="twitter:image" content="{{ asset('assets/logo.png') }}">
    <meta name="twitter:site" content="@frankamdev">

    {{-- Favicon dynamique --}}
    <link id="favicon-light" rel="icon" type="image/png" href="/assets/logo-light.png">
    <link rel="icon" type="image/png" href="/assets/logo.png" />
    <link id="favicon-dark" rel="icon" type="image/png" href="/assets/logo-dark.png">
    <script>
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const updateFavicon = () => {
            document.getElementById('favicon-light').disabled = darkMode.matches;
            document.getElementById('favicon-dark').disabled = !darkMode.matches;
        };
        darkMode.addEventListener('change', updateFavicon);
        updateFavicon();
    </script>

    {{-- Dark mode init --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system') {
                if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Loader simple --}}
    <style>
        html { background-color: oklch(1 0 0); }
        html.dark { background-color: oklch(0.145 0 0); }

        #loader {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        html.dark #loader { background: #0e0e0e; }
        #loader img {
            width: 190px;
            animation: pulse 1.5s infinite ease-in-out;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
        }
    </style>

    {{-- React + Inertia --}}
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <div id="loader">
        <img src="/assets/logo.png" alt="OMIIE Loading...">
    </div>

    @inertia

    <script>
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            if(loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }
        });
    </script>
</body>
</html>
