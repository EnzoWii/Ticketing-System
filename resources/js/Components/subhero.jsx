import React from 'react'
import STI from '@/Components/images/sticomputer.jpg'
import BeSTI from '@/Components/images/BeSTI.jpg'
function subhero() {
  return (
    <>

    <div>
        <img className='pt-1 w-full h-[70vh] object-cover' src={BeSTI} alt="" />
    </div>

    <div className="py-1">
    <div className="max-w-full mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm mt-10 flex gap-10">
        <img className='h-96'src={STI}/>
        <div className='px-10 py-5'>
            <h1 className='font-bold text-5xl mt-3 mb-9'> Ticketing System</h1>
            <p className='text-2xl px-1'>Experience smoother customer support with our user-friendly ticketing system. 
            Say goodbye to long waits and confusion – our system simplifies the process, 
            helping you resolve issues faster and keep your customers happy. From submitting queries to tracking progress, we've got you covered every step of the way. Try it today and see the difference for yourself!</p>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default subhero
