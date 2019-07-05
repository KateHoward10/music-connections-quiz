import React, { useState } from "react";

function Audio(props) {
  const [played, togglePlayed] = useState(false);
  const [playing, togglePlaying] = useState(false);
  const { roundNumber, songNumber, decreaseBonusPoints } = props;
  const song = require(`../music/${roundNumber}/${songNumber}.mp3`);
  let _audio = HTMLAudioElement;

  function play() {
    _audio.play();
    togglePlaying(true);
    if (!played) {
      togglePlayed(true);
      decreaseBonusPoints();
    }
  }

  return (
    <div>
      {playing ? (
        <button className="audio-button" onClick={() => _audio.pause()}>
          ❚❚
        </button>
      ) : (
        <button className="audio-button" onClick={play}>
          ▶
        </button>
      )}
      <audio
        ref={c => (_audio = c)}
        onLoadedData={() => togglePlayed(false)}
        onPause={() => togglePlaying(false)}
        onEnded={() => togglePlaying(false)}
        controls="controls"
        controlsList="nodownload"
        src={song}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Audio;
