import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { StyledForm, Container } from './styles';

function ConnectionForm({ onSubmit, onChange, buttonVisible, bonusPoints, scrolled }) {
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
