import React, { useContext } from 'react'
import MusicContext from './context/MusicContext'
import Metadata from './Metadata'

export default function MetadataContainer() {

  const { title, album, artist, genre, track, year } = useContext(MusicContext)

  return (
    <div>
      <Metadata name="Title" value={title} />
      <Metadata name="Artist" value={artist} />
      <Metadata name="Album" value={album} />
      <Metadata name="Track" value={track ?? "-"} />
      <Metadata name="Genre" value={genre ?? "-"} />
      <Metadata name="Year" value={year ?? "-"} />
    </div>
  )
}
