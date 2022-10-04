<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Hash;
use App\Jabatan;
use App\SuratMasuk;
use App\SuratKeluar;
use App\Disposisi;
use App\Karyawan;
use Illuminate\Support\Carbon;


class ListController extends Controller
{

    public function listKegiatan() {
        return DB::table('kegiatans')->select('id','nama_kegiatan')->get();
    }

    public function listRT() {
        return DB::table('rt')->select('id','nomor_rt')->get();
    }

}
