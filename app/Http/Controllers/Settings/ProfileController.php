<?php

namespace App\Http\Controllers\Settings;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Models\Attendance;
class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        return tap($user)->update($request->only('name', 'email'));
    }

    public function users()
    {
        return User::all();
    }

    public function checkin(Request $request)
    {
        return Attendance::create([
            'user_id'=>$request->user_id,
            'remarks'=>$request->remarks,
            'date'=>$request->date,
            'status'=>'present',
            'intime'=>$request->intime,
        ]);
    }

    public function checkout(Attendance $attendance,Request $request)
    {
        $attendance->outtime=$request->outtime;
        $attendance->save();
        return 'success';
    }
}
