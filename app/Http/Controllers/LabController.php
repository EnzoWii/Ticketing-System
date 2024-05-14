<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TicketModel;
use Inertia\Inertia;

class LabController extends Controller
{
    public function index (){

        $tickets = TicketModel::All();
        

       return Inertia::render('LabTickets', ["Tickets" => $tickets]);
       
    }
    public function show($id)
    {
        $Ticket = TicketModel::findOrFail($id);

        return Inertia::render('Ticket', [
            'Ticket' => $Ticket,
        ]);
    }
}



