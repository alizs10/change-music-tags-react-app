import React, { useContext } from 'react'

import BrokenImage from './BrokenImage'
import Cover from './Cover'
import MetadataContainer from './MetadataContainer'

import MusicContext from './context/MusicContext'

export default function MusicContainer() {
  
  const { fileExists, cover } = useContext(MusicContext)
  
  return fileExists ? (
    <div className="music-container">
      {cover ? <Cover cover={cover} /> : <BrokenImage />}
      <MetadataContainer />
    </div>
  ) : null
}
