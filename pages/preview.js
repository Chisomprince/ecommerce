import Layout from '../components/layout'
import ProductDetails from '../components/product-details'
import Button from '../components/button'
import Description from '../components/description'
import Feedback from '../components/customer-feedback'


function Preview() {
    return (
        <Layout>
            <div className='flex flex-col min-h-screen'>
            
                <img className='object-contain w-full h-48 p-4 mt-2 bg-white rounded' src='/omen-laptop.png'/>
                <ProductDetails />
                <Description />
                <Feedback />
                <div className='fixed bottom-0 flex items-center w-full mb-1 justify-evenly'>
                    <Button  bg='bg-white' img='/phone.svg'  />
                    <Button w='w-3/4' bg='bg-yellow-600' img='/shopping-cart.svg' text='ADD TO CART' />
                </div>
                
                <div className='w-screen h-24'></div>
            </div>
        </Layout>
    )
}
export default Preview