<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commodities extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'commodities';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date'
    ];
}
