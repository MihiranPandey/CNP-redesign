import React from 'react'
import Image from 'next/image'
import styles from './Tools.module.css'

export default function Tools({self, power, transfer, report}) {
  return (
    <div className={styles.container}>
        Other Tools
        <div className={styles.subheading}>
            Feel in control of your experience with other useful tools we provide including our self-service options, power <br/> alert service, transfer service, and more.
        </div>
        <div className={styles.scroller}>

        <div className={styles.carousel}>

            <div className={styles.card}>
                <Image src={'https:' + self.fields.pic.fields.file.url} width={519} height={375}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {self.fields.title}
                    </div>
                    <div className={styles.desc}>
                        {self.fields.desc}
                    </div>
                    <div className={styles.button}>
                        LEARN MORE
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={'https:' + power.fields.pic.fields.file.url} width={519} height={374}/>
                <div className={styles.content}>   
                    <div className={styles.title}>
                        {power.fields.title}
                    </div>
                    <div className={styles.desc}>
                        {power.fields.desc}
                    </div>
                    <div className={styles.button}>
                        LEARN MORE
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={'https:' + transfer.fields.pic.fields.file.url} width={519} height={374}/>
                <div className={styles.content}>    
                    <div className={styles.title}>
                        {transfer.fields.title}
                    </div>
                    <div className={styles.desc}>
                        {transfer.fields.desc}
                    </div>
                    <div className={styles.button}>
                        LEARN MORE
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={'https:' + report.fields.pic.fields.file.url} width={519} height={374}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {report.fields.title}
                    </div>
                    <div className={styles.desc}>
                        {report.fields.desc}
                    </div>
                    <div className={styles.button}>
                        LEARN MORE
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}
