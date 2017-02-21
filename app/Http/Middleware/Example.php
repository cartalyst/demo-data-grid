<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Example
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $example = $request->segment(2);

        $data = getExampleData($example);

        $data->id = $example;

        $data->route = route('example.'.$example);

        $data->description = ucwords(join(' &amp; ', array_filter(array_merge(array(join(', ', array_slice($data->features, 0, -1))), array_slice($data->features, -1)), 'strlen')));

        view()->share('example', $data);

        return $next($request);
    }
}
