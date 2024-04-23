import React, { useState } from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';

function Tickets({ auth }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [ticketFormData, setTicketFormData] = useState({
    category: '',
    issueType: '',
    issue: '',
    attachment: null
  });

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

  return (
    <>
      <FacilitatorLayout user={auth.user}>
      <div className="bg-gray-100 min-h-screen p-8">
          <div className="flex justify-between mt-8">
            <table className="w-full border border-collapse border-black">
              <thead>
                <tr>
                  <th className="px-2 py-2 border border-black text-center">Ticket ID</th>
                  <th className="px-2 py-2 border border-black text-center">Department</th>
                  <th className="px-2 py-2 border border-black text-center">Date</th>
                  <th className="px-2 py-2 border border-black text-center">Subject</th>
                  <th className="px-2 py-2 border border-black text-center">Assigned to</th>
                  <th className="px-2 py-2 border border-black text-center">Priority</th>
                  <th className="px-2 py-2 border border-black text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example lines */}
                <tr>
                  <td className="px-1 py-1 border border-black text-center">1</td>
                  <td className="px-1 py-1 border border-black text-center">Example Department 1</td>
                  <td className="px-1 py-1 border border-black text-center">04/06/2024</td>
                  <td className="px-1 py-1 border border-black text-center">Example Subject 1</td>
                  <td className="px-1 py-1 border border-black text-center">Assigned To 1</td>
                  <td className="px-1 py-1 border border-black text-center">High</td>
                  <td className="px-1 py-1 border border-black text-center">Open</td>
                </tr>
                <tr>
                  <td className="px-1 py-1 border border-black text-center">2</td>
                  <td className="px-1 py-1 border border-black text-center">Example Department 2</td>
                  <td className="px-1 py-1 border border-black text-center">04/07/2024</td>
                  <td className="px-1 py-1 border border-black text-center">Example Subject 2</td>
                  <td className="px-1 py-1 border border-black text-center">Assigned To 2</td>
                  <td className="px-1 py-1 border border-black text-center">Medium</td>
                  <td className="px-1 py-1 border border-black text-center">Closed</td>
                </tr>
              </tbody>
            </table>
            <div className="ml-8">
              {/* Filtering component */}
              <h2 className="text-lg font-semibold mb-4">Filter</h2>
              <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} className="mb-2 w-full border border-gray-300 p-2 rounded-md" />
              <select className="mb-2 w-full border border-gray-300 p-2 rounded-md">
                <option value="">Filter by Priority</option>
                {/* Options for filtering by priority */}
              </select>
              <select className="mb-2 w-full border border-gray-300 p-2 rounded-md">
                <option value="">Filter by Date</option>
                {/* Options for filtering by date */}
              </select>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <label>Unfinished Only</label>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Apply Filters</button>
            </div>
          </div>
        </div>
      </FacilitatorLayout>
    </>
  );
}

export default Tickets;
