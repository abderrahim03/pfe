<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
            'cpassword' => 'required',
        ]);
        if ($request->cpassword == $request->password) {
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];   
            if (Auth::attempt($credentials)) {
                $isAdmin = auth()->user()->isAdmin;
                $userId = auth()->user()->id;
                return response()->json([
                    'userId' => $userId,
                    'isAdmin' => $isAdmin,
                    'isLogin' => true,
                    'token' => auth()->user()->createToken('pfe')->plainTextToken,
                    'status' => true,
                    'message' => 'user logged successfully'
                ]);
            }else {
                return response()->json([
                    'status' => false,
                    'isLogin' => false,
                    'message' => 'incorrect password!!'
                ]);
            }
        }
        else {
            return response()->json([
                'status' => false,
                'isLogin' => false,
                'message' => 'password different from confirm password'
            ]);
        }
    }
    public function register(Request $request)
    {
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'password' => 'required',
            'cpassword' => 'required',
        ]);
        if ($request->cpassword == $request->password) {
            return response()->json([
                User::create([
                    'firstName' => $request->firstName,
                    'lastName' => $request->lastName,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]),
                'status' => true,
                'message' => 'user created successfully'
            ]);
        }else {
            return response()->json([
                'status' => false,
                'message' => 'incorrect password!!'
            ]);
        }
    }

    public function logOut(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
