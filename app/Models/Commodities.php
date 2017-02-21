<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commodities extends Model
{
    /**
     * {@inheritdoc}
     */
    protected $table = 'commodities';

    /**
     * {@inheritdoc}
     */
    protected $dates = [ 'date' ];
}
