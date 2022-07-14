import Head, { defaultHead } from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ynv4tav.css"/>
        <title>
          CNP Redesign
        </title> 
      </Head>

      <main>
        <Navbar/>
      </main>
    </div>
  )
}