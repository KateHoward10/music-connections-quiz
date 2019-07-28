import styled from 'styled-components';

export const Question = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
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
  flex-direction: row;
  flex: 1;
  align-items: ${props => (props.type === 'inputs' ? 'center' : 'flex-start')};
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #324bd9;
  color: #fff;
  font-size: 20px;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 3px;
  border: 1px solid lightgrey;
`;

export const ProgressBar = styled.div`
  background-color: #324bd9;
  height: 3px;
  width: ${props => props.width}%;
`;
