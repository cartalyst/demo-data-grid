<?php

use Illuminate\Database\Migrations\Migration;

class InstallPopulations extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cities', function($table)
		{
			$table->increments('id');
			$table->string('country');
			$table->string('subdivision');
			$table->string('city');
			$table->integer('population');
			$table->string('country_code');
			$table->string('country_subdivision_code');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('cities');
	}

}
