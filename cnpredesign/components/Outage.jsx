import React from 'react'
import Image from 'next/image'
import styles from './Outage.module.css'

export default function Outage({outage}) {
    const {title ,desc, pic} = outage.fields;

    return (
        <div className={styles.container}>
            {title}
            <div className={styles.img}>
                <Image src={'https:' + pic.fields.file.url} width={1797} height={1034}/>
            </div>
            <div className={styles.fade}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        {desc}
                    </div>
                    <div className={styles.button}>
                        LAUNCH
                    </div>
                </div>
            </div>
        
        </div>
    )
}
