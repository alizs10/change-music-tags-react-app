import React, { useContext } from 'react'

import BrokenImage from './BrokenImage'
import Cover from './Cover'
import MetadataContainer from './MetadataContainer'

import MusicContext from './context/MusicContext'

export default function MusicContainer() {
  
  const { cover } = useContext(MusicContext)
  
  return (
    <div className="music-container">
      {cover ? <Cover cover={cover} /> : <BrokenImage />}
      <MetadataContainer />
    </div>
  )
}
