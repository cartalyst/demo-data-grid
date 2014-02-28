<?php

class CitySeeder extends Seeder {

	public function run()
	{
		$lines = array_map(function($line)
		{
			return explode("\t", $line);
		}, file(__DIR__.'/stubs/cities.txt', FILE_IGNORE_NEW_LINES|FILE_SKIP_EMPTY_LINES));

		DB::table('cities')->delete();

		foreach ($lines as $line)
		{
			$int = rand(1356998400, time());

			$city = new City(array(
				'country'                   => $line[0],
				'subdivision'              => $line[1],
				'city'                     => $line[2],
				'population'               => $line[3],
				'country_code'             => $line[4],
				'country_subdivision_code' => $line[5],
				'created_at'               => date("Y-m-d H:i:s", $int),
			));

			$city->save();
		}
	}

}
