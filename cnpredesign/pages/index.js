import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mast from '../components/Mast'
import Services from '../components/Services'
import Cost from '../components/Cost'
import Outage from '../components/Outage'
import Tools from '../components/Tools'
import Sustain from '../components/Sustain'
import Assistance from '../components/Assistance'
import background_design from '../public/assets/background_designs.svg'
import * as contentful from "contentful"


export default function Home({mastdata, electric, gas, home, cost, outage, sustainability, self, power, transfer, report}) {
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
        <Tools self={self} power={power} transfer={transfer} report={report}/>
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

  const self_serv_data = await client.getEntry('5Dey6mDyn6NfJg3nbhq1kK')
  const power_alert_data = await client.getEntry('39kSAYKqe2rRkba3R1MX5p')
  const transfer_data = await client.getEntry('5Z7o1ooiQUOMljE6T9JZXy')
  const reporting_data = await client.getEntry('1uKPbX2WKkwqjOLiXJhllB')

  return {
      props: {
          mastdata: mastdata,
          electric: service_electric_data,
          gas: service_gas_data,
          home: service_home_data,
          cost: cost_data,
          outage: outage_tracker_data,
          sustainability: sustainable_data,
          self: self_serv_data,
          power: power_alert_data,
          transfer: transfer_data,
          report: reporting_data, 
      }
  }
}