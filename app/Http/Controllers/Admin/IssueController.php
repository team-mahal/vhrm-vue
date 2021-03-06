<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Issue;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class IssueController extends Controller
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
        
        $query = Issue::eloquentQuery(
            $sortBy, 
            $orderBy, 
            $searchValue, [
                'project',
                'client',
                'department',
                'issue_type',
                'user',
                'status',
            ]
        );

        $data = $query->paginate($length);
        return new DataTableCollectionResource($data);
    }

    public function create()
    {
        $issue=new Issue();
        return response($issue->getTableColumns());
    }

    public function query($query='')
    {
        $clients = Issue::where('title','like','%'.$query.'%')->get();
        return $clients;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreIssueRequest $request)
    {
        if(isset($request->value)){
            $client_id=$request->value['id'];
        }else{
            $client_id=$request->project['client_id'];
        }

        $issue = Issue::create([
            'title' => $request->title,
            'client_id' => $client_id,
            'project_id' => $request->project['id'],
            'desc' => $request->desc,
            'issue_type_id' => $request->issue_type_id,
            'status' => 'Backlog',
            'created_by' => auth()->user()->id
        ]);

        foreach ($request->user as $key => $value) {
            // $issue->user()->create({
            //     'user_id'=>$value->id
            // })
            \DB::insert('insert into issue_user (user_id, issue_id) values (?, ?)', [$value['id'], $issue->id]);
        }

        if ($issue) {
            return response()->json([
                'issue' => $issue
            ]);
        }
    }

    public function show(Issue $issue)
    {   
        $issue->client;
        $issue->issue_type;
        $issue->creator;
        foreach ($issue->comments as $key => $value) {
            $value->with('user');
        }
        return $issue;
    }

    public function issuebystatus($status='')
    {
        $issue=Issue::where('status',$status)->get();
        return $issue;
    }

    //Status update
    public function statusupdate(Request $request)
    {
        $issue=Issue::find($request->issue_id);
        $issue->status=$request->status;
        $issue->save();
        $issue->client;
        $issue->issue_type;
        $issue->creator;
        foreach ($issue->comments as $key => $value) {
            $value->with('user');
        }
        return $issue;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateIssueRequest $request, $id)
    {
        $issue = Issue::find($id);
        $issue->title = isset($request->title) ? $request->title : $issue->title;
        $issue->project_id = isset($request->project_id) ? $request->project_id : $issue->project_id; $request->project_id;
        $issue->client_id = isset($request->client_id) ? $request->client_id : $issue->client_id; $request->client_id;
        $issue->department_id = isset($request->department_id) ? $request->department_id : $issue->department_id; $request->department_id;
        $issue->desc = isset($request->desc) ? $request->desc : $issue->desc; $request->desc;
        $issue->issue_type_id = isset($request->issue_type_id) ? $request->issue_type_id : $issue->issue_type_id; $request->issue_type_id;
        $issue->status = isset($request->status) ? $request->status : $issue->status; $request->status;
        $issue->updated_at = date('Y-m-d H:i:s');

        $issue->client;
        $issue->issue_type;
        $issue->creator;
        foreach ($issue->comments as $key => $value) {
            $value->with('user');
        }

        if ($issue->save()) {
            return response()->json($issue);
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
        $issue = Issue::find($id);
        if ($issue->delete()) {
            return response()->json([
                'success' => true
            ]);
        }
    }
}
