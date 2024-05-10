import React from 'react'
import Stibacoorlogo from '../Assets/sti.jpg'
function Cards(props) {
    return (
        <div className='flex justify-center flex-col  shadow-xl'>
            <div className='w-full h-52'>
                <div className={'w-full h-full rounded-t-lg'} style={{ backgroundImage: `url(storage/images/${props.image})`, backgroundSize: 'cover' }}>
                </div>
            </div>
            <div className='text-blue-900 bg-gray-200 p-3  items-center flex flex-col h-28 rounded-b-lg'>
                <p className='text-xl text-center font-bold'>
                    {props.title}
                </p>
                <p className='text-sm text-center text-black pt-4 overflow-hidden'>
                    {props.subtext}
                </p>
            </div>
        </div>
    )
}

export default Cards
