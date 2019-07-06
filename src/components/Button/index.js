import React, { useState } from "react";
import { StyledButton } from "./styles";

function Button(props) {
  const [hovered, toggleHovered] = useState(false);

  return (
    <StyledButton
      onMouseEnter={() => toggleHovered(true)}
      onMouseLeave={() => toggleHovered(false)}
      hovered={hovered}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
