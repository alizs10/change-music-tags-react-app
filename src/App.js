import { useContext } from 'react';

import Header from './components/Header';
import MusicContainer from './components/MusicContainer';
import ContextContainer from './components/container/ContextContainer';

import MusicContext from './components/context/MusicContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { fileExists } = useContext(MusicContext);

  return (
    <div>
      <ToastContainer />
      <ContextContainer>
        <Header />
        {fileExists ? <MusicContainer /> : null}
      </ContextContainer>
    </div>
  );
}

export default App;
