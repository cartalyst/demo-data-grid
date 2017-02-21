<?php

/**
 * Part of the Data Grid Quickstart application.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Data Grid Quickstart
 * @version    1.0.0
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
 * @copyright  (c) 2011-2017, Cartalyst LLC
 * @link       http://cartalyst.com
 */

namespace App\Http\Controllers\Examples;

use App\Http\Controllers\Controller;
use Symfony\Component\Finder\Finder;
use Cartalyst\DataGrid\Laravel\Facades\DataGrid;
use Cartalyst\DataGrid\DataHandlers\CollectionHandler;

class ExamplesController extends Controller
{
    public function index()
    {
        return view('examples/index');
    }

    public function source()
    {
        $path = base_path('resources/views/examples/*');

        $files = (new Finder)->files()->name('example.json')->in($path);

        $examples = array_map(function ($file) {
            $contents = json_decode($file->getContents(), true);

            $contents['id'] = basename(dirname($file->getRealpath()));

            return $contents;
        }, iterator_to_array($files));

        $settings = [
            'columns' => [
                'id',
                'url',
                'name',
                'source',
                'features',
                'description',
            ],
            'transformer' => function ($example) {
                $example['url'] = route('example.'.$example['id']);

                return $example;
            }
        ];

        return DataGrid::make(new CollectionHandler($examples, $settings));
    }
}
