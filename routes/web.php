<?php

use App\Http\Controllers\AlertaController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\DescuentoController;
use App\Http\Controllers\InventarioPrendaController;
use App\Http\Controllers\PrendaController;
use App\Http\Controllers\TallaController;
use App\Http\Controllers\TipoProductoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('tipo-productos', TipoProductoController::class);
    Route::resource('tallas', TallaController::class);
    Route::resource('colores', ColorController::class, [
        'parameters' => ['colores' => 'color']
    ]);
    Route::resource('alertas', AlertaController::class);
    Route::resource('prendas', PrendaController::class);
    Route::resource('inventario-prendas', InventarioPrendaController::class);
    Route::resource('descuentos', DescuentoController::class);


});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
