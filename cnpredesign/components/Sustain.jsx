import React from 'react'
import Image from 'next/image';
import carousel from '../public/assets/Carousel.svg'
import styles from './Cost.module.css'

export default function Sustain({sus}) {
  const {title ,desc, pic} = sus.fields;
  return (
    <div className={styles.cost_container}>
        Providing Clean Energy
        <div className={styles.subheading}>
        We are committed to providing clear information about our company's environmental, social, <br/>
        and governance (ESG) priorities and key issues while also highlighting relevant data and our plans to <br/>
        achieve our net-zero clean energy objectives.
        </div>
        <div className={styles.pic}>
            <Image src={"https:" + pic.fields.file.url} width={1014} height={669} layout='intrinsic'/>
        </div>
            <div className={styles.info_card}>
                <div className={styles.carousel}>
                    <Image src={carousel} width={114} height={40.5}/>
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.desc}>
                    {desc}
                </div>
                <div className={styles.button}>
                    LEARN MORE
                </div>
            </div>
    </div>
  )
}
