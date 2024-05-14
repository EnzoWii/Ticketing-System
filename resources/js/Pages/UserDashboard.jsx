import React, { useState, useEffect } from 'react'
import Subhero from '@/Components/subhero'
import STI from '@/Components/images/sticomputer.jpg'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

import Cards from '@/Components/Cards'
import { motion } from 'framer-motion'

function UserDashboard({ latestArticles, auth }) {

    

    // Scroll to top button
    console.log(auth)
    const [showScrollButton, setShowScrollButton] = useState(false);
    console.log(latestArticles)
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

    // Accordion component defined within UserDashboard
    const Accordion = () => {
        const AccordionItem = ({ header, text }) => {
            const [active, setActive] = useState(false);

            const handleToggle = () => {
                setActive(!active);
            };

            return (
                <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
                    <button
                        className={`faq-btn flex w-full text-left`}
                        onClick={handleToggle}
                    >
                        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                            <svg
                                className={`fill-primary stroke-primary duration-200 ease-in-out ${
                                    active ? "rotate-180" : ""
                                    }`}
                                width="17"
                                height="10"
                                viewBox="0 0 17 10"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                                    fill=""
                                    stroke=""
                                />
                            </svg>
                        </div>

                        <div className="w-full">
                            <h4 className="mt-1 text-lg font-semibold text-dark dark:text-black">
                                {header}
                            </h4>
                        </div>
                    </button>

                    <div
                        className={`pl-[62px] duration-200 ease-in-out ${
                            active ? "block" : "hidden"
                            }`}
                    >
                        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                            {text}
                        </p>
                    </div>
                </div>
            );
        };

        return (
            <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px]">
                                    Any Questions? Look Here
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/2">
                            <AccordionItem
                                header="What is the IT helpdesk ticketing system?"
                                text="STI College Bacoor utilizes an IT helpdesk ticketing system to efficiently manage and address technical 
                                issues reported by students, faculty, and staff. This system facilitates streamlined communication, 
                                ticket tracking, and issue resolution to minimize disruptions to teaching and learning activities. ."
                            />
                            <AccordionItem
                                header="How do I submit a ticket?"
                                text="You can submit a ticket by accessing the IT helpdesk's online portal or by sending an email to the provided support address at STI College Bacoor.
                                Alternatively, you can inquire about other available channels, such as phone support or in-person assistance during designated hours. ."
                            />
                            <AccordionItem
                                header="Is the ticketing system available 24/7?"
                                text="The availability of the ticketing system at STI College Bacoor may vary depending on their IT department's operating hours. 
                                It's recommended to check with the college's IT department for specific details on when the system is accessible for submitting tickets."
                            />
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <AccordionItem
                                header="Can I track the progress of my ticket?"
                                text="You can monitor your ticket's progress through the IT helpdesk system at STI College Bacoor, ensuring you stay informed about any updates 
                                or resolutions to your reported issue. This feature enables you to stay engaged and aware of the status of your request.."
                            />
                            <AccordionItem
                                header="How long does it take to resolve a ticket?"
                                text="The time it takes to resolve a ticket at STI College Bacoor's IT helpdesk may vary depending on factors such as the complexity of the issue and the current workload. 
                                Typically, the IT team strives to address tickets promptly, aiming to provide timely resolutions to reported problems.."
                            />
                            {/*<AccordionItem
                                header="How long we deliver your first blog post?"
                                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                            />*/}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#3056D3" stop-opacity="0.36" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        );
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            
            {/* FAQ Section */}
            <Accordion />

{/* Latest Articles */}
<div className='mt-14'>
                <div>
                    <h1 className='text-4xl text-center font-bold'>Latest Articles</h1>
                </div>
                <div className='flex justify-center flex-wrap gap-8 mt-10'>
                    {
                        latestArticles.map((article) => {
                            return <a href={`/articles/${article.id}`} className='w-[22%]'>
                            <Cards image={article.image} title={article.title} subtext={article.subtext} />

                            </a>
                        })
                    }

                </div>
            </div>

            {/* Scroll to top button */}
            {showScrollButton && (
                <motion.button
                    className="fixed right-6 bottom-6 z-50 focus:outline-none rounded-full bg-blue-500 text-white px-4 py-2 shadow-lg"
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </AuthenticatedLayout>
    );
}

export default UserDashboard;
