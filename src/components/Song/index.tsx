import React, { useState, useRef, useEffect } from 'react';
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

interface Props {
  roundNumber: number,
  songNumber: number,
  decreaseBonusPoints: () => void,
  answers: Array<any>,
  marked: boolean,
  increaseRunningTotal: (points: number) => void,
  songPlaying: number | null,
  setSongPlaying: (songPlaying: number | null) => void
}

const Song: React.FC<Props> = ({
  roundNumber,
  songNumber,
  decreaseBonusPoints,
  answers,
  marked,
  increaseRunningTotal,
  songPlaying,
  setSongPlaying
}) => {
  const [played, togglePlayed] = useState<boolean>(false);
  const [isPlaying, togglePlaying] = useState<boolean>(false);
  const [progressLength, setProgressLength] = useState<number>(0);
  const song = require(`../../music/${roundNumber}/${songNumber}.mp3`).default;
  let audioRef = useRef<HTMLAudioElement>(null);

  function play() {
    setSongPlaying(songNumber);
    if (!played) {
      togglePlayed(true);
      decreaseBonusPoints();
    }
  }

  function useProgressLength() {
    if (audioRef.current) {
      const { duration, currentTime } = audioRef.current;
      if (duration && currentTime) {
        setProgressLength((currentTime / duration) * 100);
      }
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      if (songNumber === songPlaying) {
        audioRef.current.play();
        togglePlaying(true);
      } else {
        audioRef.current.pause();
        togglePlaying(false);
      }
    }
  }, [audioRef, songNumber, songPlaying])

  return (
    <React.Fragment>
      <Question>
        <SongContainer>
          <AudioContainer>
            <SongNumber>{songNumber + 1})</SongNumber>
            <ProgressContainer>
              <CircleContainer width="50" height="50">
                <ProgressBar
                  fill="transparent"
                  stroke="#324bd9"
                  r="22"
                  cx="25"
                  cy="25"
                  progressLength={progressLength}
                  circumference={48 * Math.PI}
                />
              </CircleContainer>
              {isPlaying ? (
                <Button onClick={() => audioRef.current && audioRef.current.pause()}>
                  <FaPause />
                </Button>
              ) : (
                <Button onClick={play}>
                  <FaPlay />
                </Button>
              )}
            </ProgressContainer>
            <Audio
              ref={audioRef}
              // This stops songs thinking they've already been played (or are still playing) when loading a new round
              onLoadedData={() => {
                setProgressLength(0);
                togglePlayed(false);
                togglePlaying(false);
              }}
              onPause={() => togglePlaying(false)}
              onEnded={() => {
                togglePlaying(false);
                setSongPlaying(null);
              }}
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
            which="0"
            roundNumber={roundNumber}
            songNumber={songNumber}
            answers={answers}
            increaseRunningTotal={increaseRunningTotal}
            marked={marked}
          />
          <InputContainer
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
