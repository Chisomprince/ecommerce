import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

    const [drawer, setDrawer] = useState(false)

    return (
        <div>
            <div className='fixed top-0 z-20 flex items-center justify-between w-full px-4 bg-white sm:px-20'>
                <div className='flex items-center'>
                    <img className='inline-block w-5 ' src='/menu.svg' onClick={() => { setDrawer(!drawer) }} />
                    <Link href='/'>
                        <p className='m-4 text-xl font-bold text-gray-900'>CLONE<img className='inline-block w-5 ml-1 stroke-2' src='/shopping-cart.svg' /></p>
                    </Link>
                </div>
                <div >
                    <img className='inline-block w-5 mr-3 stroke-2' src='/user.svg' />
                    <Link href='/checkout'>
                        <img className='inline-block w-5 mr-3 stroke-2' src='/shopping-cart.svg' />
                    </Link>

                </div>
            </div>

           {/* DRAWER */}
            <div className={drawer ? 'bg-gray-100  flex flex-col w-3/4  top-0 fixed z-50 h-screen' : 'hidden'}>
                <div className='flex py-2 m-4 border-b-2 border-gray-300 '>
                    <button onClick={() => { setDrawer(!drawer) }}>   <img className='inline-block w-5 mr-3 stroke-2' src='/x.svg' /></button>
                    <div>
                         <p className='m-4 text-xl font-bold text-gray-900'>CLONE<img className='inline-block w-5 ml-1 stroke-2' src='/shopping-cart.svg' /></p>
                  
                    </div>
                </div>
                <ul className='flex flex-col justify-center px-4 py-2 border-b-2 border-gray-300'>
                    <Link href='/login'>
                        <p className='mb-4 text-sm font-bold text-yellow-600 text'>MY JUMIA ACCOUNT</p>

                    </Link>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/shopping-bag.svg' alt='ordericon' />orders</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/check-square.svg' alt='ordericon' />Pending Reviews</li>
                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/credit-card.svg' alt='ordericon' />voucher</li>

                    <li className='mb-4 font-semibold text-gray-900'><img className='inline-block w-5 mr-2' src='/heart.svg' alt='ordericon' />saved items</li>

                </ul>
            </div>


        </div>
    )
}