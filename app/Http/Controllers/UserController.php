<?php

namespace App\Http\Controllers;

use Str;
use App\Account;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // $query = User::query();

        // $query->take($request->input('take', 10));
        
        // $query->skip($request->input('skip', 0));

        // $users = $query->get();

        return Account::orderBy('id', 'desc')->paginate(10);
    }

    public function insert(Request $request)
    {
        $data = $request->only([
            'username', 'password',
        ]);

        $data['password'] = bcrypt($data['password']);

        $user = Account::create($data);

        return response()->json($user);
    }

    public function current(Request $request)
    {
        return $request->user();
    }
}
