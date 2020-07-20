import styled, { css } from 'styled-components';

type FormProps = {
  scrolled: boolean;
}

export const StyledForm = styled.form<FormProps>(
  ({ scrolled }) => `
  padding: 10px;
  z-index: 200;
  background: #FFF;
  ${scrolled &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 0 0 5px lightgrey;
      width: 100vw;
    `}
`);

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media screen and (min-width: 700px) {
    width: 100%;
    max-width: 720px;
    margin: auto;
  }
`;
