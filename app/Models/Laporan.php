<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    protected $fillable = [
        "jumlah_produk",
        "transaksi_id",
        "produk_id",
        "user_id",
    ];
}
