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

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    /**
     * Shows the welcome page.
     *
     * @return \Illuminate\View\View
     */
    public function welcome()
    {
        return view('pages/welcome/index');
    }

    /**
     * Shows the developers page.
     *
     * @return \Illuminate\View\View
     */
    public function developers()
    {
        return view('pages/developers/index');
    }

    /**
     * Shows the managers page.
     *
     * @return \Illuminate\View\View
     */
    public function managers()
    {
        return view('pages/managers/index');
    }

    /**
     * Shows the managers page.
     *
     * @return \Illuminate\View\View
     */
    public function install()
    {
        return view('pages/install/index');
    }
}
