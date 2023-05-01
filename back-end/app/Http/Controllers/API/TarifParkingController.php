<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TarifParking;
use Illuminate\Http\Request;

class TarifParkingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'status' => 'Success',
            'data' => TarifParking::all(),
        ], 200, ['Status' => 'Success']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'prix' => 'required',
            'park' => 'required',
        ]);

        return response()->json(TarifParking::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(TarifParking $tarifParking)
    {
        return response()->json($tarifParking);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TarifParking $tarifParking)
    {
        return response()->json($tarifParking->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TarifParking $tarifParking)
    {
        return response()->json($tarifParking->delete());
    }
}
