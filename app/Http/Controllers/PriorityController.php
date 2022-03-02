<?php

namespace App\Http\Controllers;

use App\Models\PriorityKeyword;
use Illuminate\Http\Request;

class PriorityController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $data = PriorityKeyword::all();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $request->validate([
            'keyword' => 'required',
            'company_id' =>'required',
            'client_id' => 'required'
        ]);
        $p = new PriorityKeyword();
        $p->priority_keyword = $request->keyword;
        $p->comapny_id = $request->company_id;
        $p->client_id = $request->client_id;
        if($p->save()){
            $data = array(
                "status" => 1,
                "msg" => "data sent Successfully",
                "data" => $p
            );

        }else
        {
            $data = array(
                "status" => 0,
                "msg" => "data not sent Successfully",
                // "data" => $article
            );

        }
        echo json_encode($data);
        die();
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'keyword' => 'required',
            'company_id' =>'required',
            'client_id' => 'required'
        ]);
        $p =  PriorityKeyword::find($id);
        $p->priority_keyword = $request->keyword;
        $p->comapny_id = $request->company_id;
        $p->client_id = $request->client_id;
        if($p->save()){
            $data = array(
                "status" => 1,
                "msg" => "data sent Successfully",
                "data" => $p
            );

        }else
        {
            $data = array(
                "status" => 0,
                "msg" => "data not sent Successfully",
                // "data" => $article
            );

        }
        echo json_encode($data);
        die();
    }
    public function destroy(Request $request)
    {
        //
        $data = $request->id;
        $json = json_decode($data);
        $emps=  PriorityKeyword::find($json->id)->delete();
        return response()->json($emps);
    }
}
