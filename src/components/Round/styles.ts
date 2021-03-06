import styled from 'styled-components';

type IndicatorProps = {
  active: boolean;
}

type ProgressProps = {
  progressLength: number;
}

export const Container = styled.div`
  max-width: 720px;
  padding: 3vw;
  margin: auto;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoundIndicator = styled.div<IndicatorProps>(
  ({ active }) => `
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${active ? '#279add' : 'lightgrey'};
`);

export const Progress = styled.div<ProgressProps>(
  ({ progressLength }) => `
  background-color: #279add;
  width: ${progressLength}%;
  height: 4px;
  border-radius: 2px;
  margin-top: -4px;
  z-index: 10;
`);

export const ProgressLabel = styled.p`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0;
`;

export const End = styled.div`
  text-align: center;
  font-size: 24px;
  border: 2px solid lightgrey;
  margin: 50px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Score = styled.span`
  margin: 5px;
`;