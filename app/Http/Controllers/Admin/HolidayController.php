<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Holiday;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;
use App\User;
class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');
        
        $query = Holiday::eloquentQuery(
            $sortBy, 
            $orderBy, 
            $searchValue, [
            'name',
        ]);

        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }

    public function create()
    {
        $columns = [
            'department_id'=>['type'=>'select','options'=>User::all()],
            'user_id'=>['type'=>'select','options'=>User::all()],
            'title'=>['type'=>'text'],
            'desc'=>['type'=>'textarea'],
            'type'=>['type'=>'select','options'=>User::all()],
            'start_date'=>['type'=>'date'],
            'end_date'=>['type'=>'date'],
        ];
        return response($columns);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'date' => 'required',
        ])->validate();

        if ($holiday = Holiday::create([
            'date' => date('Y-m-d', strtotime($request->date)),
        ])) {
            return response()->json([
                'holiday' => $holiday
            ]);
        }
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
        Validator::make($request->all(), [
            'date' => 'required',
        ])->validate();

        $holiday = Holiday::find($id);
        $holiday->date = date('Y-m-d', strtotime($request->date));

        if ($holiday->save()) {
            return response()->json([
                'holiday' => $holiday
            ]);
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
        $holiday = Holiday::find($id);
        if ($holiday->delete()) {
            return response()->json([
                'success' => true
            ]);
        }
    }
}
