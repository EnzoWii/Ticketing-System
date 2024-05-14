<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TicketModel;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index (){

        $tickets = TicketModel::All();
        

        return Inertia::render('AdminDashboard', ["Tickets" => $tickets]);
    }
}
