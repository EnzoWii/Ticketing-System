<?php

namespace App\Http\Controllers;

use App\Models\TicketModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DashboardController extends Controller
{
    function index() {
        $tickets = TicketModel::All();
        return Inertia::render('LabDashboard', [
            'tickets' => $tickets
        ]);
    }
    function dashboard(){
        $tickets = TicketModel::All();
        return Inertia::render('Dashboard', [
            'tickets' => $tickets
        ]);
    }
}
