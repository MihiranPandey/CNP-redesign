import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mast from '../components/Mast'
import Services from '../components/Services'
import Cost from '../components/Cost'
import Outage from '../components/Outage'
import Sustain from '../components/Sustain'
import Assistance from '../components/Assistance'
import background_design from '../public/assets/background_designs.svg'
import * as contentful from "contentful"


export default function Home({mastdata, electric, gas, home, cost, outage, sustainability}) {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ynv4tav.css"/>
        <title>
          CNP Redesign
        </title> 
      </Head>
      <div className="content">
        <Navbar/>
        <Mast data={mastdata}/>
        <Services electric={electric} gas={gas} home={home}/>
        <Cost cost={cost}/>
        <Outage outage={outage}/>
        <Sustain sus={sustainability}/>
        <Assistance/>
      </div>
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
  const outage_tracker_data = await client.getEntry('3c4WhYDDaVHgSSOt813PjD')
  const sustainable_data = await client.getEntry('7sxCfQzgZWxpJPeuE1wEbm')

  return {
      props: {
          mastdata: mastdata,
          electric: service_electric_data,
          gas: service_gas_data,
          home: service_home_data,
          cost: cost_data,
          outage: outage_tracker_data,
          sustainability: sustainable_data, 
      }
  }
}