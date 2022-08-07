import React, { useState } from 'react'
import MusicContext from '../context/MusicContext'

function ContextContainer({ children }) {
    const [fileExists, setFileExists] = useState(false)
    const [title, setTitle] = useState("")
    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    const [track, setTrack] = useState("")
    const [cover, setCover] = useState("")
    const [updateAbility, setUpdateAbility] = useState(true)

    return (
        <MusicContext.Provider value={{
            fileExists,
            setFileExists,
            title,
            setTitle,
            album,
            setAlbum,
            artist,
            setArtist,
            genre,
            setGenre,
            year,
            setYear,
            track,
            setTrack,
            cover,
            setCover,
            updateAbility,
            setUpdateAbility
        }}>
            {children}
        </MusicContext.Provider>
    )
}

export default ContextContainer