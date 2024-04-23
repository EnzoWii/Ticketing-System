import React, { useState } from 'react';
import FacilitatorLayout from '@/Layouts/AuthenticatedLayout';

function Tickets({ auth }) {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [ticketFormData, setTicketFormData] = useState({
    category: '',
    issueType: '',
    issue: '',
    attachment: null,
    title: '' // Adding title field to the ticket form data
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

  return (
    <>
      <FacilitatorLayout user={auth.user}>
        <div className="bg-gray-100 min-h-screen p-8">
          <header className="bg-blue-500 text-white text-center py-4">
            <h1 className="text-3xl font-bold">TICKETS</h1>
            <p className="text-sm">TRACK YOUR SENT TICKETS HERE</p>
          </header>
          <table className="w-full mt-8 border border-collapse border-black">
            <thead>
              <tr>
              <th className="px-4 py-2 border border-black text-center">Ticket ID</th>
                <th className="px-4 py-2 border border-black text-center">Department</th>
                <th className="px-4 py-2 border border-black text-center">Date</th>
                <th className="px-4 py-2 border border-black text-center">Subject</th>
                <th className="px-4 py-2 border border-black text-center">Assigned to</th>
                <th className="px-4 py-2 border border-black text-center">Priority</th>
                <th className="px-4 py-2 border border-black text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="px-4 py-2 border border-black text-center">1</td>
                <td className="px-4 py-2 border border-black text-center">Test Department 1</td>
                <td className="px-4 py-2 border border-black text-center">01/22/24</td>
                <td className="px-4 py-2 border border-black text-center">Test Title 1</td>
                <td className="px-4 py-2 border border-black text-center">Test Assigned 1</td>
                <td className="px-4 py-2 border border-black text-center">Low</td>
                <td className="px-4 py-2 border border-black text-center">
                  <span className="bg-green-500 text-white rounded-full px-2 py-1">
                    Open
                  </span>
                </td>
              </tr>
              <tr>
              <td className="px-4 py-2 border border-black text-center">2</td>
                <td className="px-4 py-2 border border-black text-center">Test Department 2</td>
                <td className="px-4 py-2 border border-black text-center">02/12/24</td>
                <td className="px-4 py-2 border border-black text-center">Test Title 2</td>
                <td className="px-4 py-2 border border-black text-center">Test Assigned 2</td>
                <td className="px-4 py-2 border border-black text-center">Medium</td>
                <td className="px-4 py-2 border border-black text-center">
                  <span className="bg-yellow-500 text-white rounded-full px-2 py-1">
                    Ongoing
                  </span>
                </td>
              </tr>
              <tr>
              <td className="px-4 py-2 border border-black text-center">3</td>
                <td className="px-4 py-2 border border-black text-center">Test Department 3</td>
                <td className="px-4 py-2 border border-black text-center">03/05/24</td>
                <td className="px-4 py-2 border border-black text-center">Test Title 3</td>
                <td className="px-4 py-2 border border-black text-center">Test Assigned 3</td>
                <td className="px-4 py-2 border border-black text-center">High</td>
                <td className="px-4 py-2 border border-black text-center">
                  <span className="bg-red-500 text-white rounded-full px-2 py-1">
                    Closed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

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
                    <input type="text" id="title" name="title" value={ticketFormData.title} onChange={handleInputChange} placeholder="Title" className="w-full border border-gray-300 p-2 rounded-md" />
                  </div>
                  <div>
                    <select id="category" name="category" value={ticketFormData.category} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-md" required>
                      <option value="">Select Category</option>
                      <option value="assets">Assets</option>
                      <option value="network">Network</option>
                      <option value="technical">Technical</option>
                      <option value="accounts">Accounts</option>
                    </select>
                  </div>
                  <div>
                    <select id="issueType" name="issueType" value={ticketFormData.issueType} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-md" required>
                      <option value="">Select Issue Type</option>
                      <option value="inquiry">Inquiry</option>
                      <option value="problem">Problem</option>
                      <option value="request">Request</option>
                    </select>
                  </div>
                  <div>
                    <textarea id="issue" name="issue" value={ticketFormData.issue} onChange={handleInputChange} rows="4" placeholder="Issue Description" className="w-full border border-gray-300 p-2 rounded-md" required></textarea>
                  </div>
                  <div>
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment</label>
                    <input type="file" id="attachment" name="attachment" onChange={handleFileChange} className="w-full border border-gray-300 p-2 rounded-md" />
                  </div>
                  <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Submit</button>
                  <button onClick={() => setIsTicketModalOpen(false)} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </FacilitatorLayout>
    </>
  );
}

export default Tickets;
