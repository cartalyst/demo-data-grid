<?php

use League\Csv\Reader;
use Illuminate\Database\Seeder;

abstract class AbstractDataSeeder extends Seeder
{
    /**
     * Reads the given csv file and returns its headers and content.
     *
     * @return array
     */
    public function readCsv($file)
    {
        $csv = Reader::createFromPath(database_path("seeds/{$file}.csv"));

        $headers = $csv->fetchOne();

        $data = $csv->setOffset(1)->fetch();

        return [ $headers, $data ];
    }
}
