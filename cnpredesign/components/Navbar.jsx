import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import logo from '../public/assets/cnp.svg'
import arrow_down from '../public/assets/arrow-down.svg'
import account from '../public/assets/account.svg'
import map_pin from '../public/assets/map-pin.svg'
import search from '../public/assets/search.svg'


export default function Navbar() {
  return (
        <div className={styles.navigation_bar}>
            <div className={styles.left_nav_section}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" width='235px' height='82px' layout='fixed'/>
                </div>
                <div className={styles.divider}>
                    <div className={styles.version_type}>
                        RESIDENTIAL
                        <Image className={styles.pic} src={arrow_down} alt="down arrow" width='25px' height='20px' layout='fixed'/>
                    </div>
                </div>
            </div>

            <div className={styles.right_nav_section}>
                <div className={styles.nav_links}>
                    <div className={styles.nav_links}>
                        <div className={styles.link}>
                        Explore
                        </div>
                        <Image src={arrow_down} alt="down arrow" width='34px' height='24px' layout='fixed'/>
                    </div>
                    
                    <div className={styles.nav_links}>
                        <div className={styles.link}>
                            Contact
                        </div>
                        <Image src={arrow_down} alt="down arrow" width='34px' height='24px' layout='fixed'/>
                    </div>

                    <div className={styles.nav_links}>
                        <div className={styles.link}>
                            Sustainability &nbsp;
                        </div>
                    </div>

                    <Image src={search} alt="search icon" width='30px' height='30px' layout='fixed'/>
                    
                </div>
                <Image src={account} alt="account icon" width='30px' height='30px' layout='fixed'/>
                <div className={styles.location}>
                    <Image src={map_pin} alt="map_pin-pin icon" width='32px' height='24px' layout='fixed'/>
                    <div className={styles.link}> Houston </div> 
                </div>
            </div>
        </div>
  )
}
