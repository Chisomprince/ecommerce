export default function Discount({discount=''}){
    return(
        <span className='flex items-center'>
            <p className='text-sm line-through'>{discount} </p>
            <span className='px-1 m-1 font-bold text-yellow-600 bg-yellow-500 rounded-sm bg-opacity-40'>-18%</span>
        </span>
    )
}