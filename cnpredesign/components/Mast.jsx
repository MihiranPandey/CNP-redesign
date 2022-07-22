import React from 'react'
import Image from 'next/image';
import Button from './Button.jsx'
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
        <Button/>

      </div>
      <Image className={styles.pic}
                 src={'https:' + pic.fields.file.url}
                 width={923}
                 height={793}
      />

    </div>
    
  )
}
