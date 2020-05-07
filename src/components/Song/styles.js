import styled from 'styled-components';

export const Question = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AudioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Audio = styled.audio`
  display: none;
`;

export const SongNumber = styled.span`
  color: #324bd9;
  margin-right: 5px;
`;

export const SongAnswer = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  font-size: 13px;
  @media screen and (max-width: 700px) {
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${props => (props.type === 'answers' ? '20px' : 0)};
  @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: ${props => (props.type === 'inputs' ? 'center' : 'flex-start')};
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5dd0ea;
  color: #fff;
  font-size: 16px;
  padding: 0;
  border: 0;
  z-index: 100;
  position: absolute;
  top: 5px;
  left: 5px;
  outline: none;
  cursor: pointer;
`;

export const ProgressContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  background: lightgrey;
`;

export const CircleContainer = styled.svg`
  transform: rotate(-90deg);
`;

export const ProgressBar = styled.circle.attrs(({ circumference, progressLength }) => ({
  strokeDasharray: `${circumference} ${circumference}`,
  strokeDashoffset: `${circumference - (progressLength / 100) * circumference}`
}))`
  stroke-width: 5px;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s;
`;
