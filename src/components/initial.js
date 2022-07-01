import { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { DeciderContext } from '../context';
function Initial() {
  const { setScreen, setQuestion } = useContext(DeciderContext);
  const [showNext, setShowNext] = useState(false);
  const textInput = useRef();

  const handleOnChange = () => {
    if (textInput.current.value.length >= 0) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  };

  const handleSubmit = () => {
    const value = textInput.current.value;
    if (value.length >= 30) {
      toast.error('Too long!', {
        position: 'top-right',
      });
      return false;
    }
    setScreen(1);
    setQuestion(value);
  };

  return (
    <div>
      <h1>Ask a question</h1>

      <input
        ref={textInput}
        type='text'
        name='question'
        className='form-control'
        onChange={handleOnChange}
      />

      {showNext && (
        <button
          className='btn animate__animated animate__fadeIn'
          onClick={handleSubmit}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Initial;
