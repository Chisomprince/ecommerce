import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout'

import Link from 'next/link'
import AppContext from '../context/app-context'

export default function Home() {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let price = 0
        cart.forEach(element => {

            price += element.qty * element.amount

        });
        setTotal(price)
    }, [cart])

    return (
        <Layout>


            <input type='text' className='w-full px-4 py-2 my-4 text-gray-800 bg-gray-200 border-0 rounded' placeholder='Search' />

            <div>
                <Link href='/'>
                    Go back Home
                </Link>
            </div>


            <div className=''>

                {cart.map((item, index) => <div key={index} className='m-2 mb-4 bg-white rounded shadow'>
                    <div className='flex p-2 border-b-2 border-gray-200'>
                        <div className='w-1/3'>
                            <img className='object-contain w-full max-h-32' src={item.image} />
                        </div>
                        <div className='flex-1'>
                            <p className='font-semibold'>Wirest0 Blutooth headphone</p>
                            <p className='font-semibold'>Headset 5.0 stereo Earphones</p>

                            <span className='flex mt-2 text-yellow-600'> {item.amount} <p className='ml-2 text-gray-700 line-through'>#40,000</p></span>

                        </div>

                    </div>

                    <div className='flex justify-between px-4 '>
                        <div className='flex items-center'>
                            <img className='w-4' src='./heart.svg' />
                            <span className='m-2 text-gray-600'>|</span>
                            <button className='font-bold text-yellow-600 border-0 ' onClick={() => removeFromCart(item.id)}>REMOVE</button>
                        </div>


                        <div className='flex flex-row items-center'>
                            <button className='w-6 font-extrabold text-white bg-yellow-600 rounded-full' onClick={() => increaseQty(item.id)}>+</button>
                            <div className='w-6 font-bold text-center border-b-2 border-gray-200'>{item.qty}</div>
                            <button className='w-6 font-extrabold text-white bg-yellow-600 rounded-full' onClick={() => decreaseQty(item.id)}>-</button>
                        </div>
                    </div>
                </div>
                )}


            </div>
            <div className='flex flex-col items-center w-full p-2 mb-8 md:flex-row'>
                <button className='flex-1 w-full py-3 font-bold text-center text-white bg-yellow-600 shadow-lg '>CHECKOUT</button>
                <button className='flex-1 w-full py-3 mt-2 font-bold text-center text-yellow-600 bg-white shadow-lg'>CALL TO ORDER</button>

            </div>
            <div className='fixed bottom-0 flex items-center justify-between w-full p-4 bg-white'>
                <p className='font-semibold text-gray-900'>Total</p>
                <p className='font-bold text-yellow-600'>
                   # {total}
                </p>

            </div>
            <Link href='/preview'>
                preview
        </Link>
        </Layout>

    )
}
