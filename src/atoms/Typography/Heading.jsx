import React from "react";
import { H1, H2, H3, H4, H5 } from "./styles";

const Heading = (props) => {
  switch (props && props.heading) {
    case "h1":
      return <H1 {...props}>{props.children}</H1>;
    case "h2":
      return <H2 {...props}>{props.children}</H2>;
    case "h3":
      return <H3 {...props}>{props.children}</H3>;
    case "h4":
      return <H4 {...props}>{props.children}</H4>;
    case "h5":
      return <H5 {...props}>{props.children}</H5>;

    default:
      return null;
  }
};

export default Heading;
