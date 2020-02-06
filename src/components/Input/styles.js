import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 10px;
  font-size: 14px;
  min-width: 200px;
  padding: 5px;
  border: none;
  border-radius: 0;
  flex: 0.5;
  outline: none;
  border-bottom: 2px solid ${props => (props.inFocus ? '#011e4c' : '#5dd0ea')}
  @media screen and (max-width: 700px) {
    ${props =>
      props.connection
        ? css`
            margin-top: 3px;
            margin-right: 3px;
          `
        : css`
            flex: 1;
            width: 80%;
          `}
`;
