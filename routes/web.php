<?php

/**
 * Part of the Data Grid Demo application.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Data Grid Demo
 * @version    1.0.0
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
 * @copyright  (c) 2011-2017, Cartalyst LLC
 * @link       http://cartalyst.com
 */

use Illuminate\Routing\Router;

// Content Pages
$router->get('/', 'PagesController@welcome')->name('home');
$router->get('developers', 'PagesController@developers')->name('developers');
$router->get('managers', 'PagesController@managers')->name('managers');
$router->get('install', 'PagesController@install')->name('install');

// Sources
$router->group([ 'prefix' => 'source' ], function (Router $router) {
    $router->get('collection', 'SourceController@collection')->name('source.collection');
    $router->get('database', 'SourceController@database')->name('source.database');
    $router->get('database/export', 'SourceController@databaseExport')->name('source.database.export');
});

// Examples
$router->group([ 'prefix' => 'examples', 'namespace' => 'Examples' ], function(Router $router) {
    // Main examples route
    $router->get('/', 'ExamplesController@index')->name('examples');
    $router->get('source', 'ExamplesController@source')->name('examples.source');

    $router->group([ 'middleware' => 'example' ], function (Router $router) {
        // Tutorial route
        $router->get('{example}/tutorial', 'TutorialController@index')->name('example.tutorial');

        // Crops:
        require __DIR__.'/examples/crops.php';

        // Apricots:
        require __DIR__.'/examples/apricots.php';

    });
});
