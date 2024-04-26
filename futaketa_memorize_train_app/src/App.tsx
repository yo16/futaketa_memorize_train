import React, {useState} from 'react';
import './App.css';

import Num2Rogo from './components/num2Rogo';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(getRandNum());

  function handleOnShowAnswer() {
    setShowAnswer(true);
  }
  function handleOnNext() {
    setShowAnswer(false);
    setCurrentNumber(getRandNum);
  }
  function getRandNum() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <>
      <Num2Rogo
        dispInt={currentNumber}
        showAnswer={showAnswer}
      />
      <button
        onClick={handleOnShowAnswer}
      >Show Answer</button>
      <button
        onClick={handleOnNext}
      >Next</button>
    </>
  );
}

export default App;
