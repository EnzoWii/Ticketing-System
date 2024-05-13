import React, { useState } from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';

const ticketClasses = "bg-white shadow rounded-lg p-4 flex items-center justify-between";
const buttonClasses = "border p-2 rounded";
const textClasses = "text-lg font-semibold";

function Tickets({ auth }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [numTicketsReceived, setNumTicketsReceived] = useState(0); // State for number of tickets received today

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketFormData({
      ...ticketFormData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setTicketFormData({
      ...ticketFormData,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewTicket = (ticketId) => {
    // Handle view ticket logic, e.g., navigate to ticket details page
    console.log(`View ticket ${ticketId}`);
  };

  return (
    <>
      <FacilitatorLayout user={auth.user}>
        <div className="bg-gray-100 min-h-screen p-8">
          {/* Display number of tickets received today */}
          {/* <div className="flex justify-between mb-4">
            <div>
              <p className="text-lg font-semibold mb-1">Tickets Received Today: {numTicketsReceived}</p>
            </div>
          </div> */}

          {/* Ticket counts */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <TicketCard title="Total Tickets" count={0} />
            <TicketCard title="New Tickets" count={0} color="text-blue-500" />
            <TicketCard title="On-Going Tickets" count={0} color="text-yellow-500" />
            <TicketCard title="Resolved Tickets" count={0} color="text-green-500" />
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
              {/* Example ticket card */}
              <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <p className="font-semibold text-lg mb-2">Ticket ID: 1</p>
                <p className="text-sm mb-1">Department: Example Department 1</p>
                <p className="text-sm mb-1">Date: 04/06/2024</p>
                <p className="text-sm mb-1">Subject: Example Subject 1</p>
                <p className="text-sm mb-1">Assigned to: Assigned To 1</p>
                <p className="text-sm mb-1">Priority: High</p>
                <p className="text-sm mb-1">Status: Open</p>
                {/* View button */}
                <button onClick={() => handleViewTicket(1)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-2">View</button>
              </div>
              {/* Add more ticket cards as needed */}
            </div>
          </div>
        </div>
      </FacilitatorLayout>
    </>
  );
}

const TicketCard = ({ title, count, color }) => {
  return (
    <div className={ticketClasses}>
      <div>
        <h2 className={textClasses}>{title}</h2>
        <p className={`text-3xl font-bold ${color}`}>{count}</p>
      </div>
    </div>
  );
};

const TicketItem = ({ ticketNumber, title, priority, description }) => {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{`Ticket# ${ticketNumber}`}</h3>
        <p className="text-sm">{title}</p>
        {priority && <span className="text-xs bg-red-200 text-red-800 p-1 rounded">{priority}</span>}
        <p className="text-sm mt-2">{description}</p>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded">Open Ticket</button>
    </div>
  );
};

export default Tickets;
