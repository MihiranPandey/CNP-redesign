import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mast from '../components/Mast'
import background_design from '../public/assets/background_designs.svg'
import * as contentful from "contentful"


export default function Home({mastdata}) {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ynv4tav.css"/>
        <title>
          CNP Redesign
        </title> 
      </Head>
      <Navbar/>
      <Mast data={mastdata}/>
      {/* <Image className={styles.background_image} src={background_design} alt="background image" width='1725px' height='6613px' layout='responsive'/> */}
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  
  // connect to contentful
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // Get data from CMS
  const data = await client.getEntry('5SaigJBYREj62KPY3gzyMp')

  return {
      props: {
          mastdata: data
      }
  }
}