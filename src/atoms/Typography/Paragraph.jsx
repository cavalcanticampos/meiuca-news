import React from "react";
import { P } from "./styles";

const Paragraph = (props) => {
  return <P {...props}>{props.children}</P>;
};

export default Paragraph;
