import styled from 'styled-components';

export const StyledInput = styled.input(
  ({ connection, inFocus }) => `
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: ${connection ? '100%' : 'initial'};
  max-width: 300px;
  margin: ${connection ? '10px 20px 10px 0' : '10px 20px'};
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 0;
  outline: none;
  border-bottom: 2px solid ${inFocus ? '#011e4c' : '#5dd0ea'};
  @media screen and (min-width: 700px) {
    margin-right: ${connection ? '20px' : 0};
  }
`
);
