<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
	'prefix' => 'users'
], function () {
	Route::post('authenticate', 'AuthController@authenticate');
	Route::post('authenticate/refresh', 'AuthController@refresh');
	Route::post('forgot_password', 'ForgotPasswordController@forgot');
	Route::post('reset_password', 'ForgotPasswordController@reset');

	Route::group([
		'middleware' => ['auth:api']
	], function () {
		Route::post('logout', 'AuthController@logout');
	});
});
