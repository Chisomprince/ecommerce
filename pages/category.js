import Head from 'next/head'
import Slider from '../components/slider'
import Section from '../components/section'
import Card from '../components/item-card'
import Layout from '../components/layout'

import Link from 'next/link'

export default function Home({collection}) {
    return (
        <Layout>

            <Slider/>
            <Section data={collection}/>
            <Card />
            <Link href='/preview'>
                preview
        </Link>
        </Layout>

    )
}
