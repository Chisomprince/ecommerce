import React, { useState } from 'react'
import Link from 'next/link'

export default function Deskbar() {



    return (
        <div className='h-2/3 '>


            {/* DRAWER */}
            <div className={'hidden  sm:flex justify-between sm:w-full -mt-16'}>
                <ul className='flex flex-col px-2 py-2 mr-2 w-52 sm:bg-white ' >
                    <li className='mb-4 text-xs font-light text-gray-700 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>

                </ul>

                <div className='flex-1 min-h-full mr-2 bg-white '>
                    <img className='object-cover w-full max-h-96' src='/headphone.jpg' />

                </div>


                <div className='flex flex-col w-1/5 bg-white'>
                    <div className='flex-1 pl-2 mb-2 bg-white'>
                        {/*  <img className='object-cover w-1/3 ' src='/headphone.jpg'/> */}
                    </div>
                    <div className='flex-1 pl-2 mt-2 bg-gray-300'>
                        {/*  <img className='object-cover w-1/3 ' src='/headphone.jpg'/> */}
                    </div>

                </div>
            </div>




        </div>
    )
}