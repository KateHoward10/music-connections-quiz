import React, { useState } from 'react';
import {
  Question,
  SongContainer,
  AudioContainer,
  Audio,
  SongNumber,
  Button,
  SongAnswer,
  Inputs,
  ProgressContainer,
  CircleContainer,
  ProgressBar
} from './styles';
import InputContainer from '../InputContainer';
import { FaPlay, FaPause } from 'react-icons/fa';

function Song(props) {
  const [played, togglePlayed] = useState(false);
  const [playing, togglePlaying] = useState(false);
  const [progressLength, setProgressLength] = useState(0);
  const { roundNumber, songNumber, decreaseBonusPoints, answers, marked, increaseRunningTotal } = props;
  const song = require(`../../music/${roundNumber}/${songNumber}.mp3`);
  let _audio = HTMLAudioElement;

  function play() {
    _audio.play();
    togglePlaying(true);
    if (!played) {
      togglePlayed(true);
      decreaseBonusPoints();
    }
  }

  function useProgressLength() {
    const { duration, currentTime } = _audio;
    if (duration && currentTime) {
      setProgressLength((currentTime / duration) * 100);
    }
  }

  return (
    <React.Fragment>
      <Question>
        <SongContainer>
          <AudioContainer>
            <SongNumber>{songNumber + 1})</SongNumber>
            <ProgressContainer>
              <CircleContainer width="50" height="50">
                <ProgressBar
                  stroke-width="4"
                  fill="transparent"
                  stroke="#324bd9"
                  r="22"
                  cx="25"
                  cy="25"
                  progressLength={progressLength}
                  circumference={48 * Math.PI}
                />
              </CircleContainer>
              {playing ? (
                <Button onClick={() => _audio.pause()}>
                  <FaPause />
                </Button>
              ) : (
                <Button onClick={play}>
                  <FaPlay />
                </Button>
              )}
            </ProgressContainer>
            <Audio
              ref={c => (_audio = c)}
              // This stops songs thinking they've already been played (or are still playing) when loading a new round
              onLoadedData={() => {
                setProgressLength(0);
                togglePlayed(false);
                togglePlaying(false);
              }}
              onPause={() => togglePlaying(false)}
              onEnded={() => togglePlaying(false)}
              onTimeUpdate={useProgressLength}
              src={song}
            />
          </AudioContainer>
          {marked && (
            <SongAnswer>
              {answers[roundNumber][songNumber][0].length === 2
                ? answers[roundNumber][songNumber][0][0]
                : answers[roundNumber][songNumber][0]}{' '}
              —{' '}
              {answers[roundNumber][songNumber][1].length === 2
                ? answers[roundNumber][songNumber][1][0]
                : answers[roundNumber][songNumber][1]}{' '}
            </SongAnswer>
          )}
        </SongContainer>
        <Inputs type={marked ? 'answers' : 'inputs'}>
          <InputContainer
            placeholder="Song"
            which="0"
            roundNumber={roundNumber}
            songNumber={songNumber}
            answers={answers}
            increaseRunningTotal={increaseRunningTotal}
            marked={marked}
          />
          <InputContainer
            placeholder="Artist"
            which="1"
            roundNumber={roundNumber}
            songNumber={songNumber}
            answers={answers}
            increaseRunningTotal={increaseRunningTotal}
            marked={marked}
          />
        </Inputs>
      </Question>
    </React.Fragment>
  );
}

export default Song;
