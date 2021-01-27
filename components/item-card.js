import {useState} from 'react'
import Button from './button'
import Discount from './discount'
import Filter from './filter'
import Rating from './rating'
export default function Card({ data }) {
 
    return (
        <div className='flex my-2'>
            <div className='hidden lg:block'>
                <Filter  /> 
            </div>
           

            <div className='grid flex-1 grid-cols-2 p-2 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>



                {
                    data.map((item) =>
                 
                        <div className='flex flex-col p-2 transition duration-500 ease-in-out bg-white rounded-md group hover:bg-gray-200 hover:scale-110 hover:-translate-y-1 '>
                            
                            <img className='flex-1 object-contain w-full p-4 max-h-48' src={item.image} />
                            <div className=''>
                                <div className='w-20 px-1 text-xs text-center text-white bg-red-800 rounded-sm'>Official Store</div>
                                <p className='text-sm'>{item.name}</p>
                                <h5 className='font-medium'>{item.amount} </h5>
                                <Discount discount={item.discount} />
                                <Rating />
                            </div>
                            <div className='lg:opacity-0 group-hover:opacity-100' >
                                <Button bg='bg-yellow-600' text='ADD TO CART' onClick={()=>console.log('name',item.name)} />
                            </div>
                           

                        </div>
                    )
                }







            </div>
        </div>
    )
}