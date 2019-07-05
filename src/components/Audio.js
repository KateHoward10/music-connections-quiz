import React, { useState } from "react";

function Audio(props) {
  const [played, togglePlayed] = useState(false);
  const [playing, togglePlaying] = useState(false);
  const [progressLength, setProgressLength] = useState(0);
  const { roundNumber, songNumber, decreaseBonusPoints } = props;
  const song = require(`../music/${roundNumber}/${songNumber}.mp3`);
  let _audio = HTMLAudioElement;

  function play() {
    const { duration, currentTime } = _audio;
    setProgressLength((currentTime / duration) * 100);
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
      <div className="progress">
        <div
          style={{
            backgroundColor: "#279add",
            width: `${progressLength}%`,
            height: "10px"
          }}
        />
      </div>
      <audio
        ref={c => (_audio = c)}
        // This stops songs thinking they've already been played when loading a new round
        onLoadedData={() => togglePlayed(false)}
        onPause={() => togglePlaying(false)}
        onEnded={() => togglePlaying(false)}
        src={song}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Audio;
