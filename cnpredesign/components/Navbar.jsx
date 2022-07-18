import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import logo from '../public/assets/cnp.svg'
import adown from '../public/assets/arrow-down.svg'
import adownw from '../public/assets/arrow-downw.svg'
import acc from '../public/assets/Account.svg'
import map from '../public/assets/map-pin.svg'
import search from '../public/assets/search.svg'


export default function Navbar() {
  return (
        <div className={styles.navigation_bar}>
            <div className={styles.left_nav_section}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" width='235px' height='82px'/>
                </div>
                <div className={styles.version_type}>
                    <p>Residential</p>
                    <Image src={adownw} alt="down arrow" width='24px' height='24px'/>
                </div>
            </div>

            <div className={styles.right_nav_section}>
                <div className={styles.nav_links}>
                    <div className={styles.nav_links}>
                        <a className={styles.link}>
                        Explore
                        </a>
                        <Image src={adown} alt="down arrow" width='24px' height='24px'/>
                    </div>
                    
                    <div className={styles.nav_links}>
                        <a className={styles.link}>
                            Contact
                        </a>
                        <Image src={adown} alt="down arrow" width='24px' height='24px'/>
                    </div>

                    <div className={styles.nav_links}>
                        <a className={styles.link}>
                            My Account
                        </a>
                        <Image src={adown} alt="down arrow" width='26px' height='26px'/>
                    </div>
                    <Image src={search} alt="search icon" width='30px' height='30px'/>
                </div>
                <Image src={acc} alt="account icon" width='30px' height='30px'/>
                <div className={styles.location}>
                    <Image src={map} alt="map-pin icon" width='32px' height='24px'/>
                    <a className={styles.link}> Houston </a> 
                </div>
            </div>
        </div>
  )
}
