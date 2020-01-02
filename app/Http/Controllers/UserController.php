<?php

namespace App\Http\Controllers;

use Str;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // $query = User::query();

        // $query->take($request->input('take', 10));
        
        // $query->skip($request->input('skip', 0));

        // $users = $query->get();

        return User::paginate(10);
    }

    public function insert(Request $request)
    {
        $data = $request->only([
            'name', 'email',
        ]);

        $data['password'] = Str::random(10);

        $user = User::create($data);

        return response()->json($user);
    }
}
