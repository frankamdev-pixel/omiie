<?php

namespace App\Providers;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
      Inertia::share([
        'auth' => function () {
            return [
                'user' => Auth::user() ? [
                    'id' => Auth::id(),
                    'name' => Auth::user()->name,
                ] : null,
            ];
        },
        'flash' => function () {
            return [
                'success' => session('success'),
                'error' => session('error'),
                'info' => session('info')
            ];
        },
        
    ]);
    }
}
