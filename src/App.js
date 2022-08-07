import { useContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MusicContainer from './components/MusicContainer';

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ContextContainer from './components/container/ContextContainer';
import MusicContext from './components/context/MusicContext';

function App() {

  const { fileExists } = useContext(MusicContext);

  return (
    <div className="App">
      <ContextContainer>
        <Header />
        {fileExists ? <MusicContainer /> : null}
      </ContextContainer>
      <ReactNotifications />
    </div>
  );
}

export default App;
