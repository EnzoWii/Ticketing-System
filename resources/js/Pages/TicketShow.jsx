import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/facilitatorLayout';

const Sidebar = ({ assignedTo, priority, status }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h3 className="font-semibold text-lg mb-2">Ticket Details</h3>
      <div className="mb-2">
        <p className="text-sm font-medium text-gray-700">Assigned to:</p>
        <p className="text-sm text-gray-600">{assignedTo}</p>
      </div>
      <div className="mb-2">
        <p className="text-sm font-medium text-gray-700">Priority:</p>
        <p className="text-sm text-gray-600">{priority}</p>
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
  const [comment, setComment] = useState('');
  const [attachedPicture, setAttachedPicture] = useState(null);
  const [closeTicketModalOpen, setCloseTicketModalOpen] = useState(false);
  const [closeTicketReason, setCloseTicketReason] = useState('');
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

console.log(Ticket);

  // Function to handle comment changes
  const handleCommentChange = (e) => {
    const value = e.target.value;
    // Set the comment
    setComment(value);
  };

  // Function to handle picture attachment in comment section
  const handleCommentPictureAttachment = (e) => {
    const file = e.target.files[0];
    // Set the attached picture
    setAttachedPicture(file);
  };

  // Function to handle closing ticket
  const handleCloseTicket = () => {
    // Open close ticket modal
    setCloseTicketModalOpen(true);
  };

  // Function to confirm closing ticket
  const confirmCloseTicket = () => {
    // Perform closing ticket logic here
    console.log('Ticket closed for reason:', closeTicketReason);
    // Close close ticket modal
    setCloseTicketModalOpen(false);
    // Clear close ticket reason
    setCloseTicketReason('');
  };

  // Function to cancel closing ticket
  const cancelCloseTicket = () => {
    // Close close ticket modal
    setCloseTicketModalOpen(false);
    // Reset close ticket reason
    setCloseTicketReason('');
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
                className="w-full border border-gray-300 p-2 rounded-md text-lg bg-gray-100"
              ></textarea>
            </div>
            <div>
  <label className="block text-sm font-medium text-gray-700">Comment (Lab Facilitator):</label>
  <div className="relative">
    <textarea
      rows="2"
      value="This is an example comment from the lab facilitator."
      readOnly
      className="w-full border border-gray-300 p-2 rounded-md text-sm bg-gray-100"
    ></textarea>
    <span className="absolute top-0 right-0 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-md">Lab Facilitator</span>
  </div>
</div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Comment:</label>
              <textarea
                rows="2"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add your comment here..."
                className="w-full border border-gray-300 p-2 rounded-md text-sm"
              ></textarea>
              <div className="flex items-center border border-gray-300 p-2 rounded-md mt-2">
                <input
                  type="file"
                  onChange={handleCommentPictureAttachment}
                  className="hidden"
                  accept="image/*"
                  id="attachedPictureComment"
                />
                <label htmlFor="attachedPictureComment" className="cursor-pointer flex items-center space-x-2">
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
            <div className="flex justify-between">
              <button onClick={() => {}} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">Go Back</button>
              <button onClick={handleCloseTicket} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Close Ticket</button>
            </div>
          </form>
        </div>
      </div>
      {/* Close Ticket Modal */}
      {closeTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-full sm:w-96">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Close Ticket</h2>
            <p>Why do you want to close this ticket?</p>
            <textarea
              value={closeTicketReason}
              onChange={(e) => setCloseTicketReason(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md mt-2"
              placeholder="Enter reason for closing the ticket..."
              rows="4"
            />
            <div className="flex justify-end mt-4">
              <button onClick={confirmCloseTicket} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mr-2">Confirm</button>
              <button onClick={cancelCloseTicket} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Remaining modal content */}
    </AuthenticatedLayout>
  );
}

export default TicketShow;
