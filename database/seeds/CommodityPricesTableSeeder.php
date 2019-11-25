<?php

use App\Models\CommodityPrices;

class CommodityPricesTableSeeder extends AbstractDataSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CommodityPrices::truncate();

        list($headers, $data) = $this->readCsv('data/commodity_prices');

        foreach ($data as $row) {
            CommodityPrices::insert(array_combine($headers, $row));
        }
    }
}
