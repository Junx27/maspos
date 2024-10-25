<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $data = Produk::all();
        return response()->json($data);
    }
    public function show(String $id)
    {
        $data = Produk::findOrFail($id);
        return response()->json($data);
    }
    public function create(Request $request)
    {
        $validated = $request->validate([
            "gambar_produk" => "required",
            "nama_produk" => "required",
            "harga_produk" => "required",
            "kategori_id" => "required",
            "user_id" => "required",
        ]);
        if ($request->hasFile('gambar_produk')) {

            $validated['gambar_produk'] = $request->file('gambar_produk')->store('gambar_produk', 'public');
        }
        Produk::create($validated);
        return Inertia::location("/dashboard");
    }
    public function update(Request $request, String $id)
    {
        $data = Produk::findOrFail($id);
        $validated = $request->validate([
            "gambar_produk" => "required",
            "nama_produk" => "required",
            "harga_produk" => "required",
            "kategori_id" => "required",
        ]);
        if ($request->hasFile('gambar_produk')) {
            if ($data->gambar_produk) {
                Storage::disk("public")->delete($data->gambar_produk);
            }
            $validated['gambar_produk'] = $request->file('gambar_produk')->store('gambar_produk', 'public');
        }
        $data->update($validated);
        return Inertia::location("/dashboard");
    }
    public function destroy(String $id)
    {
        $data = Produk::findOrFail($id);
        if ($data->gambar_produk) {
            Storage::disk("public")->delete($data->gambar_produk);
        }
        $data->delete();
        return Inertia::location("/dashboard");
    }
}
