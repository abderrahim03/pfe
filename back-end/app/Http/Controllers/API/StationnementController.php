<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\Stationnement;
use Illuminate\Http\Request;

class StationnementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index()
    {
        return response()->json([
            'status' => 'Success',
            'data' => Stationnement::all(),
        ], 200, ['Status' => 'Success']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'dateStat' => 'required',
            'nbrUnit' => 'required',
            'user' => 'required',
            'park' => 'required',
            'TarifPark' => 'required',
        ]);

        $parking = Parking::where('id', $request->park)->first(); 
        $UpdateParking = [
            'nbrPlaceLibre' => $parking->nbrPlaceLibre - 1
        ];
        return response()->json([
            Stationnement::create($request->all()),
             $parking->update($UpdateParking)
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(Stationnement $Stationnement)
    {
        return response()->json($Stationnement);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stationnement $Stationnement)
    {
        return response()->json($Stationnement->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stationnement $Stationnement)
    {
        return response()->json($Stationnement->delete());
    }
}