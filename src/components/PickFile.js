import { Button } from '@mui/material'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import React, { useRef } from 'react'
import styles from './PickFile.module.css'

const jsmediatags = window.jsmediatags;

export default function PickFile() {

    const fileInput = useRef()
    const handlePickFile = () => {
        fileInput.current.click()
    }

    const handleFile = (e) => {
        let file = e.target.files[0];
        getMetadata(file)
    }

    const getMetadata = (file) => {
        jsmediatags.read(file, {
            // Success
            onSuccess: function (tag) {
                // Array buffer to base64

                console.log(tag);
            },
            // Error
            onError: function (error) {
                console.log(error);
            }
        });

    }

    return (
        <div className={styles.container}>

            <span className={styles.upperCase}>pick your music and make it awesome ...</span>
            <input ref={fileInput} className={styles.dnone} type="file" accept=".mp3" onChange={e => handleFile(e)} />
            <Button variant="outlined" color="secondary" onClick={handlePickFile}>
                <AttachFileOutlinedIcon sx={{ fontSize: 20, marginRight: 2 }} />
                Choose</Button>
        </div>
    )
}
