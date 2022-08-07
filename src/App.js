import { useContext } from 'react';

import Header from './components/Header';
import MusicContainer from './components/MusicContainer';
import ContextContainer from './components/container/ContextContainer';

import MusicContext from './components/context/MusicContext';

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {

  const { fileExists } = useContext(MusicContext);

  return (
    <div>
      <ReactNotifications />
      <ContextContainer>
        <Header />
        {fileExists ? <MusicContainer /> : null}
      </ContextContainer>
    </div>
  );
}

export default App;
