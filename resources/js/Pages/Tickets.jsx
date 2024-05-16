import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import FacilitatorLayout from '@/Layouts/AuthenticatedLayout';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const TicketBox = ({ ticket, onViewClick }) => {
  const getStatusColor = () => {
    return ticket.status === 'open' ? 'text-green-500' : '';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <p className="font-semibold text-lg mb-2">Ticket Number: {ticket.id}</p>
      <p className="text-sm mb-1">Category: {ticket.category}</p>
      <p className="text-sm mb-1">Issue Type: {ticket.issue_type}</p>
      <p className="text-sm mb-1">Assigned to: {ticket.assigned_to}</p>
      <p className="text-sm mb-1">Priority: {ticket.priority}</p>
      <p className={`text-sm mb-1 ${getStatusColor()}`}>Status: {ticket.status}</p>
      <div className="description-container" style={{ maxHeight: '3.6em', overflow: 'hidden' }}>
        <p className="text-sm mb-1">Description: {truncateText(ticket.description, 100)}</p>
      </div>
      <button onClick={() => onViewClick(ticket.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">View</button>
    </div>
  );
};

function Tickets({ auth, tickets: initialTickets }) {
  const { data, setData, post, reset } = useForm({
    category: '',
    issue_type: '',
    description: '',
    screenshot: null,
  });
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [tickets, setTickets] = useState(initialTickets);

  useEffect(() => {
    setTickets(initialTickets);
  }, [initialTickets]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleFileChange = (e) => {
    setData('screenshot', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/tickets', {
      preserveScroll: true,
      onSuccess: (page) => {
        setTickets(page.props.tickets);
        reset();
        setIsTicketModalOpen(false);
      },
      onError: (errors) => {
        console.error('Error submitting ticket:', errors);
      },
    });
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  };

  const handleViewTicket = (ticketId) => {
    console.log(`View ticket ${ticketId}`);
  };

  return (
    <FacilitatorLayout user={auth.user}>
      <div className="bg-gray-100 min-h-screen p-8">
        <header className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-5xl font-bold pb-5">TICKETS</h1>
          <p className="text-sm">TRACK YOUR SENT TICKETS HERE</p>
        </header>

        <div className="mt-4">
          <div className="flex flex-wrap w-full gap-4">
            {tickets.map((ticket) => (
              <TicketBox key={ticket.id} ticket={ticket} onViewClick={handleViewTicket} />
            ))}
          </div>
        </div>

        <div className="mt-10 bg-gray-100 p-6 rounded-lg">
          <button onClick={() => setIsTicketModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Create a Ticket</button>
        </div>

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
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue Description</label>
                  <textarea id="issue" name="description" value={data.description} onChange={handleInputChange} rows="4" placeholder="Issue Description" className="w-full border border-gray-300 p-2 rounded-md resize-none" required></textarea>
                </div>
                <div>
                  <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700">Screenshot</label>
                  <input type="file" id="screenshot" name="screenshot" onChange={handleFileChange} className="w-full border border-gray-300 p-2 rounded-md" />
                </div>
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Submit</button>
                <button type="button" onClick={() => setIsTicketModalOpen(false)} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </FacilitatorLayout>
  );
}

export default Tickets;
