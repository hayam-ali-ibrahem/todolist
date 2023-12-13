<?php

namespace App\Livewire;

use App\Models\User;
use Livewire\Attributes\Url;
use Livewire\Component;
use Livewire\WithPagination;

class UserDataTable extends Component
{

   use WithPagination;
    
     
        public $perPage = 5;
        #[Url]
        public $search = '';
        public $role='';
        public $userID;
        public $sortBy='created_at';
        public $sortDir='DESC';
        public function render()
        {
            // Return the view with the assigned data
            return view('livewire.user-data-table', [
                'users' =>User::search($this->search)->
                when($this->role !=='',function($query){
                  $query->where('role',$this->role);
                })

                
                ->paginate($this->perPage)
            ]);
        }

        public function delete($userID){
       
           User::find($userID)->delete();
           }


    
        public function setSortBy($sortByField){
            if($this->sortBy=== $sortByField){
                $this->sortDir = ($this->sortDir == "ASC") ? 'DESC' : "ASC";
              return;
            }
            $this->sortBy=== $sortByField;
            $this->sortDir=='DESC';
        }
}
