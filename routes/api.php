<?php

use Illuminate\Http\Request;

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

Route::post('/getsqacattachment', 'vendors\SqacdocController@getattachment');
Route::post('/getsqacapproverlist', 'vendors\SqacdocController@getapproverlist');
Route::put('/csattachment/{id}', 'vendors\SqacdocController@csattachment');

Route::post('/upload-berkas/{id}/{module}','BerkasController@store')->name('uploadberkas');