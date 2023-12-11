<?php

namespace App\Livewire;

use App\Models\Todo;
use Livewire\Attributes\Url;
use Livewire\Component;
use Livewire\WithPagination;
use Livewire\Attributes\Rule;
use Livewire\WithFileUploads;

class TodoList extends Component
{
   use WithPagination;
   use WithFileUploads;
    #[Rule('required|min:3')]
    public $name;
    #[Rule('required|image')]
    public $image;
    #[Url] 
    public $search = '';
    public $todoID ;
    public $editingTodoID ;
    #[Rule('required|min:3')]
    public $editingTodoName ;

     
    public function create(){
     $validated=$this->validateOnly('name');
     $todo=Todo::create($validated);
     if ($this->image) {
        $todo->addMedia($this->image->getRealPath())
        ->toMediaCollection('image');
       
    }
     $this->reset('name');
     session()->flash('success','Created');
    }

    public function delete($todoID){
       
        Todo::find($todoID)->delete();
       }

       public function toggle($todoID){
       
        $todo=Todo::find($todoID);
        $todo->complated=!$todo->complated;
        $todo->save();
       }


       public function edite($todoID){
       
        $this->editingTodoID=$todoID;
        $this->editingTodoName=Todo::find($todoID)->name;
       } 

       public function cancelEdite(){
        $this->reset('editingTodoID',
       'editingTodoName');
       }

       public function update(){
       $this->validateOnly('editingTodoName');
       Todo::find($this->editingTodoID)->update(
        [
            'name' =>$this->editingTodoName
        ]
       );
         $this->cancelEdite();
       }


    public function render()
    {
        return view('livewire.todo-list',[
            'todes'=>Todo::where('name', 'like', '%' . $this->search . '%')->latest()->paginate(3)
        ]);
    }
}
