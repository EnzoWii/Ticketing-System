import React, { useState } from 'react';
import STI from '@/Components/images/sticomputer.jpg';
import BeSTI from '@/Components/images/BeSTI.jpg';

function SubHero() {
  const [faqVisibility, setFaqVisibility] = useState({});
  const [ticketFormData, setTicketFormData] = useState({
    name: '',
    email: '',
    category: '',
    issue: ''
  });
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false); // State to control the visibility of the ticket modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the ticket data
    console.log('Ticket Submitted:', ticketFormData);
    // Reset form fields after submission
    setTicketFormData({
      name: '',
      email: '',
      category: '',
      issue: ''
    });
    // Close the ticket modal after submission
    setIsTicketModalOpen(false);
  };

  const faqs = [
    { question: 'What is the IT helpdesk ticketing system?', answer: '... answer ...' },
    { question: 'How do I submit a ticket?', answer: '... answer ...' },
    { question: 'Is the ticketing system available 24/7?', answer: '... answer ...' },
    { question: 'Can I track the progress of my ticket?', answer: '... answer ...' },
    { question: 'How long does it take to resolve a ticket?', answer: '... answer ...' },
    // Add more FAQs as needed
  ];

  const toggleFaq = (index) => {
    setFaqVisibility((prevVisibility) => ({
      ...prevVisibility,
      [index]: !prevVisibility[index],
    }));
  };

  return (
    <>
      <div>
        <img className='pt-1 w-full h-[70vh] object-cover' src={BeSTI} alt="" />
      </div>

      <div className="py-1">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm mt-10 flex gap-10">
            <img className='h-2/4 w-2/4' src={STI} alt="STI" />
            <div className='px-10 py-1'>
              <h1 className='font-bold text-3xl mt-5 mb-5'>Dashboard</h1> {/* Dashboard Section */}
              <p className='text-1xl px-1'>Dashboard content goes here...</p>
            </div>
          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-lg">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Frequently Asked Questions (FAQs)</h2> {/* FAQs Section */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${faqVisibility[index] ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {faqVisibility[index] && <p className="text-gray-700">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Ticket Submission Section */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Submit a Ticket</h2>
            <button onClick={() => setIsTicketModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Create a Ticket</button>
          </div>

          {/* Ticket Submission Modal */}
          {isTicketModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
              <div className="bg-white p-8 rounded-lg w-full sm:w-96">
                <h2 className="font-bold text-2xl mb-4 text-gray-800">Submit a Ticket</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input type="text" id="name" name="name" value={ticketFormData.name} onChange={handleInputChange} placeholder="Name" className="w-full border border-gray-300 p-2 rounded-md" required />
                  </div>
                  <div>
                    <input type="email" id="email" name="email" value={ticketFormData.email} onChange={handleInputChange} placeholder="Email" className="w-full border border-gray-300 p-2 rounded-md" required />
                  </div>
                  <div>
                    <select id="category" name="category" value={ticketFormData.category} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-md">
                      <option value="">Select Category</option>
                      <option value="assets">Assets</option>
                      <option value="technical">Technical</option>
                      <option value="accounts">Accounts</option>
                      <option value="network">Network</option>
                    </select>
                  </div>
                  <div>
                    <textarea id="issue" name="issue" value={ticketFormData.issue} onChange={handleInputChange} rows="4" placeholder="Issue Description" className="w-full border border-gray-300 p-2 rounded-md" required></textarea>
                  </div>
                  <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Submit</button>
                  <button onClick={() => setIsTicketModalOpen(false)} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SubHero;
