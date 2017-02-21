<?php

use App\Models\Commodities;

class CommoditiesTableSeeder extends AbstractDataSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Commodities::truncate();

        list($headers, $data) = $this->readCsv('data/commodities');

        foreach ($data as $row) {
            Commodities::insert(array_combine($headers, $row));
        }
    }
}
