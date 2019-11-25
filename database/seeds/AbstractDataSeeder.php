<?php

use League\Csv\Reader;
use Illuminate\Database\Seeder;

abstract class AbstractDataSeeder extends Seeder
{
    /**
     * Reads the given csv file and returns its headers and content.
     *
     * @parma string $filePath
     *
     * @return array
     */
    public function readCsv(string $filePath): array
    {
        $csv = Reader::createFromPath(database_path("seeds/{$filePath}.csv"));

        $headers = $csv->fetchOne();

        $data = $csv->setOffset(1)->fetch();

        return [$headers, $data];
    }
}
