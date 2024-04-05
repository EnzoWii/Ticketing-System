import React, { useState } from 'react';

function SubHeroFaq() {
  const [faqVisibility, setFaqVisibility] = useState({});

  const faqs = [
    {
      category: 'General',
      questions: [
        { question: 'What is the IT helpdesk ticketing system?', answer: '... answer ...' },
        { question: 'How do I submit a ticket?', answer: '... answer ...' },
        { question: 'Is the ticketing system available 24/7?', answer: '... answer ...' }
      ]
    },
    {
      category: 'Tracking',
      questions: [
        { question: 'Can I track the progress of my ticket?', answer: '... answer ...' },
        { question: 'How long does it take to resolve a ticket?', answer: '... answer ...' }
      ]
    }
    // Add more categories and questions as needed
  ];

  const toggleFaq = (categoryIndex, questionIndex) => {
    setFaqVisibility(prevVisibility => {
      const key = `${categoryIndex}-${questionIndex}`;
      return {
        ...prevVisibility,
        [key]: !prevVisibility[key]
      };
    });
  };

  return (
    <div className="py-4 bg-gray-100">
      <div className="max-w-3xl sm:px-6 lg:px-8"> {/* Adjusted maximum width */}
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mt-6">
            <h2 className="font-bold text-2xl mb-2 text-gray-800">{category.category}</h2>
            <div className="space-y-2">
              {category.questions.map((faq, questionIndex) => (
                <div
                  key={`${categoryIndex}-${questionIndex}`}
                  className="border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out hover:shadow-lg"
                >
                  <div
                    className="px-4 py-3 cursor-pointer bg-white hover:bg-blue-100"
                    onClick={() => toggleFaq(categoryIndex, questionIndex)}
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform transition-transform ${
                        faqVisibility[`${categoryIndex}-${questionIndex}`] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {faqVisibility[`${categoryIndex}-${questionIndex}`] && (
                    <p className="px-4 py-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubHeroFaq;
