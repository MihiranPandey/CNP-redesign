import React from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

export default function Services({electric, gas, home}) {
  return (
    <div className={styles.services}>
        What We Provide
        <div className={styles.service_list}>
            <div className={styles.electric}>
                <Image src={'https:' + electric.fields.pic.fields.file.url} width={226} height={226}/>
            
                <div className={styles.title}>
                    {electric.fields.title}
                </div>
                <div className={styles.desc}>
                    {electric.fields.desc}
                </div>
                <div className={styles.button}>
                    LEARN MORE
                </div>
            </div>

            <div className={styles.gas}>
                <Image src={'https:' + gas.fields.pic.fields.file.url} width={226} height={226}/>
                <div className={styles.title}>
                    {gas.fields.title}
                </div>
                <div className={styles.desc}>
                    {gas.fields.desc}
                </div>
                <div className={styles.button}>
                    LEARN MORE
                </div>
            </div>

            <div className={styles.home}>
                <Image src={'https:' + home.fields.pic.fields.file.url} width={226} height={226}/>
                <div className={styles.title}>
                    {home.fields.title}
                </div>
                <div className={styles.desc}>
                    {home.fields.desc}
                </div>
                <div className={styles.button}>
                    LEARN MORE
                </div>
            </div>
        </div>
    </div>
  )
}
