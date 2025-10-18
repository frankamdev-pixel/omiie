<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
Route::post('/devis', [DevisController::class, 'store'])->name('devis.store');
Route::get('/devis', [DevisController::class, 'index'])->name('devis.index');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/demo', [DemoController::class, 'index'])->name('demo');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');


Route::middleware(['auth', 'verified'])->group(function () {
 Route::get('dashboard', function () {
  return Inertia::render('dashboard');
 })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
