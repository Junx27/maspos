<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {

        User::create([
            'name' => 'junx',
            'email' => 'junx@example.com',
            'password' => bcrypt('12345678'),
        ]);
    }
}
