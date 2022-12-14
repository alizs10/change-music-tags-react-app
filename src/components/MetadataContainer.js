import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import MusicContext from './context/MusicContext'
import Metadata from './Metadata'

import { update } from './api/app';
import EditTagsWindow from './EditTagsWindow';

export default function MetadataContainer() {

  const { title, setTitle, album, setAlbum, artist, setArtist, genre, setGenre, track, setTrack, year, setYear, cover, setCover, updateAbility, setUpdateAbility } = useContext(MusicContext)
  const [modalVisibility, setModalVisibility] = useState(false)



  const handleDownloadNewMusicFile = async (data) => {

    let formData = new FormData();
    formData.append('fileID', localStorage.getItem('fileID'));
    formData.append('title', data.title)
    formData.append('album', data.album)
    formData.append('artist', data.artist)
    formData.append('genre', data.genre)
    formData.append('track_number', data.track)
    formData.append('year', data.year)
    if (cover && !("format" in cover)) {
      formData.append('cover', cover)
    }



    let res = await update(formData)

    if (res && res.data.status === "success") {
      localStorage.removeItem('fileID')
      setUpdateAbility(false)
      setModalVisibility(false)
      let dlUrl = res.data.dlUrl
      window.open(dlUrl)
    }

  }


  return (
    <div>
      <Metadata name="Title" value={title} />
      <Metadata name="Artist" value={artist} />
      <Metadata name="Album" value={album} />
      <Metadata name="Track" value={track ?? "-"} />
      <Metadata name="Genre" value={genre ?? "-"} />
      <Metadata name="Year" value={year ?? "-"} />

      {updateAbility ? (
        <Button style={{ marginTop: "1rem" }} variant="outlined" onClick={() => setModalVisibility(true)}>Change Tags</Button>
      ) : null}


      {modalVisibility ? <EditTagsWindow handleDownloadNewMusicFile={handleDownloadNewMusicFile} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} /> : null}

    </div>
  )
}
