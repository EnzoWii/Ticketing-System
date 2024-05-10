import React, { useState, useEffect } from 'react'
import STIBacoorLogo from '../Assets/STIBacoorLogo.gif'
import { Link } from '@inertiajs/react'
import helpdeskimage from '../../../public/images/helpdeskimg.svg'
import Cards from '@/Components/Cards'
import { motion } from 'framer-motion';
function Welcome({ latestArticle, auth }) {
    console.log(auth)
    const [showScrollButton, setShowScrollButton] = useState(false);
    console.log(latestArticle)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const [faqVisibility, setFaqVisibility] = useState({});

    const faqs = [
        { question: 'What is the IT helpdesk ticketing system?', answer: 'STI College Bacoor utilizes an IT helpdesk ticketing system to efficiently manage and address technical issues reported by students, faculty, and staff. This system facilitates streamlined communication, ticket tracking, and issue resolution to minimize disruptions to teaching and learning activities. ' },
        {
            question: 'How do I submit a ticket?', answer: `You can submit a ticket by accessing the IT helpdesk's online portal or by sending an email to the provided support address at STI College Bacoor.Alternatively, you can inquire about other available channels, such as phone support or in-person assistance during designated hours.` },
        { question: 'Is the ticketing system available 24/7?', answer: `The availability of the ticketing system at STI College Bacoor may vary depending on their IT department's operating hours. It's recommended to check with the college's IT department for specific details on when the system is accessible for submitting tickets.` },
        { question: 'Can I track the progress of my ticket?', answer: `You can monitor your ticket's progress through the IT helpdesk system at STI College Bacoor, ensuring you stay informed about any updates or resolutions to your reported issue. This feature enables you to stay engaged and aware of the status of your request.` },
        { question: 'How long does it take to resolve a ticket?', answer: `The time it takes to resolve a ticket at STI College Bacoor's IT helpdesk may vary depending on factors such as the complexity of the issue and the current workload. Typically, the IT team strives to address tickets promptly, aiming to provide timely resolutions to reported problems.

        ` },
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

            <div className='w-full bg-slate-100 pt-10 h-16 flex justify-between items-center '>
                <div className='ml-20'>
                    <img src={STIBacoorLogo} className='w-20 ' />
                </div>
                <div className='mr-20'>
                  { auth.user == null && <Link href={route('login')} className=' bg-blue-900 text-white px-12 py-2 rounded-md'>SIGN IN</Link>}
                  { auth.user != null && <Link href={route('login')} className=' bg-blue-900 text-white px-4 py-2 rounded-md'>Go to Dashboard</Link>}

                </div>
            </div>
            <div className='w-full bg-slate-100 h-[90vh] flex items-center'>
                <div className='w-1/2 ml-20'>
                    <h1 className=' font-bold text-5xl'>IT  Helpdesk Ticketing <br />System</h1>
                    <p className=' mt-4 text-lg text-gray-600'>Efficiently manage IT requests and streamline <br />campus support</p>
                    <div className='flex gap-4 items-center'>
                        <Link href={route('login')} className=' bg-blue-900 text-white px-12 py-2 rounded-md'> SIGN IN </Link>

                        <button className=' border-blue-900 border-2 px-10 py-2 rounded-md'>View Articles</button>
                    </div>
                </div>
                <div className='w-1/3'>
                    <img src={helpdeskimage} className='drop-shadow-2xl' />
                </div>
            </div>
            <div className='mt-14'>
                <div>
                    <h1 className='text-4xl text-center font-bold'>Latest Articles</h1>
                </div>
                <div className='flex justify-center flex-wrap gap-8 mt-10'>
                    {
                        latestArticle.map((article) => {
                            return <a href={`/articles/${article.id}`} className='w-[22%]'>
                            <Cards image={article.image} title={article.title} subtext={article.subtext} />

                            </a>
                        })
                    }



                </div>
            </div>


            <div className='mx-16 mt-14'>
                <h1 className="font-bold text-4xl mb-4 text-black text-center">Frequently Asked Questions (FAQs)</h1> {/* FAQs Section */}
                <div className="mt-10 bg-gray-100 p-6 rounded-lg">

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
            </div>

            {showScrollButton &&
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className='fixed bottom-5 left-10 bg-blue-900 text-white px-2 py-1 rounded-md cursor-pointer'
                    onClick={scrollToTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                </motion.div >}


        </>
    )
}

export default Welcome
