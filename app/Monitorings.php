<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monitorings extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    // public function users()
    // {
    //     return $this->belongsTo('App\User','id_users','id');
    // }
    
    // public function kegiatans()
    // {
    //     return $this->belongsTo('App\Kegiatan','id_kegiatan','id');
    // }
}
