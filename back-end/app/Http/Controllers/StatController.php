<?php

namespace App\Http\Controllers;

use App\Models\Stationnement;
use Dompdf\Dompdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class StatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stat = Stationnement::first();
        
        return view('stationnement', [
            'stat' => $stat
        ]);
    }
    public function generatePdf()
    {
        $stat = Stationnement::first();

        // Render the Blade template to HTML
        $html = View::make('stationnement', [
            'stat' => $stat
        ])->render();
        
        $dompdf = new Dompdf();
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        return $dompdf->stream('document.pdf');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stationnement $stationnement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stationnement $stationnement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stationnement $stationnement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stationnement $stationnement)
    {
        //
    }
}
