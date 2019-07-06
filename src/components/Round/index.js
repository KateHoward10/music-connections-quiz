import React, { useState } from "react";
import Song from "../Song";
import Input from "../Input";
import Button from "../Button";
import answers from "../../data/answers.js";
import { Container, ProgressContainer, ProgressLabel, End, Total, Mark } from "./styles";

function Round(props) {
  const [guess, setGuess] = useState("");
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
  const progressLength = (roundNumber / 16) * 100;

  function useConnectionGuess(e) {
    if (connectionButton) {
      setGuess(e.target.value.toLowerCase());
    }
  }

  function useGuessCheck() {
    const connection = answers[roundNumber][10][0];
    if (
      ((roundNumber === 3 ||
        roundNumber === 4 ||
        roundNumber === 5 ||
        roundNumber === 10 ||
        roundNumber === 11 ||
        roundNumber === 13) &&
        (guess.indexOf(connection[0]) > -1 ||
          guess.indexOf(connection[1]) > -1)) ||
      ((roundNumber === 6 || roundNumber === 7 || roundNumber === 14) &&
        (guess.indexOf(connection[0]) > -1 &&
          (guess.indexOf(connection[1]) > -1 ||
            guess.indexOf(connection[2]) > -1))) ||
      guess.indexOf(connection) > -1
    ) {
      increaseScore(bonusPoints);
      toggleCorrect(true);
    }
    toggleConnectionButton(false);
  }

  function increaseRunningTotal() {
    setRunningTotal(runningTotal + 1);
  }

  function mark() {
    increaseScore(runningTotal);
    toggleMarked(true);
  }

  function continueGame() {
    setGuess("");
    toggleConnectionButton(true);
    toggleCorrect(false);
    toggleMarked(false);
    increaseRoundNumber();
    resetBonusPoints();
  }

  return (
    <Container>
      <ProgressContainer>
        <div
          style={{
            backgroundColor: "#279add",
            width: `${progressLength}%`,
            height: "10px"
          }}
        />
      </ProgressContainer>
      <ProgressLabel>{roundNumber}/16 rounds completed</ProgressLabel>
      {roundNumber === 16 ? (
        <End>
          <p>Congratulations, you have reached the end of the quiz!</p>
          <strong>Final score: {score} / 480</strong>
          <p>
            Sadly, there is no share functionality (yet), but feel free to send
            me a screenshot.
          </p>
        </End>
      ) : (
        <div>
          <Total>
            {marked && <p>Score so far: {score} / 480</p>}
            <Button type="reset" onClick={resetGame}>
              RESET GAME
            </Button>
          </Total>
          <h2>Round {roundNumber + 1}</h2>
          {marked ? (
            <span>
              Connection: {answers[roundNumber][10][1]} ... <em>{guess}</em>{" "}
              <Mark colour={ correct ? "green" : "red"}>
                {correct ? "✔" : "✗"}{" "}
              </Mark>
            </span>
          ) : (
            bonusPoints < 11 && (
              <div className="question">
                <Input
                  connection
                  onChange={useConnectionGuess}
                  placeholder="Connection"
                />
                {connectionButton ? (
                  <Button onClick={useGuessCheck}>
                    Submit for a possible {bonusPoints} points
                  </Button>
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
              Continue >
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
