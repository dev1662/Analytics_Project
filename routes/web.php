<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleSocialiteController;
use Spatie\Analytics\Analytics ;
use Spatie\Analytics\Period ;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   return view('welcome');
});


Route::get('auth/google', [GoogleSocialiteController::class, 'redirectToGoogle']);
Route::get('callback/google', [GoogleSocialiteController::class, 'handleCallback']);
Route::post('callback/propertyDetails', [GoogleSocialiteController::class, 'getReport']);
Route::post('callback/ajaxRequest', [GoogleSocialiteController::class,'ajaxRequestPost'])->name('ajaxRequest.post');
Route::post('callback/profiles', [GoogleSocialiteController::class,'profiles'])->name('ajaxRequest2.post');


Route::get('/login', function(){
    return view('login');
});
