import React, { useContext, useRef, useState } from 'react'

import ProgressBar from './ProgressBar';

import MusicContext from './context/MusicContext'
import { upload } from './api/app';
import { notify } from './helper/helpers';

import { Button } from '@mui/material'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const jsmediatags = window.jsmediatags;


export default function PickFile() {


    const { setUpdateAbility, setFileExists, title, setTitle, setAlbum, setArtist, setGenre, setYear, setTrack, setCover } = useContext(MusicContext)

    const [progressBar, setProgressBar] = useState(0)
    const fileInput = useRef()
    const handlePickFile = () => {
        fileInput.current.click()
    }

    const handleFile = async e => {
        let file = e.target.files[0];
        setProgressBar(0)
        let formData = new FormData();
        formData.append('music', file);

        let res = await upload(formData, setProgressBar);

        if (res.data.status === "success") {
            localStorage.setItem('fileID', res.data.fileID);
            getMetadata(file)
            setUpdateAbility(true)
            notify("Wonderful!", "Your music has been successfully uploaded", "success")
        }

    }


    const getMetadata = (file) => {
        jsmediatags.read(file, {
            // Success
            onSuccess: function (tag) {
                setFileExists(true)
                let name = file.name;
                let lastDot = name.lastIndexOf('.');
                const fileName = name.substring(0, lastDot);
                const fileExt = name.substring(lastDot + 1);
                let tags = tag.tags
                if (tags.picture) {
                    // Array buffer to base64
                    const data = tags.picture.data;
                    const format = tags.picture.format;
                    let base64String = "";
                    for (let i = 0; i < data.length; i++) {
                        base64String += String.fromCharCode(data[i]);
                    }
                    setCover({ format, base64String })
                } else {
                    setCover("")
                }
                tags.title ? setTitle(tags.title) : setTitle(fileName);
                tags.album ? setAlbum(tags.album) : setAlbum("-");
                tags.artist ? setArtist(tags.artist) : setArtist("-");
                tags.genre ? setGenre(tags.genre) : setGenre("-");
                tags.year ? setYear(tags.year) : setYear("-");
                tags.track ? setTrack(tags.track) : setTrack("-");

            },
            // Error
            onError: function (error) {
                setFileExists(false);
                console.log(error);
            }
        });

    }

    return (
        <div className="pick-file-container">
            <ProgressBar progressBar={progressBar} />
            <span className="upperCase">{title ? title : "pick your music and make it more awesome ..."}</span>
            <input ref={fileInput} className="dnone" type="file" accept=".mp3" onChange={e => handleFile(e)} />
            <Button variant="outlined" style={{ margin: "1rem" }} color="secondary" onClick={handlePickFile}>
                <AttachFileOutlinedIcon sx={{ fontSize: 20, marginRight: 2 }} />
                Choose</Button>
        </div>
    )
}
