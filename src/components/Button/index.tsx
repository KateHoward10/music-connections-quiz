import React, { useState } from "react";
import { StyledButton } from "./styles";

function Button(props: any) {
  const [hovered, toggleHovered] = useState<boolean>(false);

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
