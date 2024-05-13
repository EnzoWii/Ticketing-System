import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import FacilitatorLayout from '@/Layouts/AuthenticatedLayout';

const TicketCard = ({ title, count, color }) => {
  const ticketClasses = "bg-white shadow rounded-lg p-4 flex items-center justify-between";
  const textClasses = "text-lg font-semibold";

  return (
    <div className={ticketClasses}>
      <div>
        <h2 className={textClasses}>{title}</h2>
        <p className={`text-3xl font-bold ${color}`}>{count}</p>
      </div>
    </div>
  );
};

const TicketBox = ({ ticket, onViewClick }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <p className="font-semibold text-lg mb-2">Ticket Number: {ticket.number}</p>
    <p className="text-sm mb-1">Category: {ticket.category}</p>
    <p className="text-sm mb-1">Issue Type: {ticket.issueType}</p>
    <p className="text-sm mb-1">Assigned to: {ticket.assignedTo}</p>
    <p className="text-sm mb-1">Priority: {ticket.priority}</p>
    <p className="text-sm mb-1">Status: {ticket.status}</p>
    {/* View button */}
    <button onClick={() => onViewClick(ticket.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">View</button>
  </div>
);

function Tickets({ auth }) {
  const { data, setData, post } = useForm();
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [ticketCounter, setTicketCounter] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleFileChange = (e) => {
    setData('screenshot', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      number: ticketCounter,
      category: data.category,
      issueType: data.issue_type,
      assignedTo: 'n/a', // Set default value to 'n/a'
      priority: 'n/a', // Assuming priority is also set to 'n/a' by default
      status: 'Open',
    };
    setTickets((prevTickets) => [...prevTickets, newTicket]);
    setTicketCounter((prevCounter) => prevCounter + 1);
    setIsTicketModalOpen(false);
  };

  const handleViewTicket = (ticketId) => {
    console.log(`View ticket ${ticketId}`);
  };

  return (
    <FacilitatorLayout user={auth.user}>
      <div className="bg-gray-100 min-h-screen p-8">
        <header className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-3xl font-bold">TICKETS</h1>
          <p className="text-sm">TRACK YOUR SENT TICKETS HERE</p>
        </header>

        <div className="mt-4"> {/* Added padding here */}
          {/* Ticket cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <TicketCard title="Total Tickets" count={tickets.length} />
            <TicketCard title="On-Going Tickets" count={0} color="text-yellow-500" />
            <TicketCard title="Resolved Tickets" count={0} color="text-green-500" />
          </div>
        </div>

        <div className="mt-4"> {/* Added padding here */}
          {/* Ticket boxes */}
          <div className="flex flex-wrap w-full gap-4">
            {tickets.map((ticket) => (
              <TicketBox key={ticket.number} ticket={ticket} onViewClick={handleViewTicket} />
            ))}
          </div>
        </div>

        {/* Ticket Submission Section */}
        <div className="mt-10 bg-gray-100 p-6 rounded-lg">
          <button onClick={() => setIsTicketModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Create a Ticket</button>
        </div>

        {/* Ticket Submission Modal */}
        {isTicketModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-full sm:w-96">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">Submit a Ticket</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select id="category" name="category" value={data.category} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-md" required>
                    <option value="">Select Category</option>
                    <option value="Assets">Assets</option>
                    <option value="Network">Network</option>
                    <option value="Technical">Technical</option>
                    <option value="Accounts">Accounts</option>
                  </select>
                </div>
                <div>
                  <select id="issue_type" name="issue_type" value={data.issue_type} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-md" required>
                    <option value="">Select Issue Type</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Problem">Problem</option>
                    <option value="Request">Request</option>
                  </select>
                </div>
                <div>
                  <textarea id="issue" name="description" value={data.description} onChange={handleInputChange} rows="4" placeholder="Issue Description" className="w-full border border-gray-300 p-2 rounded-md" required></textarea>
                </div>
                <div>
                  <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700">Screenshot</label>
                  <input type="file" id="screenshot" name="screenshot" onChange={handleFileChange} className="w-full border border-gray-300 p-2 rounded-md" />
                </div>
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Submit</button>
                <button onClick={() => setIsTicketModalOpen(false)} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </FacilitatorLayout>
  );
}

export default Tickets;
