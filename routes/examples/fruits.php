<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\Examples\FruitsController;

Route::prefix('/fruits')->group(function () {
    Route::get('/', [FruitsController::class, 'index'])->name('demo.example.fruits');
    Route::get('/apples', [FruitsController::class, 'apples'])->name('demo.example.fruits.apples');
    Route::get('/oranges', [FruitsController::class, 'oranges'])->name('demo.example.fruits.oranges');
});
