import React, { useState, useEffect } from 'react';
import Input from '../Input';
import { Container, Answer, Mark } from './styles';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface Props {
  which: string,
  answers: Array<any>,
  songNumber: number,
  roundNumber: number,
  marked: boolean,
  increaseRunningTotal: (points: number) => void
}

const InputContainer: React.FC<Props> = ({ which, answers, songNumber, roundNumber, marked, increaseRunningTotal }) => {
  const [answer, setAnswer] = useState<string>('');
  const [right, toggleRight] = useState<boolean>(false);

  function formatAnswer(answer: string) {
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
      increaseRunningTotal(1);
    }
  }

  // Sets input value to empty when round number changes
  useEffect(() => {
    setAnswer('');
    toggleRight(false);
  }, [roundNumber]);

  return (
    <Container>
      {marked ? (
        <Answer>
          <i>{answer}</i>
          <Mark>{right ? <FaCheck color="green" /> : <FaTimes color="red" />}</Mark>
        </Answer>
      ) : (
        <Input
          onChange={e => setAnswer(e.target.value)}
          onBlur={useRightAnswer}
          placeholder={which === '0' ? 'Song' : which === '1' ? 'Artist' : ''}
        />
      )}
    </Container>
  );
}

export default InputContainer;
