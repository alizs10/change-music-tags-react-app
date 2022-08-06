import React, { useContext } from 'react'

import { Box, Button, Grid, ListItem, Modal, TextField } from '@mui/material'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ErrorMessage, Form, Formik, useField } from 'formik';
import MusicContext from './context/MusicContext';

import * as yup from 'yup';


function EditTagsWindow({ modalVisibility, setModalVisibility }) {

    const { title, album, artist, genre, track, year, cover, setCover } = useContext(MusicContext)

    const TagTextField = ({ label, ...props }) => {

        const [field, meta] = useField(props)
        const errorText = meta.error && meta.touched ? meta.error : "";

        return (
            <TextField {...field} error={meta.error && meta.touched} label={label} value={meta.value} {...props} fullWidth variant="outlined" helperText={errorText} />
        )
    }




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

    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
    const FILE_SIZE = "2000000";
    const validationSchema = yup.object({
        title: yup.string().required().max(99),
        album: yup.string().required().max(55),
        artist: yup.string().required().max(99),
        track: yup.number().default(0).min(0).max(1000),
        year: yup.number().required().min(1700).max(2050),
        genre: yup.string().required(),



    })






    return (
        <div>


            <Formik
                initialValues={{ title, album, artist, track, year, genre }}
                onSubmit={(data) => {
                    console.log(data);
                }}
                validationSchema={validationSchema}
                validate={() => {
                    const errors = {};
                    if (cover && !(SUPPORTED_FORMATS.includes(cover.type))) {
                        errors.cover = "Image Format not supported. supported formats are jpg,jpeg"
                    }

                    else if (cover.size > 2000000) {
                        errors.cover = "Image is too large. maximum image size is 2 mb"
                    }
                    return errors;
                }}
            >
                {({
                    isSubmitting,
                    errors,
                    /* and other goodies */
                }) => (
                    <Modal
                        open={modalVisibility}
                        onClose={() => setModalVisibility(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Form>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12}>
                                        <ListItem>

                                            Change Tags
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="title" type="text" label="Title" />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="album" type="text" label="Album" />
                                        </ListItem>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="artist" type="text" label="Artist" />
                                        </ListItem>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="genre" type="text" label="Genre" />
                                        </ListItem>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="track" type="text" label="Track" />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem>

                                            <TagTextField name="year" type="text" label="Year" />
                                        </ListItem>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                component="label"
                                                style={{ padding: "14px" }}
                                                color={errors.cover ? "error" : "primary" }
                                            >
                                                <ImageOutlinedIcon style={{ marginRight: "1rem" }} />
                                                {(cover && !("format" in cover) ? cover.name : "Upload Cover Art")}
                                                <input type="file" name="cover" onChange={e => setCover(e.target.files[0])} accept=".jpg,.jpeg" hidden />
                                            </Button>
                                        </ListItem>
                                    </Grid>
                                    {errors.cover ? (
                                        <Grid item xs={12}>
                                            <ListItem sx={{ color: 'red', fontSize: ".7rem" }}>
                                                <InfoOutlinedIcon sx={{ marginRight: ".5rem" ,fontSize: "1rem" }} />
                                                {errors.cover}
                                            </ListItem>
                                        </Grid>

                                    ) : null}
                                    <Grid item xs={12}>
                                        <ListItem>
                                            <Button type="submit" variant="contained" fullWidth color='success'
                                                style={{ padding: "14px" }} disabled={isSubmitting}>
                                                <CloudDownloadOutlinedIcon style={{ marginRight: "1rem" }} />
                                                Save And Download
                                            </Button>
                                        </ListItem>

                                    </Grid>

                                </Grid>
                            </Form>
                        </Box>
                    </Modal>
                )
                }
            </Formik >
        </div >
    )
}

export default EditTagsWindow


