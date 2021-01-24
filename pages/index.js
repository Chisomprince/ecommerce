import Head from 'next/head'
import {useEffect} from 'react'
import Nav from '../components/nav'
import Section from '../components/section'
import Card from '../components/item-card'
import Layout from '../components/layout'
import Link from 'next/link'
import Slide from '../components/slider' 
import Deskbar from '../components/desktop-nav'
import Baner from '../components/baner'


export default function Home({category,collection,slides}) {
   
  return (
    <Layout>

     {/*  <Slide data={slides} pr='pr-20' />  */}
     
       <Deskbar/>
      
      <Section data={collection} bg='bg-gray-200' text='Shop our style mode'/>
     <Slide data={slides} pr={'pr-60'} fitness='object-contain'/> 
    <Baner/>
      <Section data={category} text='Featured category'/>
      <Baner />
      <Card />
      <Link href='/preview'>
        preview
        </Link>
    </Layout>

  )
}

export const getStaticProps = async()=>{
  const {category} = await import('../data/data')
  const {collection} = await import('../data/data')
  const { slides } = await import('../data/data')
  

  return{
    props:{
      category,
      collection,
      slides
    }
  }
}