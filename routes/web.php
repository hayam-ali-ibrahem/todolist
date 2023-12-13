<?php

use App\Livewire\User;
use App\Livewire\HomePage;
use App\Livewire\TodoList;
use App\Livewire\ShowPosts;
use App\Livewire\UserDataTable;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Route::get('/todolist', TodoList::class);
Route::get('/', HomePage::class);
Route::get('/contact-us', ShowPosts::class);
Route::get('/todo-list', TodoList::class);
Route::get('/users', UserDataTable::class);