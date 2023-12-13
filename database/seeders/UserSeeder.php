<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
      
    public function run(): void
    {

        for ($i = 0; $i < 10; $i++) {
            \App\Models\User::insert([
                'name' => Str::random(10),
                'email' => Str::random(10).'@gmail.com',
                'password' => Hash::make('password'),
                'role' => 1
            ]);
        }
    }
}
