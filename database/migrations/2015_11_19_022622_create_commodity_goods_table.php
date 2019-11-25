<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommodityGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commodity_goods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('country');
            $table->unsignedInteger('item_code');
            $table->string('item');
            $table->unsignedInteger('element_code');
            $table->string('element');
            $table->timestamp('date');
            $table->string('unit');
            $table->unsignedInteger('value');
            $table->string('flag');

            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commodity_goods');
    }
}
