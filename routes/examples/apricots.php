<?php

use Illuminate\Support\Facades\Route;

Route::group([ 'prefix' => 'apricots' ], function () {
    Route::get('/', 'ApricotsController@index')->name('example.apricots');
    Route::get('source', 'ApricotsController@source')->name('example.apricots.source');
});
