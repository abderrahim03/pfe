<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        return response()->json([
            'status' => 'Success',
            'data' => User::all(),
        ], 200, ['Status' => 'Success']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'phone' => 'required',
            'city' => 'required',
            'email' => 'required',
            'password' => 'required',
            'cpassword' => 'required',
        ]);
        if ($request->cpassword == $request->password) {
            return response()->json([
                User::create([
                    'firstName' => $request->firstName,
                    'lastName' => $request->lastName,
                    'phone' => $request->phone,
                    'city' => $request->city,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]),
                'status' => true,
                'message' => 'user Created successfully'
            ]);
        }else {
            return response()->json([
                'status' => false,
                'message' => 'incorrect password!!'
            ]);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        return response()->json($user->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        return response()->json($user->delete());
    }
}