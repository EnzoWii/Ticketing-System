<?php

namespace App\Http\Controllers;

use App\Models\TicketModel;
use App\Models\Article;
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
        $latestArticles = Article::orderBy('created_at', 'desc')->take(3)->get();
        $tickets = TicketModel::All();
        return Inertia::render('Dashboard', [
            'tickets'  => $tickets,
            'latestArticles' => $latestArticles
        ]);
    }
}
