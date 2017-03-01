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

namespace App\Http\Controllers\Examples;

use App\Http\Controllers\Controller;

class TutorialController extends Controller
{
    /**
     * Shows the tutorial page.
     *
     * @param  string  $example
     * @return \Illuminate\View\View
     */
    public function index($example)
    {
        return view('examples/'.$example.'/tutorial');
    }
}
