<?php

namespace App\Http\Controllers\vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Sqac;
use App\Sqacapprover;
use App\Sqacattachment;
use App\Approver;
use App\User;
use DB;
use Auth;
use App\Http\Controllers\GenerateMailController;



class SqacdocController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $reviewer;
    private $reviewername;
    private $spv;
    private $spvname;

    public function __construct() {
        $user1 = User::where('role','reviewer')->first();
        $user2 = User::where('role','spv')->first();
        $this->reviewer = $user1->email;
        $this->reviewername = $user1->nama_lengkap;
        $this->spv = $user2->email;
        $this->spvname = $user2->nama_lengkap;
    }

    public function index()
    {
        try {
            $user = Auth::User();

            if ($user->role == 'vendor') {
                $data = Sqac::where('id_users',$user->id)->get();
            } else if($user->role == 'reviewer') {
                $data = Sqac::whereIn('requeststatus',[1,4,5])->get();
            } else if($user->role == 'spv') {
                $data = Sqac::whereIn('requeststatus',[2,4,5])->get();
            }
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
        $user = Auth::User();

        $requestData = $request->all();

        $date = $request->submitted_date;
        $fixed = date('Y-m-d', strtotime(substr($date,0,10)));

        if($date) {
            $requestData['submitted_date'] = $fixed;
        }
        $requestData['id_users'] = $user->id;

        try {
            $sqac = Sqac::create($requestData);

            $getappr = Approver::all();
            foreach($getappr as $datas) {
                $sqacappr['sqac_id'] = $sqac->id;
                $sqacappr['approver_id'] = $datas->id;
                $sqacappr['approverstatus'] = 0;

                $addappr = Sqacapprover::create($sqacappr);

            }

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
        return view('pages/vendors/sqacdoc');
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
        $user = Auth::User();  

        $data = Sqac::findOrFail($id);

        //if reject
        $creator = User::where('id',$data->id_users)->first();
        //end if
        
        try {
            if($request->approver == 'reviewer') {

                $module = 'SQAC already Reviewed';
                $id_users = $user->id;

                

                $sqacattachment = Sqacattachment::where('sqac_id',$id)
                ->where('status',0)
                ->count();

                $datappr1 = Sqacapprover::where('sqac_id',$id)
                    ->where('approver_id',1)
                    ->first();

                $creject = Sqacattachment::where('sqac_id',$id)
                ->where('status',2)
                ->count();
                
                if($sqacattachment > 0) {
                    $status = 'error';
                    $message = 'anda perlu melakukan persetujuan pada '.$sqacattachment.' attachment';
                } else {
                    
                    if($creject == 0) {
                        $data->requeststatus = 2;
                        $datappr1->approverstatus = 1;
                        $nama = $this->spvname;

                        $email = $this->spv;
                        $text = 'Pengajuan SQAC Doc. Selesai Di review';

                    } else if($creject > 0 && $creject < 3) {
                        $data->requeststatus = 3;
                        $datappr1->approverstatus = 3;
                        $nama = $creator->nama_lengkap;

                        
                        $email = $creator->email;
                        $text = 'Pengajuan SQAC Doc. Anda di Rework by.Reviewer';
                    } else if($creject == 3) {
                        $data->requeststatus = 5;
                        $datappr1->approverstatus = 2;
                        $nama = $creator->nama_lengkap;

                        $email = $creator->email;
                        $text = 'Pengajuan SQAC Doc. Anda di Rejected by.Reviewer';

                    }
                    $status = 'success';
                    $message = 'Berhasil Ubah Data';

                    $mail = new GenerateMailController;
                    $mail->generateMail($module,$id_users,$email,$nama,$text);
                }
                
                
                $data->save();
                $datappr1->save();

                return response()->json(["status" => $status, "message" => $message]);
            } else if($request->approver == 'spv') {

                $module = 'SQAC Status';
                $id_users = $user->id;
                $nama = $creator->nama_lengkap;

                $sqacattachment = Sqacattachment::where('sqac_id',$id)
                ->where('status_spv',0)
                ->count();

                $datappr2 = Sqacapprover::where('sqac_id',$id)
                ->where('approver_id',2)
                ->first();

                $creject = Sqacattachment::where('sqac_id',$id)
                ->where('status_spv',2)
                ->count();

                if($sqacattachment > 0) {
                    $status = 'error';
                    $message = 'anda perlu melakukan persetujuan pada '.$sqacattachment.' attachment';
                } else {
                    if($creject == 0) {
                        $data->requeststatus = 4;
                        $datappr2->approverstatus = 1;

                        $email = $creator->email;
                        $text = 'Pengajuan SQAC Doc. Anda Telah di Approved';

                    } else if($creject > 0 && $creject < 3) {
                        $data->requeststatus = 3;
                        $datappr2->approverstatus = 3;

                        $email = $creator->email;
                        $text = 'Pengajuan SQAC Doc. Anda di Rework by.SPV';

                    } else if($creject == 3) {
                        $data->requeststatus = 5;
                        $datappr2->approverstatus = 2;

                        $email = $creator->email;
                        $text = 'Pengajuan SQAC Doc. Anda di Tolak by.SPV';
                    }
                    $status = 'success';
                    $message = 'Berhasil Ubah Data';

                    $mail = new GenerateMailController;
                    $mail->generateMail($module,$id_users,$email,$nama,$text);
                }
                $data->save();
                $datappr2->save();

                

                return response()->json(["status" => $status, "message" => $message]);

            } else if ($request->approver == 'vendor') {

                $id_users = $user->id;
                $email = $this->reviewer;
                $nama = $this->reviewername;
                $namacreator = $user->nama_lengkap;

                $requestData = $request->all();

                if($requestData['requeststatus'] == 1) {
                
                    $module = "New Submit SQAC. Request";

                    $checktatt = Sqacattachment::where('sqac_id',$data->id)
                    ->count();
                    if($checktatt < 3) {
                        return response()->json(["status" => "error", "message" => "Attachment Belum Lengkap"]);
                    } else {
                        $data->update($requestData);
                        $text = 'Vendor Atas Nama '.$namacreator.' Telah melakukan pengajuan, dan membutuhkan approval anda';
                    }
                } else if($requestData['requeststatus'] == 3) {

                    $module = "New Re-Submit SQAC. Request";

                    $reworkatt = Sqacattachment::where('sqac_id',$data->id)
                    ->where('status',2)
                    ->orWhere('status_spv',2)
                    ->get();
                    foreach($reworkatt as $valatt) {
                        $valatt->status = 0;
                        $valatt->status_spv = 0;
                        $valatt->save();
                    }
                    $reworkappr = Sqacapprover::where('sqac_id',$data->id)->get();
                    foreach($reworkappr as $valappr) {
                        $valappr->approverstatus = 0;
                        $valappr->save();
                    }

                    $data->requeststatus = 1;
                    $data->save();

                    $text = 'Vendor Atas Nama '.$namacreator.' Telah melakukan pengajuan';

                    
                }
                
                $mail = new GenerateMailController;
                $mail->generateMail($module,$id_users,$email,$nama,$text);


                return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);
            } else {
                $requestData = $request->all();

                $date = $request->submitted_date;
                $fixed = date('Y-m-d', strtotime(substr($date,0,10)));
        
                if($date) {
                    $requestData['submitted_date'] = $fixed;
                }
        
                $data->update($requestData);

                return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);

            }
                


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
            $data = Sqac::where('id',$id)->delete();

            return response()->json(["status" => "success", "message" => "Berhasil Hapus Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    public function getattachment(Request $request)
    {
        $data = Sqacattachment::where('sqac_id',$request->id)->get();

        return response()->json(['status' => "show", "message" => "Menampilkan Detail" , 'data' => $data]);
        
    }

    public function getapproverlist(Request $request)
    {
        $data = DB::table('vwapproverlist')->where('sqac_id',$request->id)->get();

        return response()->json(['status' => "show", "message" => "Menampilkan Detail" , 'data' => $data]);
        
    }

    public function csattachment(Request $request,$id) 
    {
        try {
            $data = Sqacattachment::findOrFail($id);
            $data->update($request->all());

            return response()->json(["status" => "success", "message" => "Berhasil Ubah Status Attachment"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }
}
