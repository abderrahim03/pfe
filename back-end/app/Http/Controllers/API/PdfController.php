<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Stationnement;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\View;

class PdfController extends Controller
{
    public function getHtml()
    {
        // Render the Blade template to HTML
        $html = View::make('test')->render();

        return response()->json([
            'html' => $html
        ]);
    }

    public function createPDF(Request $request) {

        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'city' => 'required',
            'place' => 'required',
            'prix' => 'required',
            'nbrUnit' => 'required',
            'Montant' => 'required',
        ]);

        $data = [
            'id' => $request->id,
            'name' => $request->name,
            'city' => $request->city,
            'place' => $request->place,
            'prix' => $request->prix,
            'nbrUnit' => $request->nbrUnit,
            'Montant' => $request->Montant,
        ];

        // $stat = Stationnement::find($request->id);

        $html = View::make('ticket', [
            'data' => $data
        ])->render();
        

        $dompdf = new Dompdf();

        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        // return $dompdf->stream('document.pdf');
        $pdfData = $dompdf->output();
        
        return response()->json([
            'pdf' => base64_encode($pdfData)
        ]);
    }
}
