import React, { useState, useEffect } from 'react';
import Input from '../Input';
import { Answer, Mark } from './styles';

function InputContainer(props) {
  const [answer, setAnswer] = useState('');
  const [right, toggleRight] = useState(false);
  const { which, answers, songNumber, roundNumber, marked, increaseRunningTotal } = props;

  function formatAnswer(answer) {
    return answer
      .trim()
      .toLowerCase()
      .replace(/[.,!?/'`’"()]|the |and |& /gi, '')
      .replace('-', ' ');
  }

  function useRightAnswer() {
    const rightAnswer = answers[roundNumber][songNumber][which];
    if (
      !right &&
      ((Array.isArray(rightAnswer) &&
        (formatAnswer(answer) === formatAnswer(rightAnswer[0]) ||
          formatAnswer(answer) === formatAnswer(rightAnswer[1]))) ||
        (!Array.isArray(rightAnswer) && formatAnswer(answer) === formatAnswer(rightAnswer)))
    ) {
      toggleRight(true);
      increaseRunningTotal();
    }
  }

  // Sets input value to empty when round number changes
  useEffect(() => {
    setAnswer('');
    toggleRight(false);
  }, [props.roundNumber]);

  return (
    <React.Fragment>
      {marked ? (
        <Answer>
          <i>{answer}</i>
          <Mark right={right}>{right ? '✔  ' : '✗  '}</Mark>
        </Answer>
      ) : (
        <Input
          onChange={e => setAnswer(e.target.value)}
          onBlur={useRightAnswer}
          placeholder={which === '0' ? 'Song' : which === '1' ? 'Artist' : ''}
        />
      )}
    </React.Fragment>
  );
}

export default InputContainer;
