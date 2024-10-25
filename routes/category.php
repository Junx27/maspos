<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function () {
    Route::post("/create-category", [CategoryController::class, "create"]);
    Route::delete("/delete-category/{id}", [CategoryController::class, "destroy"]);
    Route::get("/category", [CategoryController::class, "index"]);
});
