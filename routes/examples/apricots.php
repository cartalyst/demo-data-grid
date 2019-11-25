<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\Examples\ApricotsController;

Route::prefix('/apricots')->group(function () {
    Route::get('/', [ApricotsController::class, 'index'])->name('demo.example.apricots');
    Route::get('/source', [ApricotsController::class, 'source'])->name('demo.example.apricots.source');
});
