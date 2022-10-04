<?php

namespace App\Http\Controllers\kap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Carbon;

use App\Equipments;
use App\Monitorings;


class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        try {
            $data = Equipments::all();

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

        $date1 = $request->period_start;
        $date2 = $request->period_end;

        for ($i=1; $i <= 2; $i++) { 
            ${"fixed".$i} = date('Y-m-d', strtotime(substr(${"date".$i},0,10)));
        }

        $requestData = $request->all();
        if($date1) {
            $requestData['period_start'] = $fixed1;
        }
        if($date2) {
            $requestData['period_end'] = $fixed2;
        }
        $requestData['createdby'] = $user->username;
       
        try {
            Equipments::create($requestData);

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
        return view('pages/kap/equipment');
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

        $date1 = $request->period_start;
        $date2 = $request->period_end;

        for ($i=1; $i <= 2; $i++) { 
            ${"fixed".$i} = date('Y-m-d', strtotime(substr(${"date".$i},0,10)));
        }

        $requestData = $request->all();
        if($date1) {
            $requestData['period_start'] = $fixed1;
        }
        if($date2) {
            $requestData['period_end'] = $fixed2;
        }
        $requestData['updatedby'] = $user->username;

        try {
            $data = Equipments::findOrFail($id);
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
            $data = Equipments::where('id',$id)->delete();

            return response()->json(["status" => "success", "message" => "Berhasil Hapus Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    public function getkapmonitoring(Request $request)
    {
        $data = Monitorings::where('no_kap',$request->nokap)->get();

        return response()->json(['status' => "show", "message" => "Menampilkan Detail" , 'data' => $data]);
        
    }

    public function countexpiredequipment(Request $request)
    {
        try {
            $param = $request->param;
            $category = $request->category;

            $lastmonth = Carbon::now()->subMonth();
            $thismonth = Carbon::now();

            if($lastmonth->year !== $thismonth->year) {
                $monthyear = Carbon::now()->format('Y')-1;
            } else {
                $monthyear = Carbon::now()->format('Y');
            }

            if($param == 1) {
                $data = Equipments::select('period_end','no_kap')
                ->whereMonth('period_end',Carbon::now()->subMonth()->format('m'))
                ->whereYear('period_end',$monthyear)
                // ->whereYear('period_end',Carbon::now()->format('Y')-1)
                ->where('category',$category)
                ->groupBy('no_kap')
                ->get();
            } else if($param == 2) {
                $data = Equipments::whereMonth('period_end',Carbon::now())
                ->where('category',$category)
                ->whereYear('period_end',Carbon::now()->format('Y'))
                ->groupBy('no_kap')
                ->get();
            } else if($param == 3){

                $lastmonthadd = Carbon::now()->addMonth();
                $thismonthadd = Carbon::now();

                if($lastmonthadd->year !== $thismonthadd->year) {
                    $monthyearadd = Carbon::now()->format('Y')+1;
                } else {
                    $monthyearadd = Carbon::now()->format('Y');
                }

                $data = Equipments::select('*')
                ->whereMonth('period_end',Carbon::now()->addMonth()->format('m'))
                ->whereYear('period_end',Carbon::now()->format('Y'))
                ->whereYear('period_end',$monthyearadd)
                ->where('category',$category)
                ->groupBy('no_kap')
                ->get();
            }
            
            return response()->json(['status' => "success", "message" => "Menampilkan Count" , 'data' => $data]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
        
        
    }

    public function expiredsite(Request $request)
    {
        try {
            $param = $request->param;
            // $category = $request->category;

            $lastmonth = Carbon::now()->subMonth();
            $thismonth = Carbon::now();

            if($lastmonth->year !== $thismonth->year) {
                $monthyear = Carbon::now()->format('Y')-1;
            } else {
                $monthyear = Carbon::now()->format('Y');
            }

            if($param == 1) {
                $data = Equipments::selectRaw('*, case when no_kap is not null then 1 else 0 end as jml')
                ->whereMonth('period_end',Carbon::now()->subMonth()->format('m'))
                ->whereYear('period_end',$monthyear)
                // ->whereYear('period_end',Carbon::now()->format('Y')-1)
                // ->where('category',$category)
                ->groupBy('no_kap')
                ->get();
            } else if($param == 2) {
                $data = Equipments::selectRaw('*, case when no_kap is not null then 1 else 0 end as jml')
                ->whereMonth('period_end',Carbon::now())
                // ->where('category',$category)
                ->whereYear('period_end',Carbon::now()->format('Y'))
                ->groupBy('no_kap')
                ->get();
            } else if($param == 3){

                $lastmonthadd = Carbon::now()->addMonth();
                $thismonthadd = Carbon::now();

                if($lastmonthadd->year !== $thismonthadd->year) {
                    $monthyearadd = Carbon::now()->format('Y')+1;
                } else {
                    $monthyearadd = Carbon::now()->format('Y');
                }

                $data = Equipments::selectRaw('*, case when no_kap is not null then 1 else 0 end as jml')
                ->whereMonth('period_end',Carbon::now()->addMonth()->format('m'))
                ->whereYear('period_end',Carbon::now()->format('Y'))
                ->whereYear('period_end',$monthyearadd)
                // ->where('category',$category)
                ->groupBy('no_kap')
                ->get();
            }
            
            return response()->json($data);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

}
