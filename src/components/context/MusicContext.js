import React from 'react'

const MusicContext = React.createContext({
    fileExists: "",
    setFileExists: () => { },
    title: "",
    setTitle: () => { },
    album: "",
    setAlbum: () => { },
    artist: "",
    setArtist: () => { },
    genre: "",
    setGenre: () => { },
    year: "",
    setYear: () => { },
    track: "",
    setTrack: () => { },
    cover: "",
    setCover: () => { },
})

export default MusicContext;