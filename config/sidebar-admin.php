<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Most templating systems load templates from disk. Here you may specify
    | an array of paths that should be checked for your views. Of course
    | the usual Laravel view path has already been registered for you.
    |
    */
  'menu' => [
        [
            'icon' => 'fa fa-home',
            'title' => 'Dashboard',
            'url' => '/',
            'route-name' => 'pekerja.index'
        ],
        // [
        //         'icon' => 'fa fa-layer-group',
        //         'title' => 'Menu 1',
        //         'url' => 'javascript:;',
        //         'caret' => true,
        //         'sub_menu' => [
        //             [
        //                 'url' => '/submenu1',
        //                 'title' => 'sub menu 1',
        //                 'route-name' => 'pekerja.submenu1'
        //             ],
        //         ]
        // ],[
        //     'icon' => 'fa fa-folder',
        //     'title' => 'Table Refrensi',
        //     'url' => 'javascript:;',
        //     'caret' => true,
        //     'sub_menu' => [
        //         [
        //             'url' => '/ref-agama',
        //             'title' => 'Agama',
        //             'route-name' => 'pekerja.refagama'
        //         ],
        //     ]
        // ],
        [
            'icon' => 'fa fa-users',
            'title' => 'Kelola User',
            'url' => '/master-user',
            'route-name' => 'admin.masteruser'
        ],
        // [
        //     'icon' => 'fa fa-question-circle',
        //     'title' => 'Bantuan',
        //     'url' => '/bantuan',
        // ]
    ]
];
