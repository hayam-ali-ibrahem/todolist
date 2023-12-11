<div>
@include('livewire.includes.nav')
@include('livewire.includes.create-form-todo-list')
@include('livewire.includes.search-box') 
        <div id="todos-list">
           @foreach($todes as $todo)
           @include('livewire.includes.todo-card-list')
           @endforeach

           <div class="my-2">
               {{$todes->links()}}
            </div>
        </div>
</div>
