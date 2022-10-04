<?php

namespace App\Http\Controllers\kap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Carbon;


use App\Monitorings;
use App\Equipments;


class MonitoringController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = Monitorings::all();

            return response()->json(['status' => "show", "message" => "Menampilkan Data" , 'data' => $data]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        $date1 = $request->bva_date;
        $date2 = $request->site_date;
        $date3 = $request->scm_date;
        $date4 = $request->ho_date;
        $date5 = $request->vendor_date;
        $date6 = $request->dh_date;
        $date7 = $request->last_update;

        for ($i=1; $i <= 7; $i++) { 
            ${"fixed".$i} = date('Y-m-d', strtotime(substr(${"date".$i},0,10)));
        }

        $requestData = $request->all();
        if($date1) {
            $requestData['bva_date'] = $fixed1;
        }
        if($date2) {
            $requestData['site_date'] = $fixed2;
        }
        if($date3) {
            $requestData['scm_date'] = $fixed3;
        }
        if($date4) {
            $requestData['ho_date'] = $fixed4;
        }
        if($date5) {
            $requestData['vendor_date'] = $fixed5;
        }
        if($date6) {
            $requestData['dh_date'] = $fixed6;
        }
        if($date7) {
            $requestData['last_update'] = $fixed7;
        }
        $requestData['createdby'] = $user->username;

        
        try {
            Monitorings::create($requestData);

            return response()->json(["status" => "success", "message" => "Berhasil Menambahkan Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('pages/kap/monitoring');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();

        $date1 = $request->bva_date;
        $date2 = $request->site_date;
        $date3 = $request->scm_date;
        $date4 = $request->ho_date;
        $date5 = $request->vendor_date;
        $date6 = $request->dh_date;
        $date7 = $request->last_update;

        for ($i=1; $i <= 7; $i++) { 
            ${"fixed".$i} = date('Y-m-d', strtotime(substr(${"date".$i},0,10)));
        }

        $requestData = $request->all();
        if($date1) {
            $requestData['bva_date'] = $fixed1;
        }
        if($date2) {
            $requestData['site_date'] = $fixed2;
        }
        if($date3) {
            $requestData['scm_date'] = $fixed3;
        }
        if($date4) {
            $requestData['ho_date'] = $fixed4;
        }
        if($date5) {
            $requestData['vendor_date'] = $fixed5;
        }
        if($date6) {
            $requestData['dh_date'] = $fixed6;
        }
        if($date7) {
            $requestData['last_update'] = $fixed7;
        }
        $requestData['updatedby'] = $user->username;
        $requestData['last_update'] = Carbon::now();

        
        try {
            $data = Monitorings::findOrFail($id);
            $data->update($requestData);

            return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = Monitorings::where('id',$id)->delete();

            return response()->json(["status" => "success", "message" => "Berhasil Hapus Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    public function getkap(Request $request)
    {
        $data = Equipments::where('no_kap',$request->nokap)->get();

        return response()->json(['status' => "show", "message" => "Menampilkan Detail" , 'data' => $data]);
        
    }
}
