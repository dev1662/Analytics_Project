<?php

namespace App\Http\Resources;

use App\Models\Comment;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class CommentResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "source" => $this->source,
            "keyword" => $this->keyword,
            "comment" => $this->comment,
            "reply_id" => $this->reply_id,
            "start" => $this->start,
            "end" => $this->end,
            "created_at" => Carbon::parse($this->created_at)->diffForHumans(),


            // "created_at" => Comment::all('created_at')->pluck('created_at')
        ];
        // return parent::toArray($request);
    }
}
