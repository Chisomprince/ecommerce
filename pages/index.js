import Head from 'next/head'
import {useContext, useEffect} from 'react'
import Nav from '../components/navigations/nav'
import Section from '../components/collections/section'
import Card from '../components/productAssets/item-card'
import Layout from '../components/layout'
import Link from 'next/link'
import Slide from '../components/sliders and banners/single-slider' 
import Deskbar from '../components/navigations/desktop-nav'
import Baner from '../components/sliders and banners/baner'
import MutipleSlide from '../components/sliders and banners/mutiple-slide'
import AppContext from '../context/app-context'


export default function Home({category,collection,slides,product,deals}) {

 
  
  return (
    <Layout>

     {/*  <Slide data={slides} pr='pr-20' />  */}
     
       <Deskbar data={slides}/>
      
      
      <MutipleSlide data={deals} pr={'pr-60'} text='Top selling items'/> 
      <MutipleSlide data={deals} bg={'bg-blue-800'} text='Deal of the Day' deals='true'/> 

      <Section data={collection} bg='bg-gray-200' text='Shop our style mode' />
    <Baner/>
      <Section data={category} text='Featured category'/>
      <Baner />
      <Card data={product} />
      <Link href='/preview'>
        preview
        </Link>
    </Layout>

  )
}

export const getStaticProps = async()=>{
  const {category} = await import('../data/data')
  const {collection} = await import('../data/data')
  const { slides } = await import('../data/single-slide')
  const { deals } = await import('../data/deals')
  const { product } = await import('../data/products')
  

  return{
    props:{
      category,
      collection,
      slides,
      product,
      deals
    }
  }
}