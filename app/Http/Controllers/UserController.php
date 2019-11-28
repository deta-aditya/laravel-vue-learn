<?php

namespace App\Http\Controllers;

use Str;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();
        return response()->json($users);
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
