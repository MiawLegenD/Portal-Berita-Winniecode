<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BeritaController::class, 'index']);
Route::post('/artikel', [BeritaController::class, 'store'])->middleware(['auth', 'verified'])->name('create.berita');
Route::get('/artikel', [BeritaController::class, 'show'])->middleware(['auth', 'verified'])->name('my.berita');
Route::get('/artikel/edit', [BeritaController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.berita');
Route::post('/artikel/update', [BeritaController::class, 'update'])->middleware(['auth', 'verified'])->name('update.berita');
Route::post('/artikel/detele', [BeritaController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.berita');
Route::get('/artikel/{id}', [BeritaController::class, 'detail']); //->middleware(['auth', 'verified'])->name('detail.berita');


Route::get('/tambah-berita', function () {
    return Inertia::render('TambahBerita');
})->middleware(['auth', 'verified'])->name('tambah.berita');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';