<?php

namespace App\Http\Middleware;

use Closure;
use stdClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class Example
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $example = $request->segment(3);

        $data = $this->getExampleData($example);

        $data->id = $example;

        $data->route = route('demo.example.'.$example);

        $data->description = ucwords(join(' &amp; ', array_filter(array_merge(array(join(', ', array_slice($data->features, 0, -1))), array_slice($data->features, -1)), 'strlen')));

        View::share('example', $data);

        return $next($request);
    }

    /**
     * Reads the example.json file from the given example.
     *
     * @param string $example
     *
     * @return \stdClass
     */
    protected function getExampleData(string $example): stdClass
    {
        return json_decode(file_get_contents(
            resource_path('views/demo/examples/'.$example.'/example.json')
        ));
    }
}
