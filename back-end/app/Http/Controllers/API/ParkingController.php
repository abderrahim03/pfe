<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use Illuminate\Http\Request;

class ParkingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'status' => 'Success',
            'data' => Parking::all(),
        ], 200, ['Status' => 'Success']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'city' => 'required',
            'nbrPlace' => 'required',
            'nbrPlaceLibre' => 'required',
        ]);

        return response()->json(Parking::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Parking $parking)
    {
        return response()->json($parking);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Parking $parking)
    {
        return response()->json($parking->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Parking $parking)
    {
        return response()->json($parking->delete());
    }
}
