import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mast from '../components/Mast'
import Services from '../components/Services'
import Cost from '../components/Cost'
import background_design from '../public/assets/background_designs.svg'
import * as contentful from "contentful"


export default function Home({mastdata, electric, gas, home, cost}) {
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
      <Services electric={electric} gas={gas} home={home}/>
      <Cost cost={cost}/>
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
  const mastdata = await client.getEntry('5SaigJBYREj62KPY3gzyMp')
  const service_electric_data = await client.getEntry('sqnDqE0lVVrofUxAefd6Y')
  const service_gas_data = await client.getEntry('2tVX6iJvJqGTMctFN70DgI')
  const service_home_data = await client.getEntry('3Xr6DWR2kZ1WZFwIYVhh0N')
  const cost_data = await client.getEntry('1HrVmmA3XqHFiRmh3XvpvW')


  return {
      props: {
          mastdata: mastdata,
          electric: service_electric_data,
          gas: service_gas_data,
          home: service_home_data,
          cost: cost_data,
      }
  }
}