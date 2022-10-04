<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sqacattachment extends Model
{
    use HasFactory;

    protected $table = "tbl_sqacattachment";
    protected $guarded = ['id'];

}
