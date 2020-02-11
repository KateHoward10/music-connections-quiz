import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
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
