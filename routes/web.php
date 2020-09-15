<?php

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
    return view('index');
});

/**
 * Below route is used to send the link to user to reset their password.
 */
Route::get('reset_password/{token}/{email}', 'ForgotPasswordController@resetPasswordForm')->name('password.reset');

Route::get('/{vue_capture?}', function () {
	return view('index');
   })->where('vue_capture', '[\/\w\.-]*');