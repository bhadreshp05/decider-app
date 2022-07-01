import { useContext, useEffect } from 'react';
import { DeciderContext } from '../context/index';

function Result() {
  const { getResult, result, reset } = useContext(DeciderContext);

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Your answer is:</h1>
      <hr />
      <div className='animate__animated animate__bounceIn'>
        <div className='viewer'>{result}</div>

        <button className='btn' onClick={reset}>
          Start again
        </button>

        <button className='btn' onClick={getResult}>
          Decide again
        </button>
      </div>
    </div>
  );
}

export default Result;
