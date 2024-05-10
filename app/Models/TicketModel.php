<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketModel extends Model
{
    use HasFactory;
    protected $table = 'ticket';
    protected $fillable = ['title', 'category', 'issue_type', 'description', 'screenshot', 'priority', 'status', 'column'];
}
