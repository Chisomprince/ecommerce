import Nav from '../components/navigations/nav'

export default function Layout({children}){
    return(
        <div>
            <Nav/>
            <div className='mt-16 bg-gray-100 md:p-10 lg:p-20'>
                {children}
            </div>

        </div>
    )
}