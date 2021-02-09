import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Section({ data, bg, text }) {

    const deck = data

    const mobile = data.slice(0, 8)
    const tablet = data.slice(0, 10)

    return (
        <div className='p-2 my-2 bg-white rounded '>
            <p className='px-2 text-xl font-semibold text-gray-700'>{text}</p>


            <div className={`bg-white rounded grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-2 items-center justify-center gap-2 `}>

                {mobile.map((item,index) =>
                <div key={index}>
                <Link href='/category' >
                
                        <div className='flex flex-col object-contain w-full h-30 md:hidden'  >
                            <img className={` flex-auto object-contain w-full h-24 p-2 ${bg} max-h-32 `} src={item.image} />
                            <div className='text-center'>{item.name}</div>
                        </div>
                    </Link></div>
                )}
                {tablet.map((item,index) =>
                <div key={index}>
                <Link href='/category'>
                    <div className='flex-col hidden object-contain w-full md:flex lg:hidden' >

                        <img className={`flex-auto object-contain w-full p-2  ${bg} max-h-32 `} src={item.image} />
                        <div className='text-center '>{item.name}</div>
                    </div></Link></div>
                )}

                {deck.map((item,index) =>
                <div key={index}>
                 <Link href='/category'>
                    <div className='flex-col hidden w-full lg:flex'>
                        <img className={`flex-auto object-contain w-full p-2 ${bg} max-h-32 `} src={item.image} />
                        <div className='text-center '>{item.name}</div>
                    </div></Link></div>)
                }

            </div>
        </div>
    )
}
