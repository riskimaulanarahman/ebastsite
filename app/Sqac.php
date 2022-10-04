<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sqac extends Model
{
    use HasFactory;

    protected $table = "tbl_sqac";
    protected $guarded = ['id'];

}
