<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Stationnements;
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
            'data' => Stationnements::all(),
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

        return response()->json(Stationnements::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Stationnements $stationnements)
    {
        return response()->json($stationnements);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stationnements $stationnements)
    {
        return response()->json($stationnements->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stationnements $stationnements)
    {
        return response()->json($stationnements->delete());
    }
}
