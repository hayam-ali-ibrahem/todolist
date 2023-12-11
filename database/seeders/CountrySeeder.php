<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $countries=[
        [
            'name_ar'=>'مصر',
            'name_en'=>'Egypt'
        ],

        [
            'name_ar'=>'فلسطين',
            'name_en'=>'Plastine'
        ],
    ];


    foreach ($countries as $countryData) {
        Country::create([
            'name_ar' => $countryData['name_ar'],
            'name_en' => $countryData['name_en'],
            // Add other attributes as per your Country model
        ]);
    }

    }
}
