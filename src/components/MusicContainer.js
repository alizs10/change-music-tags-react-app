import React from 'react'
import BrokenImage from './BrokenImage'
import MetadataContainer from './MetadataContainer'
import styles from './MusicContainer.module.css'

export default function MusicContainer() {
  return (
    <div className={styles.container}>
      <BrokenImage />
      <MetadataContainer/>
    </div>
  )
}
