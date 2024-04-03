import React, { useState } from 'react';
import ConnectionForm from '../ConnectionForm';
import Song from '../Song';
import Button from '../Button';
import answers from '../../data/answers';
import { Container, ProgressContainer, RoundIndicator, Progress, ProgressLabel, End, Total, Score } from './styles';
import { FaUndo, FaCheck, FaTimes, FaChevronRight } from 'react-icons/fa';

interface Props {
  roundNumber: number,
  score: number,
  bonusPoints: number,
  increaseScore: (points: number) => void,
  increaseRoundNumber: () => void,
  decreaseBonusPoints: () => void,
  resetBonusPoints: () => void,
  resetGame: () => void,
  scrolled: boolean
}

const Round: React.FC<Props> = ({
    roundNumber,
    score,
    bonusPoints,
    increaseScore,
    increaseRoundNumber,
    decreaseBonusPoints,
    resetBonusPoints,
    resetGame,
    scrolled
  }) => {
  const [guess, setGuess] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);
  const [connectionButton, toggleConnectionButton] = useState(true);
  const [correct, toggleCorrect] = useState(false);
  const [marked, toggleMarked] = useState(false);
  const [songPlaying, setSongPlaying] = useState<number | null>(null);
  const songNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function useConnectionGuess(e: React.ChangeEvent<HTMLInputElement>) {
    if (connectionButton) {
      setGuess(e.target.value.toLowerCase());
    }
  }

  function useGuessCheck(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const connection = answers[roundNumber][10][0];
    function connectionGuessCorrect() {
      if (roundNumber === 6 || roundNumber === 7 || roundNumber === 14) {
        return (
          guess.indexOf(connection[0]) > -1 && (guess.indexOf(connection[1]) > -1 || guess.indexOf(connection[2]) > -1)
        );
      } else if (Array.isArray(connection)) {
        return connection.some((option: string) => guess.indexOf(option) > -1);
      }
    }

    if (connectionGuessCorrect()) {
      increaseRunningTotal(bonusPoints);
      toggleCorrect(true);
    }
    toggleConnectionButton(false);
  }

  function increaseRunningTotal(points: number) {
    setRunningTotal(runningTotal + points);
  }

  function mark() {
    increaseScore(runningTotal);
    toggleMarked(true);
    window.scroll(0, 0);
  }

  function continueGame() {
    setGuess('');
    setRunningTotal(0);
    toggleConnectionButton(true);
    toggleCorrect(false);
    toggleMarked(false);
    increaseRoundNumber();
    resetBonusPoints();
    window.scroll(0, 0);
  }

  function reset() {
    setGuess('');
    setRunningTotal(0);
    toggleConnectionButton(false);
    toggleCorrect(false);
    toggleMarked(false);
    resetBonusPoints();
    resetGame();
  }

  return (
    <Container>
      <ProgressContainer>
        {answers.map((round, index) => (
          <RoundIndicator key={index} active={index < roundNumber || roundNumber === 16} />
        ))}
      </ProgressContainer>
      <Progress progressLength={(roundNumber / 15) * 100} />
      <ProgressLabel>{roundNumber}/16 rounds completed</ProgressLabel>
      <Total>
        {marked && <Score>Score so far: {score} / 480</Score>}
        <Button
          variant="reset"
          onClick={() => {
            reset();
            window.location.reload();
          }}
        >
          <FaUndo />
          <span>RESET GAME</span>
        </Button>
      </Total>
      {roundNumber === 16 ? (
        <End>
          <p>Congratulations, you have reached the end of the quiz!</p>
          <strong>Final score: {score} / 480</strong>
          <p>Sadly, there is no share functionality (yet), but feel free to send me a screenshot.</p>
        </End>
      ) : (
        <div>
          <h2>Round {roundNumber + 1}</h2>
          {marked ? (
            <span>
              Connection: {answers[roundNumber][10][1]} ... <em>{guess}</em>{' '}
              <span>{correct ? <FaCheck color="green" /> : <FaTimes color="red" />} </span>
            </span>
          ) : (
            bonusPoints < 11 && (
              <ConnectionForm
                onSubmit={useGuessCheck}
                onChange={useConnectionGuess}
                buttonVisible={connectionButton}
                bonusPoints={bonusPoints}
                scrolled={scrolled}
              />
            )
          )}
          {songNumbers.map((songNumber, index) => (
            <Song
              key={index}
              roundNumber={roundNumber}
              songNumber={songNumber}
              decreaseBonusPoints={decreaseBonusPoints}
              answers={answers}
              marked={marked}
              increaseRunningTotal={increaseRunningTotal}
              songPlaying={songPlaying}
              setSongPlaying={setSongPlaying}
            />
          ))}
          {marked ? (
            <Button variant="right" onClick={continueGame}>
              <span>Continue</span>
              <FaChevronRight />
            </Button>
          ) : (
            <Button variant="right" onClick={mark}>
              Mark Answers
            </Button>
          )}
        </div>
      )}
    </Container>
  );
}

export default Round;
