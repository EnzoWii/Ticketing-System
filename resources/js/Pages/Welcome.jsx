import React from 'react'
import STIBacoorLogo from '../Assets/STIBacoorLogo.gif'
import { Link } from '@inertiajs/react'
function Welcome() {

    return (
        <>

            <div className='w-full h-screen bg-gradient-to-b from-[#0772B6] flex justify-center items-center text-center'>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className='w-40 h-40'>
                            <img src={STIBacoorLogo} alt="STI Bacoor Logo" />
                        </div>
                    </div>
                    <h1 className='text-white font-bold text-5xl'>IT HELPDESK TICKETING SYSTEM</h1>
                    <p className="text-white mb-4">Welcome to the IT Helpdesk Ticketing System. Please click the button below to get started.</p>
                    <Link href={route('login')}  className="mt-10 bg-[#FEF201]  text-white font-bold py-2 px-8 rounded">Get Started</Link>

                </div>

            </div>
            <div className='w-full bg-black h-20'>
            </div>
        </>
    )
}

export default Welcome
