import { useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { slides } from '../data/data'
export default function MutipleSlide({ data, bg = 'bg-white', text , deals}) {
    const settings = {
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (

        <div className='w-full my-2 bg-white rounded'>

            {deals=='true'?
                <div className={`${bg} p-4 flex items-center justify-between`}>
                    <p className='text-xl font-semibold text-white'>{text}</p>
                    <p className='text-xl font-semibold text-white'>SEE ALL > </p>
                </div>
            :
                <div className={`${bg} p-2`}>
                    <p className='px-2 py-2 text-xl font-semibold text-gray-700'>{text}</p> 
            </div>
            }
           
            
            <Slider {...settings} className='p-2'>

                {data.map((item) => <div className='flex flex-col w-full p-2'>
                    <img className='flex-1 object-contain w-full h-44' src={item.image} />
                     <div className='overflow-x-hidden'>
                        <p className='overflow-x'>
                            Product Name  
                        </p>
                      
                        <p className='font-bold text-bold'>#37,900</p>
                    </div> 
                </div>
                )}
            </Slider>
        </div>
    )
}