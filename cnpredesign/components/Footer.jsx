import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import facebook from '../public/assets/Facebook.svg' 
import youtube from '../public/assets/Youtube.svg'
import twitter from '../public/assets/Twitter.svg'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.nav_info}>

                <div className={styles.links}>
                    <div className={styles.title}> About Us </div>
                    <a className={styles.sublink}> Company Overview </a>
                    <a className={styles.sublink}> Ethics & Compliance </a>
                    <a className={styles.sublink}> News </a>
                    <a className={styles.sublink}> Community </a>
                    <a className={styles.sublink}> Investor Relations </a>
                    <a className={styles.sublink}> Careers </a>
                </div>

                <div className={styles.links}>
                    <div className={styles.title}> Residential </div>
                    <a className={styles.sublink}> Sustainability </a>
                    <a className={styles.sublink}> Electric Utility </a>
                    <a className={styles.sublink}> Natural Gas </a>
                    <a className={styles.sublink}> Home Services </a>
                </div>

                <div className={styles.links}>
                    <div className={styles.title}> Business </div>
                    <a className={styles.sublink}> Small Business </a>
                    <a className={styles.sublink}> Commercial & Industrial </a>
                    <a className={styles.sublink}> Builders & Developers </a>
                    <a className={styles.sublink}> Competitive Retailers </a>
                    <a className={styles.sublink}> Mechanical Contractors </a>
                </div>

                <div className={styles.links}>
                    <div className={styles.title}> Account </div>
                    <a className={styles.sublink}> Billing & Payment </a>
                    <a className={styles.sublink}> Account Services </a>
                    <a className={styles.sublink}> Electric Outage Tracker </a>
                    <a className={styles.sublink}> New Customer </a>
                    <a className={styles.sublink}> Read Your Meter </a>
                    <a className={styles.sublink}> Transfer Services </a>
                </div>

                <div className={styles.links}>
                    <div className={styles.title}> Safety </div>
                    <a className={styles.sublink}> Storm Center </a>
                    <a className={styles.sublink}> Electric Safety </a>
                    <a className={styles.sublink}> Natural Gas Safety </a>
                    <a className={styles.sublink}> Emergencies </a>
                    <a className={styles.sublink}> Public Awareness </a>
                </div>

                <div className={styles.links}>
                    <div className={styles.title}> Save </div>
                    <a className={styles.sublink}> Electric Efficiency Program </a>
                    <a className={styles.sublink}> Energy Analyzer </a>
                    <a className={styles.sublink}> Build/Remodel information </a>
                    <a className={styles.sublink}> Energy-Efficient Appliances </a>
                    <a className={styles.sublink}> Efficiency Resources & Tips </a>
                </div>

        </div>
        <div className={styles.lower}>
            <div className={styles.copyright}>
                <div>Copyright © 2022 CenterPoint Energy</div>
                <div>
                    Use of this site constitutes agreement to our Online&nbsp;
                    <a className={styles.hyper}>Terms & Conditions</a> 
                    &nbsp;and&nbsp;
                    <a className={styles.hyper}>Privacy Policy</a>
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.connect}> CONNECT WITH US </div>
                <Image className={styles.pic} src={facebook} alt="down arrow" width='48px' height='48px' layout='fixed'/>
                <Image className={styles.pic} src={youtube} alt="down arrow" width='26px' height='26px' layout='fixed'/>
                <Image className={styles.pic} src={twitter} alt="down arrow" width='48px' height='48px' layout='fixed'/>
            </div>
        </div>

    </div>
  )
}
