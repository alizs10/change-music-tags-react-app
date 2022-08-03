import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import MusicContext from './context/MusicContext'
import Metadata from './Metadata'

export default function MetadataContainer() {

  const { title, album, artist, genre, track, year } = useContext(MusicContext)
  const [modalVisibility, setModalVisibility] = useState(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Metadata name="Title" value={title} />
      <Metadata name="Artist" value={artist} />
      <Metadata name="Album" value={album} />
      <Metadata name="Track" value={track ?? "-"} />
      <Metadata name="Genre" value={genre ?? "-"} />
      <Metadata name="Year" value={year ?? "-"} />

      <Button style={{ marginTop: "1rem" }} variant="outlined" onClick={() => setModalVisibility(true)}>Change Tags</Button>

      {modalVisibility ? <Modal
        open={modalVisibility}
        onClose={() => setModalVisibility(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> : null}

    </div>
  )
}
