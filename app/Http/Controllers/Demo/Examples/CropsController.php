<?php

namespace App\Http\Controllers\Demo\Examples;

use App\Models\Commodities;
use App\Http\Controllers\Controller;
use Cartalyst\DataGrid\Laravel\Facades\DataGrid;
use Cartalyst\DataGrid\Laravel\DataHandlers\DatabaseHandler;

class CropsController extends Controller
{
    /**
     * Shows the example page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('demo/examples/crops/index');
    }

    /**
     * Data grid source.
     *
     * @return \Cartalyst\DataGrid\DataGrid
     */
    public function source()
    {
        // The columns we want to retrieve from our data source
        $columns = [
            'country',
            'item_code',
            'item',
            'element_code',
            'element',
            'date',
            'unit',
            'value',
            'flag'
        ];

        // The column that will be sorted by default
        $sorts = [
            'column'    => 'item',
            'direction' => 'asc',
        ];

        // The transformer to manipulate some data
        $transformer = function ($element) {
            $element->year = $element->date->format('Y');
            $element->value = number_format($element->value);

            return $element;
        };

        // The Data Grid settings
        $settings = compact('columns', 'sorts', 'transformer');

        // Prepare the data source
        $data = Commodities::where('element', 'Production');

        // Prepare the Data Grid handler
        $handler = new DatabaseHandler($data, $settings);

        return DataGrid::make($handler);
    }
}
