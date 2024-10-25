<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    protected $fillable = [
        "gambar_produk",
        "nama_produk",
        "harga_produk",
        "kategori_id",
        "user_id",
    ];
}
