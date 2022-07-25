import React from 'react'
import Image from 'next/image'
import styles from './Mast.module.css'


export default function Mast({data}) {
  const {title ,desc, pic} = data.fields;
  return (
    <div className={styles.mastpage}>
      <div className={styles.mast_text}>
        <div className={styles.headline}>
          {title}
        </div>
        <div className={styles.subheader}>
          {desc}
        </div>
        <div className={styles.button}>
          LEARN MORE
        </div>

      </div>
      <Image className={styles.pic}
                 src={'https:' + pic.fields.file.url}
                 width={923}
                 height={793}
      />

    </div>
    
  )
}
