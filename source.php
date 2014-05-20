<?php

require 'vendor/autoload.php';

header('Content-Type: application/json');

/* Only required with dompdf */
// define('DOMPDF_ENABLE_AUTOLOAD', false);
// require 'vendor/dompdf/dompdf/dompdf_config.inc.php';

// Data grid configuration
$config = require_once 'vendor/cartalyst/data-grid/src/config/config.php';

// Instatiate the grid
$dataGrid = new Cartalyst\DataGrid\Environment(null, $config['handlers']);

// Prepare the data
$data = require_once 'data.php';

// Echo our grid
echo $dataGrid->make(
	$data,
	[
		'country',
		'subdivision',
		'city',
		'population',
		'country_code',
		'created_at',
	],
	[
		'sort'          => 'country',
		'direction'     => 'asc',
		'pdf_view'      => 'vendor/cartalyst/data-grid/src/views/pdf.php',
		'pdf_filename'  => 'data-grid',
		'json_options'  => JSON_PRETTY_PRINT,
		'csv_delimiter' => "\t",
		'csv_filename'  => 'csv_filename',
		'max_results'   => 10,
	]
);
