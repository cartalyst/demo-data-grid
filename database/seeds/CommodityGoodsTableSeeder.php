<?php

use App\Models\CommodityGoods;

class CommodityGoodsTableSeeder extends AbstractDataSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CommodityGoods::truncate();

        list($headers, $data) = $this->readCsv('data/commodity_goods');

        foreach ($data as $row) {
            CommodityGoods::insert(array_combine($headers, $row));
        }
    }
}
