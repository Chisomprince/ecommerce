import Button from './button'
export default function Card() {
    return (
        <div className='grid grid-cols-2 gap-2 p-2 my-2 bg-gray-200'>
            <div className='flex flex-col p-2 bg-white rounded-md'>

                <img className='object-contain w-full p-4 max-h-48' src='/galaxy-tab.png' />
                <div className='h-full '>
                    <div className='w-20 px-1 text-xs text-center text-white bg-red-800 rounded-sm'>Official Store</div>
                    <p className='text-sm'>samsung s21</p>
                    <h5 className='font-medium'>NGN 500,000 </h5>
                    <span className='flex items-center'>
                        <p className='text-sm line-through'>NGN 600,000 </p>
                        <span className='px-1 m-1 font-bold text-yellow-600 bg-yellow-500 rounded-sm bg-opacity-40'>-18%</span>


                    </span>
                    <div>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>


                    </div>
                </div>
                <div className='pt-3'>
                    <Button bg='bg-yellow-600' text='ADD TO CART' />

                </div>
                          </div>
            <div className='flex flex-col bg-white'>
                <div className='w-full bg-gray-500 h-36 '>image</div>
                <div className='flex-1 m-2'>
                    <p className='text-sm'>samsung s21</p>
                    <h5 className='text-base font-medium'>NGN 500,000</h5>
                    <p className='text-sm text-gray-600 line-through'>NGN 600,000</p>
                    <div>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>
                        <span>
                            <img className='inline w-4' src='/star.svg' />
                        </span>


                    </div>
                </div>
                <button className='px-4 py-1 m-2 text-white bg-yellow-600 rounded-md shadow-lg'>ADD TO CART</button>


            </div>


        </div>
    )
}