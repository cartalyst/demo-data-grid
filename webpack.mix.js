const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .options({ processCssUrls: false })
    .copy('resources/assets/images/**/*', 'public/assets/demo/images')
    .sass('resources/assets/sass/app.scss', 'public/assets/demo/css')
    .combine([
        'node_modules/lodash/lodash.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'resources/assets/js/highlight.pack.js',
        'node_modules/clipboard/dist/clipboard.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'vendor/cartalyst/data-grid/resources/assets/js/exoskeleton.min.js',
        'vendor/cartalyst/data-grid/resources/assets/js/data-grid.js',
        'resources/assets/js/app.js'
    ], 'public/assets/demo/js/app.js')
    .version()
