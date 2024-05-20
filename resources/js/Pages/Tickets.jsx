import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import FacilitatorLayout from '@/Layouts/AuthenticatedLayout';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const TicketItem = ({ ticket, onViewClick }) => {
  const getStatusColor = () => {
    return ticket.status === 'open' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="flex items-center bg-white p-4 border-b border-gray-200">
      <p className="flex-1 font-semibold">Ticket Number: {ticket.id}</p>
      <p className="flex-1 text-sm">Category: {ticket.category}</p>
      <p className="flex-1 text-sm">Issue Type: {ticket.issue_type}</p>
      <p className="flex-1 text-sm">Assigned to: {ticket.assigned_to}</p>
      <p className="flex-1 text-sm">Priority: {ticket.priority}</p>
      <p className={`flex-1 text-sm ${getStatusColor()}`}>Status: {ticket.status}</p>
      <p className="flex-1 text-sm">Description: {truncateText(ticket.description, 50)}</p>
      <button onClick={() => onViewClick(ticket)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ml-4">
        View
      </button>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-1">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

function Tickets({ auth, tickets: initialTickets, itemsPerPage = 5 }) {
  const { data, setData, post, reset } = useForm({
    category: '',
    issue_type: '',
    description: '',
    screenshot: null,
  });
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [tickets, setTickets] = useState(initialTickets);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

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
      window.location.reload();
    }, 1000);
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsViewModalOpen(true);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(tickets.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  const paginatedTickets = tickets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <FacilitatorLayout user={auth.user}>
      <div className="bg-gray-100 min-h-screen p-8">
        <header className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-5xl font-bold pb-5">TICKETS</h1>
          <p className="text-sm">TRACK YOUR SENT TICKETS HERE</p>
        </header>

        <div className="mt-10 bg-gray-100 p-6 rounded-lg">
          <button onClick={() => setIsTicketModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Create a Ticket
          </button>
        </div>

        {isTicketModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-full sm:w-96">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">Submit a Ticket</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select
                    id="category"
                    name="category"
                    value={data.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Assets">Assets</option>
                    <option value="Network">Network</option>
                    <option value="Technical">Technical</option>
                    <option value="Accounts">Accounts</option>
                  </select>
                </div>
                <div>
                  <select
                    id="issue_type"
                    name="issue_type"
                    value={data.issue_type}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  >
                    <option value="">Select Issue Type</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Problem">Problem</option>
                    <option value="Request">Request</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue Description</label>
                  <textarea
                    id="issue"
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Issue Description"
                    className="w-full border border-gray-300 p-2 rounded-md resize-none"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700">Screenshot</label>
                  <input
                    type="file"
                    id="screenshot"
                    name="screenshot"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Submit</button>
                <button type="button" onClick={() => setIsTicketModalOpen(false)} className="border border-gray-300 text-gray-700 px-4 py-2 ml-5 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
              </form>
            </div>
          </div>
        )}

        {isViewModalOpen && selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-full sm:w-96">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">Ticket Details</h2>
              <p><strong>Ticket Number:</strong> {selectedTicket.id}</p>
              <p><strong>Category:</strong> {selectedTicket.category}</p>
              <p><strong>Issue Type:</strong> {selectedTicket.issue_type}</p>
              <p><strong>Assigned to:</strong> {selectedTicket.assigned_to}</p>
              <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Description:</strong> {selectedTicket.description}</p>
              <p><strong>Facilitator Response:</strong> {selectedTicket.response}</p>
              <button onClick={() => setIsViewModalOpen(false)} className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors mt-4">
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-3">
          <div className="bg-white rounded-lg shadow-md">
            {paginatedTickets.map((ticket) => (
              <TicketItem key={ticket.id} ticket={ticket} onViewClick={handleViewTicket} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(tickets.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </FacilitatorLayout>
  );
}

export default Tickets;
