import React, { useState, useEffect } from "react";

function Input(props) {
  const [answer, setAnswer] = useState("");
  const [right, toggleRight] = useState(false);
  const {
    which,
    answers,
    songNumber,
    roundNumber,
    marked,
    increaseScore
  } = props;

  function formatAnswer(answer) {
    return answer
      .toLowerCase()
      .replace(/[.,!?/'`’"()]|the |and |& /gi, "")
      .replace("-", " ");
  }

  function check() {
    const rightAnswer = answers[roundNumber][songNumber][which];
    if (
      !right &&
      ((Array.isArray(rightAnswer) &&
        (answer === formatAnswer(rightAnswer[0]) ||
          answer === formatAnswer(rightAnswer[1]))) ||
        (!Array.isArray(rightAnswer) && answer === formatAnswer(rightAnswer)))
    ) {
      toggleRight(true);
      increaseScore(1);
    }
  }

  useEffect(() => {
    setAnswer("");
    toggleRight(false);
  }, [props.roundNumber]);

  return (
    <div>
      {marked ? (
        <span className="individualAnswer">
          <i>{answer}</i>
          <span style={{ color: right ? "green" : "red" }}>
            {" "}
            {right ? "✔  " : "✗  "}
          </span>
        </span>
      ) : (
        <input
          className="songInput"
          type="text"
          onChange={e => setAnswer(formatAnswer(e.target.value))}
          onBlur={check}
          placeholder={which === "0" ? "Song" : which === "1" ? "Artist" : ""}
        />
      )}
    </div>
  );
}

export default Input;
