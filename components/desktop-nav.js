import React, { useState } from 'react'
import Link from 'next/link'
import Slide from './slider'

export default function Deskbar({ data }) {



    return (
        <div className='flex h-96 '>


            {/* DRAWER */}
            <div className={' flex  w-full lg:-mt-16  '}>
                <ul className='flex-col hidden h-full px-2 py-2 mr-2 lg:flex w-60 sm:bg-white ' >
                    <li className='mb-2 text-xs font-normal text-gray-900 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='mb-2 text-xs font-normal text-gray-900 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='mb-2 text-xs font-normal text-gray-900 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-2 text-xs font-normal text-gray-900'><img className='inline-block w-3 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>

                </ul>

                <div className='flex-1 h-full mr-2 overflow-hidden '>
                    <Slide data={data} />

                </div>


                <div className='flex-col hidden w-1/5 bg-white lg:flex'>
                    <div className='flex-1 pl-2 mb-2 text-sm bg-white'>
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