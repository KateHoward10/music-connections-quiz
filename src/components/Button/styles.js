import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid ${props => (props.hovered ? 'grey' : 'transparent')};
  background-color: #5dd0ea;
  svg,
  span {
    margin: 0 2px;
  }
  ${props =>
    props.type === 'interrobang' &&
    css`
      width: 50px;
      height: 50px;
      float: right;
      font-size: 30px;
      border-radius: 50%;
    `};
  ${props =>
    props.type === 'right' &&
    css`
      float: right;
      margin: 20px 0;
    `};
  ${props =>
    props.type === 'reset' &&
    css`
      background-color: #324bd9;
      color: #fff;
    `};
`;
