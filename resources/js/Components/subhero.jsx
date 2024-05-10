import React, { useState } from 'react';
import STI from '@/Components/images/sticomputer.jpg';
import BeSTI from '@/Components/images/BeSTI.jpg';

function SubHero() {
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


  

  return (
    <>
      

      <div className="py-1">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
      
        </div>
      </div>
    </>
  );
}

export default SubHero;
