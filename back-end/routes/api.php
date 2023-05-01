<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ParkingController;
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

Route::apiResource('parkings', ParkingController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('type-tarifs', TypeTarifController::class);
Route::apiResource('tarif-parkings', TarifParkingController::class);
Route::apiResource('Stationnements', StationnementController::class);
