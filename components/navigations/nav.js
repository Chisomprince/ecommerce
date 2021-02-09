import React, { useState,useContext ,useEffect} from 'react'
import Link from 'next/link'
import Button from '../common/button'
import AppContext from '../../context/app-context'


export default function Navbar() {
    const {cart} = useContext(AppContext)
    const [drawer, setDrawer] = useState(false)
    const [count,setCount] = useState(0)
    useEffect(() => {
       let cartCount = 0
       cart.forEach((element)=> cartCount += element.qty)
       setCount(cartCount)
    }, [cart])

    return (
        <div>
            <div className='fixed top-0 z-20 flex items-center justify-between w-full px-4 bg-white sm:px-20'>
                <div className='flex items-center'>
                    <img className='inline-block w-5 ' src='/menu.svg' onClick={() => { setDrawer(!drawer) }} />
                    <Link href='/'>
                        <p className='m-4 text-xl font-bold text-gray-900'>CLONE<img className='inline-block w-5 ml-1 stroke-2' src='/shopping-cart.svg' /></p>
                    </Link>
                </div>
                <div className='flex-1 hidden h-10 max-w-3xl sm:flex' >
                    <input className='flex-1 p-2 mr-2 border-2 border-gray-900 rounded' placeholder='search clone' />

                    <Button bg='bg-yellow-600 mr-3' text='SEARCH' />

                </div>
                <div className='flex items-center justify-between'>

                    <div className='flex items-center mr-3'>
                        <img className='inline-block w-5 mr-3 stroke-2' src='/user.svg' />
                        <p className='hidden lg:block'>Login</p>
                    </div>

                    <Link href='/checkout'>
                        <div className='flex items-center'>
                            <img className='inline-block w-5 mr-3 stroke-2' src='/shopping-cart.svg' />
                            <span className='hidden lg:block'>Cart <span className='p-2 text-red-500 bg-black rounded-full'>
                                {count}
                                </span></span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* DRAWER */}
            <div className={drawer ? 'bg-gray-100  flex flex-col w-3/4  top-0 fixed z-50 h-screen lg:hidden' : 'hidden'}>
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


            <div className={drawer ? 'lg:block hidden w-60 fixed mt-4 left-20 z-20 h-96 shadow' : 'hidden'}>
                <ul className='flex-col hidden h-full px-2 py-2 mr-2 sm:flex w-60 sm:bg-white ' >
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
            </div>

        </div>
    )
}