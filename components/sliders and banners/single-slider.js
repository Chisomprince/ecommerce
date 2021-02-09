import { useState } from 'react'
import Slider from 'react-slick'
import {Link} from 'next/link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
     arrows:false,
     
 }
    return (
       
        <div className='w-full'>

            <Slider {...settings}>

                {data.map((item,index) => <div key={index} className='w-full '>
                    <img className='object-cover w-full h-full' src={item.image} />
                    
                </div>
                )}
        </Slider>
        </div>
    )
}