import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
import CabinCard from '../components/CabinCard/CabinCard'
import ExploreCard from '../components/ExploreCard/ExploreCard'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MapContainer from '../components/Map/MapContainer'
import MiddleBanner from '../components/MiddleBanner/MiddleBanner'

import styles from '../styles/Home.module.css'

export default function Home({exploreData , cardsData}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main>
        <ExploreCard exploreData={exploreData}/>
        <CabinCard cardsData={cardsData}/>
        <MiddleBanner/>

        <Footer/>
      </main>
    </div>
  )
}
export async function getStaticProps(){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(res=>res.json()).catch(e=>console.log(e))
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(res=>res.json()).catch(e=>console.log(e))
  return{
    props:{
      exploreData,
      cardsData
    }
  }
}