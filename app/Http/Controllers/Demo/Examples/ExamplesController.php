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
 * @copyright  (c) 2011-2019, Cartalyst LLC
 * @link       https://cartalyst.com
 */

namespace App\Http\Controllers\Demo\Examples;

use App\Http\Controllers\Controller;
use Symfony\Component\Finder\Finder;
use Cartalyst\DataGrid\Laravel\Facades\DataGrid;
use Cartalyst\DataGrid\DataHandlers\CollectionHandler;

class ExamplesController extends Controller
{
    public function index()
    {
        return view('demo/examples/index');
    }

    public function source()
    {
        $path = base_path('resources/views/demo/examples/*');

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
                $example['url'] = route('demo.example.'.$example['id']);
                $example['features'] = ucwords(join(' &amp; ', array_filter(array_merge(array(join(', ', array_slice($example['features'], 0, -1))), array_slice($example['features'], -1)), 'strlen')));

                return $example;
            }
        ];

        return DataGrid::make(new CollectionHandler($examples, $settings));
    }
}
