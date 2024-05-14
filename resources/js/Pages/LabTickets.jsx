import React, { useState } from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

function Tickets({ auth }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [numTicketsReceived, setNumTicketsReceived] = useState(0); // State for number of tickets received today
  const [tickets] = useState([
    {
      id: 'TCID01',
      category: 'Network',
      issueType: 'Problem',
      description: 'This is an example of a ticket description. It contains details about the issue that needs to be resolved. The description might be long, so it needs to be truncated when displayed.',
      assignedTo: 'John Doe',
      priority: 'High',
      status: 'Open',
      date: '04/06/2024',
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewTicket = (ticketId) => {
    console.log(`View ticket ${ticketId}`);
  };

  return (
    <>
      <FacilitatorLayout user={auth.user}>
        <div className="bg-gray-100 min-h-screen p-8">
          {/* Display number of tickets received today */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-lg font-semibold mb-1">Tickets Received Today: {numTicketsReceived}</p>
            </div>
          </div>

          {/* Filter section on the left */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/4">
              <h2 className="text-lg font-semibold mb-2">Filter</h2>
              <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} className="mb-2 w-full border border-gray-300 p-2 rounded-md" />
              <select className="mb-2 w-full border border-gray-300 p-2 rounded-md">
                <option value="">Filter by Priority</option>
                {/* Options for filtering by priority */}
              </select>
              <select className="mb-2 w-full border border-gray-300 p-2 rounded-md">
                <option value="">Filter by Date</option>
                {/* Options for filtering by date */}
              </select>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Unfinished Only</label>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">Apply Filters</button>
            </div>

            {/* Ticket cards */}
            <div className="flex flex-wrap w-full md:w-3/4 gap-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <p className="font-semibold text-lg mb-2">Ticket ID: {ticket.id}</p>
                  <p className="text-sm mb-1">Category: {ticket.category}</p>
                  <p className="text-sm mb-1">Issue Type: {ticket.issueType}</p>
                  <p className="text-sm mb-1">Assigned to: {ticket.assignedTo}</p>
                  <p className="text-sm mb-1">Priority: {ticket.priority}</p>
                  <p className="text-sm mb-1">Status: {ticket.status}</p>
                  <p className="text-sm mb-1">Date: {ticket.date}</p>
                  <p className="text-sm mb-1">Description: {truncateText(ticket.description, 100)}</p> {/* Truncate the description */}
                  <button onClick={() => handleViewTicket(ticket.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FacilitatorLayout>
    </>
  );
}

export default Tickets;
