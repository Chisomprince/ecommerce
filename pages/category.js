import Head from 'next/head'
import { useEffect } from 'react'

import Card from '../components/item-card'
import Layout from '../components/layout'
import Link from 'next/link'

import MutipleSlide from '../components/mutiple-slide'


export default function Category({slides, product }) {

    return (
        <Layout>

        
            <MutipleSlide data={slides} pr={'pr-60'} text='Top selling items' />
           

            
            <Card data={product} />
            <Link href='/preview'>
                preview
        </Link>
        </Layout>

    )
}

export const getStaticProps = async () => {
  
    const { slides } = await import('../data/data')
    const { product } = await import('../data/products')


    return {
        props: {
           
            slides,
            product
        }
    }
}