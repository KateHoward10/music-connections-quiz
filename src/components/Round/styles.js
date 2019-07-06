import styled from "styled-components";

export const Container = styled.div`
  padding: 4vw;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const ProgressLabel = styled.p`
  font-size: 12px;
  margin-top: 2px;
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

export const Mark = styled.span`
  color: ${props => props.colour};
`;