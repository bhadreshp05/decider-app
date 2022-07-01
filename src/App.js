import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Confirm from './components/confirm';
import Initial from './components/initial';
import Result from './components/result';

import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { DeciderContext } from './context';

function App() {
  const { screen } = useContext(DeciderContext);

  const handleComponent = () => {
    if (screen === 0) {
      return <Initial />;
    }
    if (screen === 1) {
      return <Confirm />;
    }
    if (screen === 2) {
      return <Result />;
    }
  };

  return (
    <>
      <div className='container'>{handleComponent()}</div>
      <ToastContainer />
    </>
  );
}

export default App;
