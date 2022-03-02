<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'keyword',
        'comment',
        'reply_id',
        'source',
        'start',
        'end'

    ];
    // protected $casts = [
    //     'comment' => 'array'
    // ];
    public function replies(){
        return $this->hasMany(Comment::class, 'reply_id', 'id');
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
