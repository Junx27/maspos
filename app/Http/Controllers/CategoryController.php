<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    public function index()
    {
        $data = Kategori::all();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $validated = $request->validate([
            "nama_kategori" => "required",
            "user_id" => "required",
        ]);
        Kategori::create($validated);
        return Inertia::location("/dashboard");
    }
    public function destroy(String $id)
    {
        $data = Kategori::findOrFail($id);
        $data->delete();
        return Inertia::location("/dashboard");
    }
}
