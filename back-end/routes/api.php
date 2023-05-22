<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ParkingController;
use App\Http\Controllers\API\PdfController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\StationnementController;
use App\Http\Controllers\API\TarifParkingController;
use App\Http\Controllers\API\TypeTarifController;
use App\Http\Controllers\API\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('parkings', ParkingController::class)->middleware('auth:sanctum');
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');
Route::post('Places-Park', [ParkingController::class, 'getPlaceTable']);
Route::apiResource('type-tarifs', TypeTarifController::class)->middleware('auth:sanctum');
Route::apiResource('tarif-parkings', TarifParkingController::class)->middleware('auth:sanctum');
Route::apiResource('Stationnements', StationnementController::class)->middleware('auth:sanctum');

Route::get('getHtml', [PdfController::class, 'getHtml']);
Route::post('create-pdf', [PdfController::class, 'createPDF']);

// Register
Route::post('register', [AuthController::class, 'register']);
// Login
Route::post('login', [AuthController::class, 'login']);


Route::post('service', [ServiceController::class, 'getNbrStat']);
