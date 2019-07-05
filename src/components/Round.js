import React, { useState } from "react";
import Input from "./Input.js";
import Audio from "./Audio.js";
import answers from "../data/answers.js";

function Round(props) {
  const [guess, setGuess] = useState("");
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

  function update(e) {
    if (connectionButton) {
      setGuess(e.target.value.toLowerCase());
    }
  }

  function setConnectionCorrect() {
    increaseScore(bonusPoints);
    toggleCorrect(true);
  }

  function check() {
    const connection = answers[roundNumber][10][0];
    if (
      roundNumber === 3 ||
      roundNumber === 4 ||
      roundNumber === 5 ||
      roundNumber === 10 ||
      roundNumber === 11 ||
      roundNumber === 13
    ) {
      if (
        guess.indexOf(connection[0]) > -1 ||
        guess.indexOf(connection[1]) > -1
      ) {
        setConnectionCorrect();
      }
    } else if (roundNumber === 6 || roundNumber === 7 || roundNumber === 14) {
      if (
        guess.indexOf(connection[0]) > -1 &&
        (guess.indexOf(connection[1]) > -1 || guess.indexOf(connection[2]) > -1)
      ) {
        setConnectionCorrect();
      }
    } else {
      if (guess.indexOf(connection) > -1) {
        setConnectionCorrect();
      }
    }
    toggleConnectionButton(false);
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
    <div className="round">
      <div className="progress">
        <div
          style={{
            backgroundColor: "#279add",
            width: `${progressLength}%`,
            height: "10px"
          }}
        />
      </div>
      <p className="progress-label">{roundNumber}/16 rounds completed</p>
      {roundNumber === 16 ? (
        <div className="end">
          <p>Congratulations, you have reached the end of the quiz!</p>
          <p style={{ fontWeight: "bold" }}>Final score: {score} / 480</p>
          <p>
            Sadly, there is no share functionality (yet), but feel free to send
            me a screenshot.
          </p>
        </div>
      ) : (
        <div>
          <div className="total">
            <p>Score: {score} / 480</p>
            <button className="reset-button" onClick={resetGame}>
              RESET GAME
            </button>
          </div>
          <h2>Round {roundNumber + 1}</h2>
          {marked ? (
            <span>
              Connection: {answers[roundNumber][10][1]} ... <em>{guess}</em>{" "}
              <span style={{ color: correct ? "green" : "red" }}>
                {correct ? "✔" : "✗"}{" "}
              </span>
            </span>
          ) : (
            bonusPoints < 11 && (
              <div className="question">
                <input
                  type="text"
                  className="connectionInput"
                  onChange={update}
                  placeholder="Connection"
                />
                {connectionButton ? (
                  <button className="connectionButton" onClick={check}>
                    Submit for a possible {bonusPoints} points
                  </button>
                ) : (
                  <span>Thanks for guessing!</span>
                )}
              </div>
            )
          )}
          {songNumbers.map((songNumber, index) => (
            <div className="question" key={index}>
              <div className="song">
                <div className="audio-with-number">
                  <span className="song-number">{songNumber + 1})</span>
                  <Audio
                    roundNumber={roundNumber}
                    songNumber={songNumber}
                    decreaseBonusPoints={decreaseBonusPoints}
                  />
                </div>
                {marked ? (
                  <div className="songAnswer">
                    {answers[roundNumber][songNumber][0].length === 2
                      ? answers[roundNumber][songNumber][0][0]
                      : answers[roundNumber][songNumber][0]}{" "}
                    —{" "}
                    {answers[roundNumber][songNumber][1].length === 2
                      ? answers[roundNumber][songNumber][1][0]
                      : answers[roundNumber][songNumber][1]}{" "}
                  </div>
                ) : null}
              </div>
              <div className={marked ? "markedAnswers" : "inputs"}>
                <Input
                  placeholder="Song"
                  which="0"
                  roundNumber={roundNumber}
                  songNumber={songNumber}
                  answers={answers}
                  increaseScore={increaseScore}
                  marked={marked}
                />
                <Input
                  placeholder="Artist"
                  which="1"
                  roundNumber={roundNumber}
                  songNumber={songNumber}
                  answers={answers}
                  increaseScore={increaseScore}
                  marked={marked}
                />
              </div>
            </div>
          ))}
          {marked ? (
            <button className="continue" onClick={continueGame}>
              Continue >
            </button>
          ) : (
            <button className="markAnswers" onClick={() => toggleMarked(true)}>
              Mark Answers
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Round;
