import { createContext, useState } from 'react';
export const DeciderContext = createContext();

const list = [
  'Yes',
  'No',
  'Maybe',
  'Not sure..try again',
  'Ask a friend',
  'Call the police',
];

export default function Decider({ children }) {
  const [screen, setScreen] = useState(0);
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const getRandomValue = () => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
  };

  const getResult = () => {
    let rand = getRandomValue();

    if (result !== '') {
      while (rand === result) {
        rand = getRandomValue();
      }
    }

    setResult(rand);
  };

  const reset = () => {
    setScreen(0);
    setQuestion('');
    setResult('');
  };

  return (
    <DeciderContext.Provider
      value={{
        screen,
        question,
        setScreen,
        setQuestion,
        result,
        getResult,
        reset,
      }}
    >
      {children}
    </DeciderContext.Provider>
  );
}
