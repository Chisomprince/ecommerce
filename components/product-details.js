import Rating from './rating'
export default function ProductDetails(){
    return(
        <div className='w-screen p-4 my-2 bg-white min-h-1/4 '>
            <p className='font-medium'>Samsung Galaxy S21</p>
            <p className='text-xs text-gray-800'>Brand: Smartphone | Smilar product from Smartphone</p>

            <h5 className='mt-1 font-bold'>NGN 500,000 </h5>
            <span className='flex items-center'>
                <p className='text-sm line-through'>NGN 600,000 </p>
                <span className='px-1 m-1 font-bold text-yellow-600 bg-yellow-500 rounded-sm bg-opacity-40'>-18%</span>
            </span>
            <div className='flex items-center justify-between'>
               <Rating count='100'/>

                <div className='flex'>
                    
                    <img className='ml-3' src='/share-2.svg' />
                    <img className='ml-3' src='/heart.svg' />
                </div>
            </div>

        </div>
    )
}