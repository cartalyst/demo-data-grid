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
        $seeds = [
              CommoditiesTableSeeder::class
            , CommodityGoodsTableSeeder::class
            , CommodityPricesTableSeeder::class
        ];

        foreach ($seeds as $seed) {
            $this->call($seed);
        }
    }
}
