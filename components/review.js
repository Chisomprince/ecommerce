import Rating from "./rating"

export default function Reviews({date,review,name}){
    return(
        <div>
            
            <div className='p-2 border-t-2 border-gray-200'>
                
                <div className='flex items-center justify-between'>
                  <Rating/>  
                  <p className='text-gray-700'>{date}</p>
                </div>
                <p>{review}</p>
                <div className='flex items-center justify-between'>
                    <p>{name}</p>
                    <span className='flex text-green-500'>
                     <img className='right-0 self-end px-1 bottom-1' src='/check-circle.svg' />
                     Verified Purchase   
                    </span>
                
                
                </div>
                
            </div>
        </div>
    )
}