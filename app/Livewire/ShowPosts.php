<?php

namespace App\Livewire;

use App\Models\City;
use App\Models\Country;
use Livewire\Component;

class ShowPosts extends Component
{

    public $countries;
    public $cities;

    public $selectedcountry;
    

    public function mount()
    {
        $this->countries = Country::all();
        
        //$this->cities=[];
    }

    public function updatedSelectedCountry()
    {
       // dd($this->selectedcountry);
      $this->cities = City::where('country_id', $this->selectedcountry)->get();
    }
    public function render()
    {
        return view('livewire.show-posts');
    }


 

    // public function getCities($country)
    // {
    //    $cities = City::where('country_id', $country)->pluck('name_en');
    //     $cities->toArray();
    //     dd($cities);
   
    // }
}
