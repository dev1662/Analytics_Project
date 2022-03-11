<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user= User::all();
        // foreach ($user as  $value) {
        //     if($value->expiryTime < date('Y-m-d H:i:s')){
        //         return json_encode(["refresh_token" => $value->refresh_token]);
        //     }else{
        //         return json_encode(["info" => "use the previous token"]);

        //     }
        // }
        return UsersResource::collection(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function signup(Request $req){
        
        $dateTime = Carbon::now();
        // return  (string)$dateTime->addMinutes(2);

            // return (string)$dateTime;
        
        $user = new User();
        $user->name = null;
        $user->email = null;
        $user->password = null;
        $user->access_token = $req->access_token;
        $user->refresh_token = $req->refresh_token;

        $user->expiryTime = $dateTime->addMinutes(2);
        $user->startTime = $req->startTime;

        if ($user->save()) {
            $data = array("Reason" => "Signed in successfully", "status" => 1);
            return json_encode($data);die;
        }else{
            $data = array("Reason" => "error in signning in", "status" => 0);
            return json_encode($data);die;
        }
     }
    public function store(Request $request)
    {
        return $request->all();
        $email = $request->email;
        $password= $request->password;
        if(Auth::attempt(['email' => $email, 'password' => $password]))
        {
            $data = array("Reason" => "Logged in Successfully", "Status" => 1, "user" => Auth::user());
            return json_encode($data);die;

        }else{
            $data = array("Reason" => "Not Logged in", "Status" => 0);
            return json_encode($data);die;
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
