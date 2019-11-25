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

/**
 * Reads the given file and returns it's contents.
 *
 * @param  string  $file
 * @return string
 */
function getFileContents($file)
{
    $fs = app('files');

    if ($fs->exists($file)) {
        return preg_replace('#\s(id|class|colspan)="[^"]+"#', '', $fs->get($file));
    }
}

/**
 * Renders the given markdown file into html.
 *
 * @param  string  $file
 * @return string
 */
function renderMarkdown($file)
{
    $file = base_path("resources/views/{$file}");

    return app('interpreter')->make(getFileContents($file), 'md')->toHtml();
}

/**
 * Renders the given file into an html code block.
 *
 * @param  string  $file
 * @param  string  $class
 * @return string
 */
function renderCode($file, $class)
{
    return '<code class="'.$class.'">'.e(getFileContents(base_path($file))).'</code>';
}
