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

Route::group(['prefix' => 'restaurants'], function() {
    Route::get('/getRestaurants', 'RestaurantsController@getRestaurants');
    Route::post('/SaveRestaurant', 'RestaurantsController@SaveRestaurant');
    Route::get('/getCities', 'RestaurantsController@getCities');
    Route::delete('/deleteRestaurant/{id}', 'RestaurantsController@deleteRestaurant');
    Route::post('/EditRestaurant', 'RestaurantsController@EditRestaurant');

});

Route::group(['prefix' => 'reservas'], function() {
    Route::get('/getReservas', 'RestaurantsController@getReservas');
    Route::post('/SaveRestaurant', 'RestaurantsController@SaveRestaurant');
    // Route::get('/getCities', 'RestaurantsController@getCities');
    Route::delete('/deleteReservas/{id}', 'RestaurantsController@deleteReservas');
    Route::post('/EditReservas', 'RestaurantsController@EditReservas');

});
