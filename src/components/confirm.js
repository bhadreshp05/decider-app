import { useContext } from 'react';
import { DeciderContext } from '../context/index';

function Confirm() {
  const { question, setScreen, setQuestion } = useContext(DeciderContext);

  const goNext = () => {
    setScreen(2);
  };

  const goBack = () => {
    setScreen(0);
    setQuestion('');
  };

  return (
    <div>
      <h1>Your question is:</h1>
      <hr />
      <div className='animate__animated animate__bounceIn'>
        <div className='viewer'>{question}</div>

        <button className='btn' onClick={goNext}>
          Decide it
        </button>

        <button className='btn' onClick={goBack}>
          Ask a new question
        </button>
      </div>
    </div>
  );
}

export default Confirm;
