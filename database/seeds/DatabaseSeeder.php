<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CommoditiesTableSeeder::class);
        $this->call(CommodityGoodsTableSeeder::class);
        $this->call(CommodityPricesTableSeeder::class);
    }
}
