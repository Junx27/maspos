<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function () {
    Route::get("/product", [ProductController::class, "index"]);
    Route::get("/product/{id}", [ProductController::class, "show"]);
    Route::post("/create-product", [ProductController::class, "create"]);
    Route::delete("/delete-product/{id}", [ProductController::class, "destroy"]);
    Route::put("/update-product/{id}", [ProductController::class, "update"]);
});
