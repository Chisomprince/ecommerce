import Nav from './nav'

export default function Layout({children}){
    return(
        <div>
            <Nav/>
            <div className='mt-16 bg-gray-200 sm:p-20'>
                {children}
            </div>

        </div>
    )
}