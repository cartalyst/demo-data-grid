<?php

use Illuminate\Support\Facades\Route;

Route::group([ 'prefix' => 'watermelons' ], function () {
    Route::get('/', 'WatermelonsController@index')->name('example.watermelons');
    Route::get('source', 'WatermelonsController@source')->name('example.watermelons.source');
});
