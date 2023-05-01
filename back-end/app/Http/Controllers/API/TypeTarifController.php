<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TypeTarif;
use Illuminate\Http\Request;

class TypeTarifController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'status' => 'Success',
            'data' => TypeTarif::all(),
        ], 200, ['Status' => 'Success']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required',
        ]);

        return response()->json(TypeTarif::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(TypeTarif $typeTarif)
    {
        return response()->json($typeTarif);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TypeTarif $typeTarif)
    {
        return response()->json($typeTarif->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypeTarif $typeTarif)
    {
        return response()->json($typeTarif->delete());
    }
}
