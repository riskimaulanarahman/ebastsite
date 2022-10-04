<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($nama,$text,$module)
    {
        //
        $this->nama = $nama;
        $this->text = $text;
        $this->module = $module;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.name');
        return $this->from('admiskripsi1@gmail.com')
            ->subject($this->module.' '.date("Y-m-d H:i:s"))
            ->view('email')
            ->with([
                'nama' => $this->nama,
                'text' => $this->text,
                'module' => $this->module,
            ]);
    }
}
