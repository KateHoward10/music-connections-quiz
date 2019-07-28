import React, { useState } from 'react';
import { StyledInput } from './styles';

function Input({ onChange, onBlur, placeholder, connection }) {
  const [inFocus, toggleFocus] = useState(false);

  return (
    <StyledInput
      type="text"
      onChange={onChange}
      onFocus={() => toggleFocus(true)}
      onBlur={() => {
        if (onBlur) onBlur();
        toggleFocus(false);
      }}
      inFocus={inFocus}
      placeholder={placeholder}
      connection={connection}
    />
  );
}

export default Input;
