<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\Stationnement;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getNbrStat(Request $request)
    {
        
        $NbrStat = Stationnement::where('user', $request->user)
            ->where('park', $request->park)
            ->where('dateStat', $request->dateStat)->count();

        return response()->json([  
            'Status' => 'Success',
            'data' => $NbrStat,
        ]);
    }

}
