<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\Stationnement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDF;

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
            'place' => 'required',
        ]);

        $parking = Parking::where('id', $request->park)->first(); 
        
        $UpdateParking = [
            'nbrPlaceLibre' => $parking->nbrPlaceLibre - 1
        ];
        
        $park = $parking->update($UpdateParking);

        $place = DB::table($parking->name)->where('id', '=', $request->place)->first();
        // dd($place);
        if ($place->isLibre == false || $parking->nbrPlaceLibre <= 0) {
            return response()->json([
                'status' => false,
                'message' => 'Auccune place libre dans ce parking ou bien la place est deja reserve, chercher vous dans un autre parking'
            ]);
        }else {
            DB::table($parking->name)->where('id', '=', $request->place)->update([ 'isLibre' => false ]);
            return response()->json([
                Stationnement::create($request->all()),
                $park,
                'status' => true,
                'message' => 'Stationnement Has bieng Created successfully'
            ]);
            
        }
        
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
        $parking = Parking::where('id', $Stationnement->park)->first(); 
        
        $UpdateParking = [
            'nbrPlaceLibre' => $parking->nbrPlaceLibre + 1
        ];
        
        $park = $parking->update($UpdateParking);

        DB::table($parking->name)->where('id', '=', $Stationnement->place)->update([ 'isLibre' => true ]);
        
        return response()->json([
            'deleted' => $Stationnement->delete(),
            'park Updated' => $park,
            'message' => 'stationnement a ete bien suprimer'
        ]);
    }
}