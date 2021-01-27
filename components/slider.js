import { useState } from 'react'
import Slider from 'react-slick'
import {Link} from 'next/link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {slides} from '../data/data'
export default function Slide({ data, pr = 20, fitness }) {
 const settings={
     dots:true,
     infinite:true,
     speed:500,
     slidesToShow:1,
     slidesToScroll:1,
     autoplay:true,
     autoplaySpeed:2000,
     cssEase:'linear',
     arrows:false
 }
    return (
       
        <div className='w-full'>

            <Slider {...settings}>

                {data.map((item) => <div className='w-full '>
                    <img className='object-contain w-full h-72' src={item.image} />
                    {/* <div className='overflow-x-hidden'>
                        <p className='overflow-x'>
                            Product Name  
                        </p>
                      
                        <p className='font-bold text-bold'>#37,900</p>
                    </div> */}
                </div>
                )}
        </Slider>
        </div>
    )
}