<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
      
    public function run(): void
    {

        $cities = [
            [
               'name_ar'=>'القاهره',
               'name_en'=>'Cairo',
               'country_id'=>1
           ],
   
           [
               'name_ar'=>'الاسكندريه',
               'name_en'=>'Alex',
               'country_id'=>1
           ],

          
   
           [
               'name_ar'=>'اسوان',
               'name_en'=>'Aswan',
               'country_id'=>1
           ],


           [
            'name_ar'=>'غزه',
            'name_en'=>'Gaza',
            'country_id'=>2
        ],

        [
            'name_ar'=>'القدس',
            'name_en'=>'القدس الشريف',
            'country_id'=>2
        ],

       

      
         ];
        foreach ($cities as $cityData) {
            City::create([
                'name_ar' => $cityData['name_ar'],
                'name_en' => $cityData['name_en'],
              
            ]);
        }
    }
}
