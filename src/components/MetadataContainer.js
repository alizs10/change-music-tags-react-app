import { Box, Button, Grid, ListItem, Modal, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import MusicContext from './context/MusicContext'
import Metadata from './Metadata'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
export default function MetadataContainer() {

  const { title, album, artist, genre, track, year } = useContext(MusicContext)
  const [modalVisibility, setModalVisibility] = useState(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
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
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <ListItem>Change Tags</ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" value={title} />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField fullWidth id="outlined-basic" label="Album" variant="outlined" value={album} />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField fullWidth id="outlined-basic" label="Artist" variant="outlined" value={artist} />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField fullWidth id="outlined-basic" label="Track" variant="outlined" value={track} />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField fullWidth id="outlined-basic" label="Year" variant="outlined" value={year} />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <Button
                  fullWidth
                  variant="outlined"
                  component="label"
                  style={{padding:"14px"}}
                >
                  <ImageOutlinedIcon style={{marginRight: "1rem"}}/>
                  Upload Cover Art
                  <input
                    type="file"
                    hidden
                  />
                </Button>

              </ListItem>
            </Grid
            >
            <Grid item xs={12}>
              <ListItem>
                <Button
                  fullWidth
                  variant="outlined"
                  component="label"
                  color='success'
                  style={{padding:"14px"}}
                >
                  <CloudDownloadOutlinedIcon style={{marginRight: "1rem"}}/>
                  Save And Download
                  <input
                    type="file"
                    hidden
                  />
                </Button>

              </ListItem>
            </Grid>


          </Grid>
        </Box>
      </Modal> : null}

    </div>
  )
}
