import React, { useState } from "react";

function Audio(props) {
  const [played, togglePlayed] = useState(false);
  const { roundNumber, songNumber, decreaseBonusPoints } = props;
  const song = require(`../music/${roundNumber}/${songNumber}.mp3`);

  function play() {
    if (!played) {
      decreaseBonusPoints();
      togglePlayed(true);
    }
  }

  function reload() {
    togglePlayed(false);
  }

  return (
    <audio
      onPlay={play}
      onLoadedData={reload}
      controls="controls"
      controlsList="nodownload"
      src={song}
    />
  );
}

export default Audio;
