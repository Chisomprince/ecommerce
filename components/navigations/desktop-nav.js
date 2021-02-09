import React, { useState } from 'react'
import Link from 'next/link'
import Slide from '../sliders and banners/single-slider'

export default function Deskbar({ data }) {

    return (
        <div className='flex h-1/4 lg:h-96 '>


            {/* DRAWER */}
            <div className={' flex  w-full lg:-mt-16  '}>
                <ul className='flex-col hidden h-full px-3 py-2 mr-2 rounded lg:flex w-60 sm:bg-white ' >
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-4 mr-1' src='/shopping-bag.svg' alt='ordericon' />Phone & Tablets</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-1 ' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/heart.svg' alt='ordericon' />saved items</li>
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900 '><img className='inline-block w-3 mr-1' src='/shopping-bag.svg' alt='ordericon' />Smartphone & tablets</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='flex items-center mb-4 text-sm font-normal text-gray-900'><img className='w-5 mr-2 ' src='/heart.svg' alt='ordericon' />saved items</li>

                </ul>

                <div className='flex-1 h-full mr-2 overflow-hidden rounded '>
                    <Slide data={data} />

                </div>


                <div className='flex-col hidden w-1/5 h-full rounded lg:flex'>
                    <div className='flex flex-col justify-between p-4 mb-2 text-sm bg-white rounded h-2/4'>
                        <div className='flex'>
                            <img className='mr-2 w-7 ' src='/heart.svg' alt='ordericon' />
                            <span>
                                <h4 className='font-bold text-black'>HELP CENTER</h4>
                            <p className=''>Guide to Customer Care</p>
                            </span>
                            
                        </div>
                        <div className='flex'>
                            <img className='mr-2 w-7 ' src='/heart.svg' alt='ordericon' />
                            <span>
                                <h4 className='font-bold text-black'>EASY RETURN</h4>
                                <p className=''>Quick Refund</p>
                            </span>

                        </div>
                        <div className='flex'>
                            <img className='mr-2 w-7 ' src='/heart.svg' alt='ordericon' />
                            <span>
                                <h4 className='font-bold text-black'>SELL ON CLONE</h4>
                                <p className=''>Millions of Visitor</p>
                            </span>

                        </div>
                    </div>
                    <div className='w-full mt-2 bg-gray-300 h-2/4'>
                     <img className='object-cover w-full h-full rounded ' src='/headphone.jpg'/> 
                    </div>

                </div>
            </div>




        </div>
    )
}