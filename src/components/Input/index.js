import React, { useState } from "react";
import { StyledInput } from "./styles";

function Input(props) {
  const [inFocus, toggleFocus] = useState(false);

  return (
    <StyledInput
      type="text"
      onFocus={() => toggleFocus(true)}
      onBlur={() =>toggleFocus(false)}
      inFocus={inFocus}
      {...props}
    />
  );
}

export default Input;
