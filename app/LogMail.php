<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogMail extends Model
{
    protected $table = "log_sendmail";

    protected $guarded = ['id_sendmail'];

    protected $primaryKey = 'id_sendmail';
}
