import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { StyledForm, Container } from './styles';

interface Props {
  onSubmit: (e: any) => void,
  onChange: (e: any) => void,
  buttonVisible: boolean,
  bonusPoints: number,
  scrolled: boolean
}

const ConnectionForm: React.FC<Props> = ({ onSubmit, onChange, buttonVisible, bonusPoints, scrolled }) => {
  return (
    <StyledForm onSubmit={onSubmit} scrolled={scrolled}>
      <Container>
        <Input connection onChange={onChange} placeholder="Connection" />
        {buttonVisible ? (
          <Button type="submit">Submit for a possible {bonusPoints} points</Button>
        ) : (
          <span>Thanks for guessing!</span>
        )}
      </Container>
    </StyledForm>
  );
}

export default ConnectionForm;
