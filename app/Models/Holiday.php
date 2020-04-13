<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;
class Holiday extends Model
{

    use LaravelVueDatatableTrait;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $dataTableColumns = [
        'id' => [
            'searchable' => false,
        ],
        'department_id' => [
            'searchable' => true,
        ],
        'user_id' => [
            'searchable' => true,
        ],
        'title' => [
            'searchable' => true,
        ],
        'desc' => [
            'searchable' => true,
        ],
        'type' => [
            'searchable' => true,
        ],
        'start_date' => [
            'searchable' => true,
        ],
        'end_date' => [
            'searchable' => true,
        ],
    ];

    protected $dataTableRelationships = [
        "belongsTo" => [
            'department' => [
                "model" => 'App\Models\Department',
                'foreign_key' => 'department_id',
                'columns' => [
                    'name' => [
                        'searchable' => true,
                        'orderable' => true,
                    ],
                ],
            ],
        ],
        "belongsTo" => [
            'user' => [
                "model" => 'App\User',
                'foreign_key' => 'user_id',
                'columns' => [
                    'name' => [
                        'searchable' => true,
                        'orderable' => true,
                    ],
                ],
            ],
        ],
    ];

}
