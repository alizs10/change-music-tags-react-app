import React, { useContext } from 'react'
import BrokenImage from './BrokenImage'
import MusicContext from './context/MusicContext'
import Cover from './Cover'
import MetadataContainer from './MetadataContainer'
import styles from './MusicContainer.module.css'

export default function MusicContainer() {
  const { cover } = useContext(MusicContext)
  return (
    <div className={styles.container}>
      {cover ? <Cover cover={cover} /> : <BrokenImage />}
      <MetadataContainer />
    </div>
  )
}
