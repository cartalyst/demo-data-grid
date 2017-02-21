<?php

use Illuminate\Support\Facades\Route;

Route::group([ 'prefix' => 'crops' ], function () {
    Route::get('/', 'CropsController@index')->name('example.crops');
    Route::get('source', 'CropsController@source')->name('example.crops.source');
});
