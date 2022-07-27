import React from 'react'
import Image from 'next/image'
import styles from './Assistance.module.css'
import logo from '../public/assets/cnp.svg'

export default function Assistance() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Need Assistance?
        </div>
        <div className={styles.desc}>
            Our Customer Service Department business hours are 
            <div className={styles.highlight}> 7 a.m. to 7 p.m., Monday through Friday </div> <br/> except holidays. 
            We also offer account self-service functions that are available 24/7.
        </div>
        <div className={styles.info}>
            <div className={styles.heading}>
                Electric Delivery

                <div className={styles.service}>
                    Customer Service
                    <div className={styles.number}>
                        713-207-2222
                    </div>
                </div>
                

                <div className={styles.service}>
                    Report Power Outage
                    <div className={styles.number}>
                        800-332-7143
                    </div>
                </div>

                <div className={styles.service}>
                    Report Electricity Theft
                    <div className={styles.number}>
                        877-570-5770
                    </div>
                </div>
            </div>

            <div className={styles.heading}>
                Natural Gas

                <div className={styles.service}>
                    Customer Service
                    <div className={styles.number}>
                        713-659-2111
                    </div>
                </div>

                <div className={styles.service}>
                    Report a Gas Leak
                    <div className={styles.number}>
                        888-876-5786
                    </div>
                </div>

            </div>
        </div>
        <div className={styles.foot}>
            <Image src={logo} alt="logo" width='225' height='80' layout='fixed'/>
            <div className={styles.address}>
                centerpoint energy, inc. houston, tx 77210-4981
            </div>
            <div className={styles.button}>
                CONTACT
            </div>
        </div>
    </div>
  )
}
