import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Section({ data, bg,text }) {
   
    const deck = data

    const mobile = data.slice(0,8)
    console.log('mobile',mobile)
    
    console.log('deck', deck)
    return (
        <div className='p-2 my-2 bg-white rounded'>
            <p className='px-2 font-semibold text-gray-700'>{text}</p>
        <div className={`bg-white rounded grid grid-cols-4 items-center justify-center  sm:grid-cols-6`}>

            {mobile.map((item) =>
                <div className='flex flex-col w-full p-2 sm:hidden' >

                    <img className={`flex-1 object-contain w-full p-2 ${bg} max-h-20 `} src={item.image} />
                    <div className='text-center '>{item.name}</div>
                </div>
            ) }

             {   deck.map((item) =>
                    <div className='flex-col hidden w-full p-2 sm:block' >
                     <img className={`flex-1 object-contain w-full p-2 ${bg} max-h-20 `} src={item.image} />
                        <div className='text-center '>{item.name}</div>
                    </div>)
            }

        </div>
        </div>
    )
}
