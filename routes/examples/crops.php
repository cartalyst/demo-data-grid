<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\Examples\CropsController;

Route::prefix('/crops')->group(function () {
    Route::get('/', [CropsController::class, 'index'])->name('demo.example.crops');
    Route::get('/source', [CropsController::class, 'source'])->name('demo.example.crops.source');
});
