<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles'; // Specify the table name if different from the model name

    protected $fillable = ['title', 'subtext','content']; // Specify the fillable attributes
}
