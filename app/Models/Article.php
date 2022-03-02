<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $fillable = [
        'priority_keyword_id',
        'client_id',
        'company_id',
        'date_published',
        'writer',
        'topic',
        'focus_keyword',
        'priority_keyword',
        'status',
        'approval',
        'doc_link',
        'banner_images',
        'article_link',
        'comment'
    ];
    protected $casts = [
        'comment' => 'array'
    ];
    public function priorityKeyword(){
        return $this->belongsTo(PriorityKeyword::class);
    }
}
