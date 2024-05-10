<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TicketModel;
use Inertia\Inertia;
class TicketController extends Controller
{ public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'title' => 'required|string',
            'category' => 'required|string',
            'issue_type' => 'required|string',
            'description' => 'required|string',
            'screenshot' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Allow only image files up to 2MB
            'priority' => 'nullable|in:High,Low,Mid',
            'status' => 'nullable|in:Open,Ongoing,Closed',
        ]);

        
        if ($request->hasFile('screenshot')) {
            $imageName = time() . '' . $request->file('screenshot')->hashName();
            $request->file('screenshot')->storeAs('public/images', $imageName);
        }
        

        // Create a new ticket instance
        $ticket = TicketModel::create($validatedData);

        // Return a response
        return redirect()->back()->with('success', 'Article created successfully.');
    }
    public function updateColumn(Request $request, $id)
    {
        $request->validate([
            'column' => 'required|string|in:backlog,todo,doing,done',
        ]);

        $ticket = TicketModel::findOrFail($id);
        $ticket->update(['column' => $request->column]);

        return response()->json(['message' => 'Column updated successfully.']);
    }
    function index() {
        $tickets = TicketModel::all();
        return Inertia::render('Tickets', [
            'tickets' => $tickets
        ]);
    }
}
