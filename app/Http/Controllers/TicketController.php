<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TicketModel;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'ID_number' => 'required|integer',
            'category' => 'required|string',
            'issue_type' => 'required|string',
            'assigned_to' => 'required|string',
            'description' => 'required|string',
            'screenshot' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Allow only image files up to 2MB
            'priority' => 'nullable|in:High,Low,Mid',
            'status' => 'nullable|in:Open,Ongoing,Closed',
            'column_name' => 'nullable|string|in:backlog,todo,doing,done', // Adjusted column name validation
        ]);

        // Process screenshot file if uploaded
        if ($request->hasFile('screenshot')) {
            $imageName = time() . '_' . $request->file('screenshot')->getClientOriginalName();
            $request->file('screenshot')->storeAs('public/images', $imageName);
            $validatedData['screenshot'] = $imageName; // Save image name to database
        }

        // Create a new ticket instance
        $ticket = TicketModel::create($validatedData);

        // Return a response
        return redirect()->back()->with('success', 'Ticket created successfully.');
    }

    public function updateColumn(Request $request, $id)
    {
        $request->validate([
            'column_name' => 'required|string|in:backlog,todo,doing,done', // Adjusted column name validation
        ]);

        $ticket = TicketModel::findOrFail($id);
        $ticket->update(['column_name' => $request->column_name]); // Updated column name

        return response()->json(['message' => 'Column updated successfully.']);
    }

    public function index()
    {
        $tickets = TicketModel::all();
        return Inertia::render('Tickets', [
            'tickets' => $tickets
        ]);
    }
}
