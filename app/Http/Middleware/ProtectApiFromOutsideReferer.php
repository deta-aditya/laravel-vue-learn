<?php

namespace App\Http\Middleware;

use Log;
use Closure;

class ProtectApiFromOutsideReferer
{
    private $whitelist = [
        '127.0.0.1'
    ];
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Log::info('Test');
        // foreach ($whitelist as $whitelistItem) {
        //     if ($request)
        // }

        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
    }
}
