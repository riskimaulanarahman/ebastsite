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
Route::get('/', 'HomeController@index');
// Route::auth();
// Auth::routes();

// Route::group( ['prefix' => 'admin','as' => 'admin.','middleware' => ['auth']], function() {
Route::group( ['as' => 'pekerja.','middleware' => ['auth']], function() {

    Route::get('/', 'HomeController@index')->name('index');

    //referensi
    Route::get('/ref-agama','referensi\AgamaController@show')->name('refagama');
    Route::apiResource('/api/ref-agama','referensi\AgamaController');


    //master user
    Route::get('/master-user','masteruser\LoginUserController@show')->name('masteruser');

    //vendor page
    Route::get('/sqacdoc','vendors\SqacdocController@show')->name('masteruser');

    //API

    Route::apiResource('/api/master-user','masteruser\LoginUserController');
    Route::apiResource('/api/sqacdoc','vendors\SqacdocController');
    // Route::apiResource('/api/monitoring','kap\MonitoringController');

    //import excel
    Route::get('/siswa', 'SiswaController@index');
    Route::get('/siswa/export_excel', 'SiswaController@export_excel');
    Route::post('/siswa/import_excel', 'SiswaController@import_excel');
    
});

require __DIR__.'/auth.php';
