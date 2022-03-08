<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PriorityController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\UsersController;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/update/article/', [ArticleController::class, 'update']);
Route::post('/store/article', [ArticleController::class, 'store']);
Route::post('/delete/article/', [ArticleController::class, 'destroy']);

Route::get('/priority', [PriorityController::class, 'index']);
Route::post('/store/priority', [PriorityController::class, 'store']);
Route::post('/update/priority/{id}', [PriorityController::class, 'update']);
Route::post('/delete/priority/{id}', [PriorityController::class, 'destroy']);

Route::get('/article', [ArticleController::class, 'index']);


Route::post("comment/store/", [CommentController::class, 'add']);

Route::get('/c', function(){

    $comment =  CommentResource::collection( Comment::with('replies', 'user')->get());
    // $comment = Comment::whereNotNull('keyword')->with('replies')->get()->groupBy('keyword');
    // $comment =  CommentResource::collection( DB::table('comments')->groupBy('reply_id', 'id', 'keyword', 'comment', 'replied', 'created_at', 'updated_at')->whereNotNull('reply_id')->get());
        // $comment =  DB::table('comments')->groupBy('reply_id', 'id', 'keyword', 'comment', 'replied', 'created_at', 'updated_at')->whereNotNull('reply_id')->get();
    $replies = CommentResource::collection( Comment::whereNotNull('reply_id')->with('user')->get());
     $data = array("replies" => $replies, 'comment'=> $comment);
    // return json_encode( $data);die;
    return $data;
});
Route::post('/c/store', function(Request $req){

    $json_data = json_decode($req->data, true);
    $comment = new Comment();
    $comment->comment = $json_data['comment'];
    $comment->reply_id = $json_data['reply_id'];
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



});
Route::post('c/update', [CommentController::class, 'update']);
Route::post('c/delete', [CommentController::class, 'destroy']);
Route::post('comm/delete', [CommentController::class, 'delete']);



Route::resource('users', UsersController::class);
Route::post('signup', [UsersController::class, 'signup']);
Route::post('logout', function(){
    // return "auth";
    if(Auth::logoutCurrentDevice()){
        $data = array("Reason" => "Logged out Successfully", "Status" => 1);
        return json_encode($data);die;
    }

});
Route::post('turncate', function () {
   if (Comment::truncate()) {
        $data = array("Reason" => "Data truncated Successfully");
        return json_encode($data);die;
   }else{
    $data = array("Reason" => "Data not truncated Successfully");
    return json_encode($data);die;
   }


});

Route::post('auth/google', [SocialiteController::class, 'social']);
Route::get('callback/google', [SocialiteController::class, 'handleCallback']);
