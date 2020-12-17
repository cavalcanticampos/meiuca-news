import React from "react";
import { StyledShape } from "./styles";

const Shape = (props) => {
  return <StyledShape {...props}>{props.children}</StyledShape>;
};

export default Shape;
