import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/facilitatorLayout';

const Sidebar = ({ assignedTo, priority, status }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h3 className="font-semibold text-lg mb-2">Ticket Details</h3>
      <div className="mb-2">
        <p className="text-sm font-medium text-gray-700">Assigned to:</p>
        <input
          type="text"
          value={assignedTo}
          className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100"
          readOnly
        />
      </div>
      <div className="mb-2">
        <p className="text-sm font-medium text-gray-700">Priority:</p>
        <select className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100">
          <option value="low" style={{ color: 'green' }}>Low</option>
          <option value="medium" style={{ color: 'yellow' }}>Medium</option>
          <option value="high" style={{ color: 'red' }}>High</option>
        </select>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">Status:</p>
        <p className="text-sm text-gray-600">{status}</p>
      </div>
    </div>
  );
};

function TicketShow({ auth, Ticket }) {
  // State variables for form data
  const [solution, setSolution] = useState(''); // State to store the solution/comment
  const [attachedPicture, setAttachedPicture] = useState(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Function to handle solution/comment changes
  const handleSolutionChange = (e) => {
    const value = e.target.value;
    // Set the solution/comment
    setSolution(value);
  };

  // Function to handle picture attachment in solution section
  const handleSolutionPictureAttachment = (e) => {
    const file = e.target.files[0];
    // Set the attached picture
    setAttachedPicture(file);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex items-center justify-center h-full pt-2">
        {/* Sidebar */}
        <div className="mr-4">
          <Sidebar assignedTo={Ticket.assigned_to} priority={Ticket.priority} status={Ticket.status} />
        </div>

        {/* Main content */}
        <div className="bg-white p-8 rounded-lg w-full sm:w-5/6 lg:w-3/4 xl:w-1/2">
          <h2 className="font-bold text-2xl mb-4 text-gray-800 text-center">Your Ticket</h2>
          <p className="text-sm text-gray-500 mb-2 text-right">{currentDate}</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category:</label>
              <input
                type="text"
                value={Ticket.category}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Type:</label>
              <input
                type="text"
                value={Ticket.issue_type}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Description:</label>
              <textarea
                rows="4"
                value={Ticket.description}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100 resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Solution/Comment:</label>
              <textarea
                rows="2"
                value={solution}
                onChange={handleSolutionChange}
                placeholder="Add your solution/comment here..."
                className="w-full border border-gray-300 p-2 rounded-md text-sm resize-none"
              ></textarea>
              <div className="flex items-center border border-gray-300 p-2 rounded-md mt-2">
                <input
                  type="file"
                  onChange={handleSolutionPictureAttachment}
                  className="hidden"
                  accept="image/*"
                  id="attachedPictureSolution"
                />
                <label htmlFor="attachedPictureSolution" className="cursor-pointer flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">Attach Picture</span>
                </label>
                {attachedPicture && (
                  <span className="text-sm text-gray-500">Image Attached: {attachedPicture.name}</span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {}}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Solution
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default TicketShow;
