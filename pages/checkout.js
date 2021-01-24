import Head from 'next/head'

import Layout from '../components/layout'

import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <div className='flex justify-center w-screen px-4'>
   <input type='text' className='px-10 py-2 my-4 text-gray-800 bg-gray-200 border-0 rounded w-96 'placeholder='Search'/> 
</div>

           
            <div className='p-2 bg-white'>
               <div className='flex p-2 border-b-2 border-gray-200'>
                    <div className='w-1/3'></div>
                    <div className='flex-1'>
                        <p className='font-semibold'>Wirest0 Blutooth headphone</p>
                        <p className='font-semibold'>Headset 5.0 stereo Earphones</p>
                        
                        <span className='flex mt-2 text-yellow-600'> #8,000 <p className='ml-2 text-gray-700 line-through'>#40,000</p></span>
                    </div>
               </div>
                <div className='flex p-2 border-b-2 border-gray-200'>
                    <div className='w-1/3'></div>
                    <div className='flex-1'>
                        <p className='font-semibold'>Wirest0 Blutooth headphone</p>
                        <p className='font-semibold'>Headset 5.0 stereo Earphones</p>

                        <span className='flex mt-2 text-yellow-600'> #8,000 <p className='ml-2 text-gray-700 line-through'>#40,000</p></span>
                    </div>
                </div>
                <div className='flex justify-evenly '>
                    <span className='text-gray-600'>|</span>
                    <button className='font-bold text-yellow-600 border-0 '>REMOVE</button>
                    <div className='w-6 font-bold border-b-2 border-gray-200'> 1</div>
               </div>
               
           </div>
            <div className='flex flex-col max-w-sm p-2'>
                <button className='w-full py-3 font-bold text-center text-white bg-yellow-600 shadow-lg'>CHECKOUT</button>  
                <button className='w-full py-3 mt-2 font-bold text-center text-yellow-600 bg-white shadow-lg'>CALL TO ORDER</button>

           </div>
           
            <Link href='/preview'>
                preview
        </Link>
        </Layout>

    )
}
