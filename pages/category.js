import Head from 'next/head'
import { useEffect } from 'react'

import Card from '../components/productAssets/item-card'
import Layout from '../components/layout'
import Link from 'next/link'

import MutipleSlide from '../components/sliders and banners/mutiple-slide'


export default function Category({ deals, product }) {

    return (
        <Layout>


            <MutipleSlide data={deals} pr={'pr-60'} text='Top selling items' />



            <Card data={product} />
            <Link href='/preview'>
                preview
        </Link>
        </Layout>

    )
}

export const getStaticProps = async () => {
    const {deals} = await import('../data/deals')
    const { product } = await import('../data/products')
    return {
        props: {
            deals,
            product
        }
    }
}