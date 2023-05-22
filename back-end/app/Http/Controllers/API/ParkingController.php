<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

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

    public function getPlaceTable(Request $request)
    {
        $park = Parking::find($request->id);

        $Places = DB::table($park->name)->select()->get();
        
        return response()->json([
            'status' => 'Success',
            'data' => $Places,
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
        
        Schema::create($request->name, function (Blueprint $table) {
            $table->id();
            $table->foreignId('park')->constrained('parkings');
            $table->boolean('isLibre')->default(true);
        });

        $parking = Parking::create($request->all());

        for ($i=0; $i < $request->nbrPlace; $i++) { 
            DB::table($request->name)->insert([
                'park' => $parking->id,
                'isLibre' => true,
            ]);
        }

        return response()->json($parking);
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
