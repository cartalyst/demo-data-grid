<?php

use Illuminate\Support\Facades\Route;

Route::group([ 'prefix' => 'fruits' ], function () {
    Route::get('/', 'FruitsController@index')->name('example.fruits');
    Route::get('apples', 'FruitsController@apples')->name('example.fruits.apples');
    Route::get('oranges', 'FruitsController@oranges')->name('example.fruits.oranges');
});
