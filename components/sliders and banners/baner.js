import {banners} from '../../data/banner'
export default function Baner(){
    return(
        
        <div className='grid grid-cols-2 gap-2 p-2 bg-white rounded'>
            
            { banners.map((item,index) => <div key={index} className='flex-1 bg-gray-200 h-52'>
                <img src={item.image} className='object-cover w-full h-full'/>
            </div>)}
        </div>
    )
}