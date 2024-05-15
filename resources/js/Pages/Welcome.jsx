import React, { useState, useEffect } from 'react';
import STIBacoorLogo from '../Assets/STIBacoorLogo.gif';
import { Link } from '@inertiajs/react';
import helpdeskimage from '../../../public/images/helpdeskimg.svg';
import Cards from '@/Components/Cards';
import { motion } from 'framer-motion';

function Welcome({ latestArticle, auth }) {

    // SCROLL
    console.log(auth);
    const [showScrollButton, setShowScrollButton] = useState(false);
    console.log(latestArticle);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full bg-slate-100 pt-10 pb-20"> {/* Add padding-bottom here */}
            <div className='w-full h-16 flex justify-between items-center'>
                <div className='ml-20'>
                    <img src={STIBacoorLogo} className='w-20' />
                </div>
                <div className='mr-20'>
                    { auth.user == null && <Link href={route('login')} className='bg-blue-900 text-white px-12 py-2 rounded-md'>SIGN IN</Link>}
                    { auth.user != null && <Link href={route('login')} className='bg-blue-900 text-white px-4 py-2 rounded-md'>Go to Dashboard</Link>}
                </div>
            </div>
            <div className='w-full h-[90vh] flex items-center'>
                <div className='w-1/2 ml-20'>
                    <h1 className='font-bold text-5xl'>IT Helpdesk Ticketing <br />System</h1>
                    <p className='mt-4 text-lg text-gray-600'>Efficiently manage IT requests and streamline <br />campus support</p>
                    <div className='flex gap-4 items-center'>
                        <Link href={route('login')} className='bg-blue-900 text-white px-12 py-2 rounded-md'> SIGN IN </Link>
                        <button className='border-blue-900 border-2 px-10 py-2 rounded-md'>View Articles</button>
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
                    {latestArticle.map((article) => (
                        <a href={`/articles/${article.id}`} className='w-[22%]' key={article.id}>
                            <Cards image={article.image} title={article.title} subtext={article.subtext} />
                        </a>
                    ))}
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
                </motion.div>
            }
        </div>
    );
}

export default Welcome;
