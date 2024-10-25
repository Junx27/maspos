<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    public function index()
    {
        $data = Transaksi::all();
        return response()->json($data);
    }
    public function create(Request $request)
    {
        $validated = $request->validate([
            "total_pembelian" => "required|numeric",
            "total_pembayaran" => "required|numeric",
            "total_kembalian" => "required|numeric",
            "user_id" => "required|exists:users,id",
            "cart" => "required|array",
            "cart.*.id" => "required|exists:produks,id",
            "cart.*.qty" => "required|integer|min:1",
        ]);

        $transaksi = Transaksi::create($validated);

        foreach ($validated['cart'] as $item) {
            Laporan::create([
                'jumlah_produk' => $item['qty'],
                'transaksi_id' => $transaksi->id,
                'produk_id' => $item['id'],
                'user_id' => $validated['user_id'],
            ]);
        }
        return back();
    }
    public function destroy(String $id)
    {
        $data = Transaksi::findOrFail($id);
        $data->delete();
        return Inertia::location("/dashboard");
    }
}
