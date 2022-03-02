<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriorityKeyword extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id',
        'client_id',
        'priority_keyword'
    ];
    public function articles(){
        return $this->hasOne(Article::class);
    }
}
