<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //
    public function add(Request $req)
    {
        $json = json_decode( $req->json);
        // return $json;
        // return $json->content;
        $comment  = new Comment();
        $comment->keyword = $json->keyword;
        $comment->comment = $json->content;
        $comment->source = $json->source;
        $comment->start = $json->start;
        $comment->end = $json->end;
        // $comment->save();
        if($comment->save()){
            $data = array(
                "status" => 1,
                "msg" => "data updated Successfully",
                "data" => $comment
            );

        }else
        {
            $data = array(
                "status" => 0,
                "msg" => "data not updated Successfully",
                // "data" => $article
            );

        }
    }
    public function update(Request $req)
    {
        $json = json_decode($req->data);
        // return $json;
        $comment = Comment::find($json->id);
        $comment->comment = $json->comment;
        if($comment->save()){
            $data = array(
                "status" => 1,
                "msg" => "data updated Successfully",
                // "data" => $comment
            );

        }else
        {
            $data = array(
                "status" => 0,
                "msg" => "data not updated Successfully",
                // "data" => $article
            );

        }
    return json_encode($data);die;

    }
    public function destroy(Request $req)
    {
        $json = json_decode($req->delete);

        if(Comment::find($json->id)->delete()){
            $data = array(
                "status" => 1,
                "msg" => "data deleted Successfully",
                // "data" => $comment
            );
        }else{
            $data = array(
                "status" => 1,
                "msg" => "data not deleted",
                // "data" => $comment
            );
        }
    return json_encode($data);die;

    }
    public function delete(Request $req)
    {
        $json = json_decode($req->delete);
        $comment = Comment::find($json->id);
        $comment->comment = "Comment Deleted";

        if($comment->save()){
            $data = array(
                "status" => 1,
                "msg" => "data deleted Successfully",
                // "data" => $comment
            );
        }else{
            $data = array(
                "status" => 1,
                "msg" => "data not deleted",
                // "data" => $comment
            );
        }
    return json_encode($data);die;
    }
}
