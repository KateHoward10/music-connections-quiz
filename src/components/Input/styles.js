import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 10px 0 10px 20px;
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 0;
  outline: none;
  border-bottom: 2px solid ${props => (props.inFocus ? '#011e4c' : '#5dd0ea')}
  @media screen and (max-width: 700px) {
    margin-right: 20px;
    ${props =>
      props.connection &&
      css`
        margin-top: 3px;
        margin-right: 3px;
      `}
`;
