<?php

namespace App\Livewire;

use App\Models\City;
use App\Models\Contact;
use App\Models\Country;
use Livewire\Component;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Validate;

class ShowPosts extends Component
{

    public $countries;
    public $cities;

    public $selectedcountry;
    #[Validate('required|min:3')]
    public $username;
    #[Validate('required|min:3')]
    public $useremail;
   #[Validate('required')]
    public $country;
   #[Validate('required')]
     public $city;
    #[Validate('required')]
    public $message_address;
    #[Validate('required|min:3')]
    public $message;

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

    public function submit(){
      $validated = $this->validate();
      Contact::create($validated);
      
     $this->reset();
 
      session()->flash('success','Send Apply Successfully');

    }
    public function render()
    {
        return view('livewire.show-posts');
    }


    public function rules()
    {
        return [
            'country' => Rule::exists('countries', 'id'),
            'city' => Rule::exists('cities', 'id'),
        ];
    }

    // public function getCities($country)
    // {
    //    $cities = City::where('country_id', $country)->pluck('name_en');
    //     $cities->toArray();
    //     dd($cities);
   
    // }
}
