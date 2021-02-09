import Head from 'next/head'

import Layout from '../components/layout'

import Link from 'next/link'
import Button from '../components/common/button'

export default function Home() {
    return (
        <Layout>
             <div className='flex w-screen shadow'>
                    <button className='flex-1 px-2 py-3 mr-1 text-sm font-bold text-yellow-600 border-t-0 border-b-2 border-yellow-600'>LOGIN</button>
                <button className='flex-1 px-2 py-3 text-sm font-bold text-gray-600 border-b-2 focus:border-yellow-600'>CREATE AN ACCOUNT</button>
                </div>
            <div className='w-screen h-screen p-4'>
               
                <div className='flex flex-col '>
                    <input className='' type='email' placeholder='E-mail' className='p-2 my-4 bg-gray-100 border-b-2 border-gray-600 focus:bg-white' />
                    <input className='' type='password' placeholder='Password' className='p-2 my-4 bg-gray-100 border-b-2 border-gray-600 focus:bg-white ' />

                </div >
                <div className='flex items-center justify-between'>
                    <label>
                        <input className='' type='checkbox' placeholder='Remember me' className='mx-2 my-4 border-b-2 border-gray-600 ' />Remember me

                </label>
                    <button className='font-bold text-yellow-600 underline '>Forgot your Password?</button>
                </div>

                <div className='flex flex-col my-4'>
                    <Button w='w-full' bg='bg-yellow-600' img='/mail.svg' text='LOGIN' />

                    <span className='flex items-center justify-between my-3'>
                        <hr className='w-2/5 bg-gray-500 ' /> <p className='text-sm font-semibold text-center text-gray-600'>OR</p>   <hr className='w-2/5 bg-gray-500 ' />
                    </span>


                    <Button w='w-full' bg='bg-blue-900' img='/facebook.svg' text='CONNECT WITH FACEBOOK' />
                </div>

                <div className='flex flex-col items-center'>
                    <button className='my-2 text-black '>New to Clone?</button>
                    <button className='my-2 text-base font-bold text-yellow-600 '>CREATE AN ACCOUNT</button>

                </div>
                <Link href='/preview'>
                    preview
        </Link>
            </div>

        </Layout>

    )
}
