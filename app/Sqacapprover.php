<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sqacapprover extends Model
{
    use HasFactory;

    protected $table = "tbl_sqacapprover";
    protected $guarded = ['id'];

}
