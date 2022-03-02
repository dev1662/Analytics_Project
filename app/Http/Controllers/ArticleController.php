<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Employee;
// use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\Console\Input\Input;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\File\File as FileFile;

class ArticleController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $article = Article::with('priorityKeyword')->paginate(4);
        return $article;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->image;

        $data = $request->filesInfo;
        $json = json_decode($data);


        // BASE 64 IMAGE CONVERTED TO SIMPLE IMAGE
        $I = $request->image;

        $filesdata = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $I));
        $tmp = sys_get_temp_dir() . '/' . Str::uuid()->toString();
        file_put_contents($tmp, $filesdata);
        $tmpfile = new FileFile($tmp);
        $file = new UploadedFile(
            $tmpfile->getPathname(),
            $tmpfile->getFilename(),
            $tmpfile->getMimeType(),
            0,
            true
        );
       $img =  $file->store('uploads', 'public');

        $article = new Article();
        $article->priority_keyword_id = $json->keyword_id;
        $article->client_id = $json->client_id;
        $article->company_id =  $json->comapny_id;
        $article->date_published = $json->date;
        $article->writer = $json->writer;
        $article->topic = $json->topic;
        $article->focus_keyword = $json->focus;
        $article->status = $json->status;
        $article->approval = $json->approval;
        $article->doc_link = $json->doc;
        $article->banner_images = $img;
        $article->article_link = $json->article;

        $article->save();





        // if($article->save()){
        //     $data = array(
        //         "status" => 1,
        //         "msg" => "data sent Successfully",
        //         "data" => $article
        //     );

        // }else
        // {
        //     $data = array(
        //         "status" => 0,
        //         "msg" => "data not sent Successfully",
        //         // "data" => $article
        //     );

        // }
        // echo json_encode($data);
        // die();


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $data = $request->filesInfo;

        $json = json_decode($data);
        // return $json;


        $I = $request->image;

        $filesdata = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $I));
        $tmp = sys_get_temp_dir() . '/' . Str::uuid()->toString();
        file_put_contents($tmp, $filesdata);
        $tmpfile = new FileFile($tmp);
        $file = new UploadedFile(
            $tmpfile->getPathname(),
            $tmpfile->getFilename(),
            $tmpfile->getMimeType(),
            0,
            true
        );
       $img =  $file->store('uploads', 'public');



        // $i = request('image')->store('uploads', 'public');
        // echo json_encode($i);exit;
        // echo $request->keyword_id;

        $article =  Article::find($json->id);
        $article->priority_keyword_id = $json->keyword_id;
        $article->client_id = $json->client_id;
        $article->company_id =  $json->comapny_id;
        $article->date_published = $json->date;
        $article->writer = $json->writer;
        $article->topic = $json->topic;
        $article->focus_keyword = $json->focus;

        $article->status = $json->status;
        $article->approval = $json->approval;
        $article->doc_link = $json->doc;


            $article->banner_images = $img;

        $article->article_link = $json->article;

        if($article->save()){
            $data = array(
                "status" => 1,
                "msg" => "data updated Successfully",
                "data" => $article
            );

        }else
        {
            $data = array(
                "status" => 0,
                "msg" => "data not updated Successfully",
                // "data" => $article
            );

        }
        echo json_encode($data);
        die();
        // return response()->json($article);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $idd =  $request->id;
        $josn_id = json_decode($idd);
        // return $id->id;
        $emps=  Article::find($josn_id->id)->delete();
        return response()->json($emps);
    }


}
