<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\HomeController;
use App\Http\Controllers\Demo\InstallerController;
use App\Http\Controllers\Demo\Examples\ExamplesController;
use App\Http\Controllers\Demo\Examples\TutorialController;

Route::get('/', function () {
    return redirect()->route('demo.home');
    // return view('welcome');
});

Route::prefix('/demo')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('demo.home');
    Route::get('/install', [InstallerController::class, 'index'])->name('demo.install');

    Route::prefix('/examples')->group(function () {
        Route::get('/', [ExamplesController::class, 'index'])->name('demo.examples');
        Route::get('/source', [ExamplesController::class, 'source'])->name('demo.examples.source');

        Route::middleware('example')->group(function () {
            Route::get('{example}/tutorial', [TutorialController::class, 'index'])->name('demo.example.tutorial');

            require __DIR__.'/examples/apricots.php';
            require __DIR__.'/examples/crops.php';
            require __DIR__.'/examples/fruits.php';
        });
    });
});
