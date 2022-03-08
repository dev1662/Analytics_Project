<?php

use App\Http\Controllers\PriorityController;
use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

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
    return view('app');
});


Route::get('{any}', function () {
    return view('app');
 })->where('any', '.*');


 Route::get('auth/google', [SocialiteController::class, 'social']);
Route::get('callback/google', [SocialiteController::class, 'handleCallback']);


