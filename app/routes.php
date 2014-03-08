<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('single');
});

Route::get('standard', function()
{
	return View::make('standard');
});

Route::get('advanced', function()
{
	return View::make('advanced');
});

Route::get('infinite', function()
{
	return View::make('infinite');
});

Route::get('multiple', function()
{
	return View::make('multiple');
});


Route::get('source', function()
{
	// // Initiate by a database query
	// return DataGrid::make(DB::table('cities'), array(
	// 	'country',
	// 	'subdivision',
	// 	'city',
	// 	'population',
	// 	'country_code',
	// 	'country_subdivision_code',
	// ));

	// // Or by an Eloquent model query
	// return DataGrid::make(with(new City)->newQuery(), array(
	// 	'country',
	// 	'subdivision',
	// 	'city',
	// 	'population',
	// 	'country_code',
	// 	'country_subdivision_code',
	// ));

	// Or by an Eloquent model
	return DataGrid::make(new City, array(
		'id',
		'country',
		'subdivision',
		'city',
		'population',
		'country_code',
		'country_subdivision_code',
		'created_at',
	), array(
		'sort' => 'id',
		'direction' => 'desc',
	));
});
