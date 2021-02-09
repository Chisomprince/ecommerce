export default function Rating({count=''}) {
    return (
        <div>
        
            <div className='mt-1.5'>
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

                <p className='mb-2 text-xs text-gray-800' >{count}</p>
            </div>
        </div>
    )
}