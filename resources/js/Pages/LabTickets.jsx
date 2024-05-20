import React, { useEffect, useState } from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';
import { useForm } from '@inertiajs/react';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

function Tickets({ auth, Tickets }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [numTicketsReceived, setNumTicketsReceived] = useState(0);
  const [tickets, setTickets] = useState([]);

  const { get, processing, errors } = useForm();

  // useEffect to update numTicketsReceived and tickets
  useEffect(() => {
    setNumTicketsReceived(Tickets.length); // Update numTicketsReceived
    setTickets(Tickets); // Update tickets
  }, [Tickets]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FacilitatorLayout user={auth.user}>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-lg font-semibold mb-1">Tickets Received Today: {numTicketsReceived}</p>
          </div>
        </div>

        <div className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">Filter</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="mb-2 w-full border border-gray-300 p-2 rounded-md"
          />
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">
            Apply Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="font-semibold text-lg mb-2">Ticket ID: {ticket.id}</p>
              <p className="text-sm mb-1">Category: {ticket.category}</p>
              <p className="text-sm mb-1">Issue Type: {ticket.issue_type}</p>
              <p className="text-sm mb-1">Assigned to: {ticket.assigned_to}</p>
              <p className="text-sm mb-1">Priority: {ticket.priority}</p>
              <p className="text-sm mb-1">Status: {ticket.status}</p>
              <p className="text-sm mb-1">Date: {ticket.created_at}</p>
              <p className="text-sm mb-1">Description: {truncateText(ticket.description, 100)}</p>
              <a href={`/ticket-show/${ticket.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">
                  View
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </FacilitatorLayout>
  );
}

export default Tickets;
