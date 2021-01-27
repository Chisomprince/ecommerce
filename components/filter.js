import React, { useState } from 'react'
import Link from 'next/link'
import Slide from './slider'

export default function Filter({ data }) {



    return (
        <div className='h-full mr-2 bg-white w-72'>


            {/* DRAWER */}
            <div className={'h-full sm:flex  sm:w-full '}>
                <ul className='flex-col hidden w-full px-2 py-2 mr-2 sm:flex sm:bg-white ' >
                    <li className='mb-4 text-xs font-light text-gray-700 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='mb-4 text-xs font-light text-gray-700 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='mb-4 text-xs font-light text-gray-700 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>

                </ul>

               
            </div>




        </div>
    )
}