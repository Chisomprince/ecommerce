import { useState } from 'react'
import Slider from 'react-slick'
export default function Slide({ data, pr = 20, fitness }) {
 const settings={
     dots:true,
     infinite:true,
     speed:500,
     slidesToShow:1,
     slidesToScroll:1
 }
    return (
       


            <Slider className={`${pr} flex  pt-2 pl-2 overflow-x-auto overflow-y-hidden h-48 sm:pr-96`}>

                {data.map((item) => <div className='flex flex-col min-w-full mr-2 '>
                    <img className={`object-contain flex-1 max-h-28`} src={item.image} />
                    {/* <div className='overflow-x-hidden'>
                        <p className='overflow-x'>
                            Product Name  
                        </p>
                      
                        <p className='font-bold text-bold'>#37,900</p>
                    </div> */}
                </div>
                )}

            


        </Slider>
    )
}