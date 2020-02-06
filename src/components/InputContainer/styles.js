import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 10px;
  font-size: 14px;
  min-width: 200px;
  padding: 5px;
  border: none;
  border-bottom: 2px solid #5dd0ea;
  flex: 0.5;
  ${props =>
    props.inFocus &&
    css`
      outline: none;
      border-bottom: 2px solid #011e4c;
    `}
`;

export const Answer = styled.p`
  margin-right: 20px;
  @media screen and (max-width: 700px) {
    align-self: flex-start;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

export const Mark = styled.span`
  margin-left: 5px;
`;
