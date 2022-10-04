<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Sqac;
use DB;
use Illuminate\Support\Carbon;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){

        $user = Auth::User();
                
        if(Auth::user()->role == 'admin') {
            
            return view('dashboard-admin');

        } elseif(Auth::user()->role == 'vendor') {

            $data = DB::table('waitingvendor')->first();
                return view('dashboard-vendor')->with(compact(
                    'data'
            ));

        } elseif(Auth::user()->role == 'reviewer' || Auth::user()->role == 'spv') {

            if($user->role == 'reviewer') {
                $data = DB::table('waitingreviewer')->first();
                return view('dashboard-approver')->with(compact(
                    'data'
                ));
            } else if($user->role == 'spv') {
                $data = DB::table('waitingspv')->first();
                return view('dashboard-approver')->with(compact(
                    'data'
                ));
            }


        } 

    }
}
