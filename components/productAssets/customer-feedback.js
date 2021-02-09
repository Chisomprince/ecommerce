import Reviews from "./review";

export default function Feedback({ date }) {
    return (
        <div className=''>
            <div className='mx-4 my-2 text-base font-semibold text-gray-900'>
                CUSTOMER FEEDBACK
            </div>
            <div className='m-2 bg-white rounded'>
                <div className='p-2'>
                    <p className='font-bold text-gray-900'>Product Rating & Reviews</p>
                    <div className='flex items-center'>
                        <span className='px-1 py-0 mr-1 text-xs text-yellow-600 border-2 border-yellow-600 rounded'>4.3/5</span>
                        <span className='text-xs text-gray-700 '>100 ratings</span>
                    </div>
                </div>
                <Reviews date='1-1-2021' review='very good product' name='micheal'/>
                <Reviews date='11-12-2020' review='i like it' name='jhon'/>
                <Reviews date='1-20-2021' review='great product, recommemdable' name='just me'/>
            </div>

        </div>
    )
}