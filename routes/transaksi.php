<?php

use App\Http\Controllers\TransaksiController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::get("/payment", [TransaksiController::class, "index"]);
    Route::post("/create-payment", [TransaksiController::class, "create"]);
    Route::delete("/delete-payment/{id}", [TransaksiController::class, "destroy"]);
});
