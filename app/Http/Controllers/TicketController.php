<?php

namespace App\Http\Controllers;

use App\Models\TicketModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = TicketModel::all();
        return Inertia::render('Tickets', ['tickets' => $tickets]);
    }

    public function create()
    {
        return Inertia::render('Tickets/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string',
            'issue_type' => 'required|string',
            'description' => 'required|string',
        ]);

        $ticket = TicketModel::create($validated);

        return Redirect::to('/');
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return Inertia::render('Tickets/Show', ['ticket' => $ticket]);
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::findOrFail($id);

        $validated = $request->validate([
            'category' => 'string',
            'issue_type' => 'string',
            'description' => 'string',
            'assigned_to' => 'string',
            'priority' => 'string',
            'status' => 'string',
        ]);

        $ticket->update($validated);

        return redirect()->route('tickets.index');
    }

    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->delete();

        return redirect()->route('tickets.index');
    }
}
