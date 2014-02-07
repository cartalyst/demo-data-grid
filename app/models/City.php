<?php

use Illuminate\Database\Eloquent\Model;

class City extends Model {

	/**
	 * Indicates if the model should be timestamped.
	 *
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * Mutator for the "population" attribute.
	 *
	 * @param  string  $population
	 * @return int
	 */
	public function getPopulationAttribute($population)
	{
		return (int) $population;
	}

}
