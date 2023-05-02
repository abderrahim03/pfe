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
        
        $NbrStat = Stationnement::where('park', $request->id)->count();

        return response()->json([  
            'Status' => 'Success',
            'data' => $NbrStat,
        ]);
    }

}
