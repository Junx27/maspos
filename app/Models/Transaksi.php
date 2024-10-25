<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    protected $fillable = [
        "total_pembelian",
        "total_pembayaran",
        "total_kembalian",
        "user_id",
    ];
}
