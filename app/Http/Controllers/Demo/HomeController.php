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

namespace App\Http\Controllers\Demo;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Shows the welcome page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('demo/pages/welcome/index');
    }
}
