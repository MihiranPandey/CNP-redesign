import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import background_design from '../public/assets/background_designs.svg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ynv4tav.css"/>
        <title>
          CNP Redesign
        </title> 
      </Head>

      <Navbar/>
      <Image className="background_image" src={background_design} alt="background image" width='2000px' height='6613px'/>
      <Footer/>
    </div>
  )
}