import React, { useState } from 'react';
import { StyledInput } from './styles';

interface Props {
  onChange: (arg: any) => void,
  onBlur?: () => void,
  placeholder: string,
  connection?: boolean
}

const Input: React.FC<Props> = ({ onChange, onBlur, placeholder, connection }) => {
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
      connection={!!connection}
    />
  );
}

export default Input;
