import { useState } from 'react';
import './App.css';
import MusicContext from './components/context/MusicContext';
import Header from './components/Header';
import MusicContainer from './components/MusicContainer';

function App() {

  const [fileExists, setFileExists] = useState(false)
  const [title, setTitle] = useState("")
  const [album, setAlbum] = useState("")
  const [artist, setArtist] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState("")
  const [track, setTrack] = useState("")
  const [cover, setCover] = useState("")
  const [file, setFile] = useState(null)

  return (
    <div className="App">
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
        file,
        setFile
      }}>
        <Header />
        {fileExists ? <MusicContainer /> : ""}
      </MusicContext.Provider>
    </div>
  );
}

export default App;
