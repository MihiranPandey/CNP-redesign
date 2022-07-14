import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import logo from '../public/assets/cnp.svg'
import adown from '../public/assets/arrow-down.svg'
import acc from '../public/assets/Account.svg'
import map from '../public/assets/map-pin.svg'
import search from '../public/assets/search.svg'


export default function Navbar() {
  return (
        <div className={styles.navigation_bar}>
            <div className={styles.left_nav_section}>
                <div className={styles.logo}>
                    <Image src={logo} alt="/" width='235px' height='82px'/>
                </div>
                <div className={styles.divider}>
                    
                </div>
                <div className={styles.version_type}>
                    <p className={styles.hl}>Residential</p>
                </div>
            </div>
            <div className={styles.right_nav_section}>
                <div className={styles.nav_links}>
                    <a className={styles.link}>
                        Nav Link
                    </a>
                    <Image src={adown} alt="/" width='24px' height='24px'/>
                    <a className={styles.link}>
                        Nav Link
                    </a>
                    <Image src={adown} alt="/" width='24px' height='24px'/>
                    <a className={styles.link}>
                        Nav Link
                    </a>
                    <Image src={adown} alt="/" width='26px' height='26px'/>
                    <Image src={search} alt="/" width='26px' height='26px'/>
                    <Image src={acc} alt="/" width='24px' height='24px'/>
                    <div className={styles.divider_two}/>
                    <Image src={map} alt="/" width='24px' height='24px'/>
                    <a className={styles.link}> Houston </a> 
                </div>
            </div>
        </div>
  )
}
