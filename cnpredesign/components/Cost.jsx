import React from 'react'
import Image from 'next/image';
import carousel from '../public/assets/Carousel.svg'
import styles from './Cost.module.css'

export default function Cost({cost}) {
const {title ,desc, pic} = cost.fields;
  return (
    <div className={styles.cost_container}>
        Complete Cost Transparency
        <div className={styles.subheading}>
            We want to make energy as affordable as possible for our customers. 
            Feel confident in what you pay by utilizing our budgeting tools and resources, 
            all with transparent pricing from us.
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
