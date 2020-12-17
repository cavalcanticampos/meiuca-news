import React from "react";
import { StyledSubtitle } from "./styles";

const Subtitle = (props) => {
  return <StyledSubtitle {...props}>{props.children}</StyledSubtitle>;
};

export default Subtitle;
