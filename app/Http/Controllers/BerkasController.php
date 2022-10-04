<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sqac;
use App\Sqacattachment;
use DB;
use Auth;

class BerkasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id, $module)
    {
        try {

            $file = $request->file('file_upload'); // name value
            $nama_file = $module."_".time()."_".$file->getClientOriginalName(); //  nama file
            $tujuan_upload = 'upload'; // tujuan upload
            $file->move($tujuan_upload,$nama_file); // memindahkan data ke folder upload
            
            $find = Sqacattachment::where('sqac_id',$id)->where('typefile',$module)->get();
            
            if(count($find)==0) {
                $datareq['sqac_id'] = $id;
                $datareq['namefile'] = $nama_file;
                $datareq['typefile'] = $module;
                $datareq['status'] = 0;
                $data = Sqacattachment::create($datareq);
                
                $result = 'berhasil tambah '.$module;
            } else {
                $findberkas = Sqacattachment::where('sqac_id',$id)->where('typefile',$module)->first();
                if($findberkas->status !== 2) {
                    $findberkas->update([
                        'namefile' => $nama_file,
                    ]);
                } else {
                    $findberkas->update([
                        'namefile' => $nama_file,
                        'status' => 0,
                        'remarks' => null
                    ]);
                }
                
                $result = 'berhasil update '.$module;
                
            }

            return response()->json(["status" => "success", "message" => $result]);
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
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id, $module)
    {
        if($module == 'onair') { // module
            $file = $request->file('file1'); // name value
            $nama_file = $module."_".time()."_".$file->getClientOriginalName(); //  nama file
            $tujuan_upload = 'upload'; // tujuan upload
            $file->move($tujuan_upload,$nama_file); // memindahkan data ke folder upload
            
            $datareq['sqac_id'] = $id;
            $datareq['namefile'] = $nama_file;
            $datareq['sqac_id'] = $id;
            $datareq['sqac_id'] = $id;
            $datareq['sqac_id'] = $id;
            $data = Sqac::create($datareq);
            $attachment = DB::table('tbl_sqacattachment')->findOrFail($id);
            
            $data->update([
                'file1' => $nama_file,
                'status1' => 0 //status draft
            ]); // update column foto_cust
        } else if($module == 'lv') {
            $file = $request->file('file2');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Sqac::findOrFail($id);
            $attachment = DB::table('tbl_sqacattachment')->findOrFail($id);
            
            $data->update([
                'file2' => $nama_file,
                'status2' => 0 //status draft
            ]);
        } else if($module == 'kpi4g') {
            $file = $request->file('file3');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Sqac::findOrFail($id);
            $attachment = DB::table('tbl_sqacattachment')->findOrFail($id);
            
            $data->update([
                'file3' => $nama_file,
                'status3' => 0 //status draft
            ]);
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
        //
    }
}
