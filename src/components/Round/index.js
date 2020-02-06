import React, { useState } from 'react';
import Song from '../Song';
import Input from '../Input';
import Button from '../Button';
import answers from '../../data/answers.js';
import { Container, ProgressContainer, RoundIndicator, Progress, ProgressLabel, End, Total } from './styles';
import { FaUndo, FaCheck, FaTimes, FaChevronRight } from 'react-icons/fa';

function Round(props) {
  const [guess, setGuess] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);
  const [connectionButton, toggleConnectionButton] = useState(true);
  const [correct, toggleCorrect] = useState(false);
  const [marked, toggleMarked] = useState(false);
  const {
    roundNumber,
    score,
    bonusPoints,
    increaseScore,
    increaseRoundNumber,
    decreaseBonusPoints,
    resetBonusPoints,
    resetGame
  } = props;
  const songNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function useConnectionGuess(e) {
    if (connectionButton) {
      setGuess(e.target.value.toLowerCase());
    }
  }

  function useGuessCheck() {
    const connection = answers[roundNumber][10][0];
    function connectionGuessCorrect() {
      if (roundNumber === 6 || roundNumber === 7 || roundNumber === 14) {
        return (
          guess.indexOf(connection[0]) > -1 && (guess.indexOf(connection[1]) > -1 || guess.indexOf(connection[2]) > -1)
        );
      } else {
        return connection.some(option => guess.indexOf(option) > -1);
      }
    }

    if (connectionGuessCorrect()) {
      increaseRunningTotal(bonusPoints);
      toggleCorrect(true);
    }
    toggleConnectionButton(false);
  }

  function increaseRunningTotal(points) {
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
        {marked && <p>Score so far: {score} / 480</p>}
        <Button
          type="reset"
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
              <div className="question">
                <Input connection onChange={useConnectionGuess} placeholder="Connection" />
                {connectionButton ? (
                  <Button onClick={useGuessCheck}>Submit for a possible {bonusPoints} points</Button>
                ) : (
                  <span>Thanks for guessing!</span>
                )}
              </div>
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
            />
          ))}
          {marked ? (
            <Button type="right" onClick={continueGame}>
              <span>Continue</span>
              <FaChevronRight />
            </Button>
          ) : (
            <Button type="right" onClick={mark}>
              Mark Answers
            </Button>
          )}
        </div>
      )}
    </Container>
  );
}

export default Round;
