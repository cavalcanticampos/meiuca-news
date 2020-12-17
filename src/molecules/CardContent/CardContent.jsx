import React from "react";
import { Heading, Shape, Subtitle, Paragraph } from "../../atoms";
import { spacingStack } from "../../assets/_spacingStack";

const CardContent = (props) => {
  return (
    <Shape>
      <Heading heading="h1" margin={`auto auto ${spacingStack.xxxs} auto`}>
        {props.title}
      </Heading>
      <Subtitle margin={`auto auto ${spacingStack.xxxs} auto`}>
        {props.subtitle}
      </Subtitle>
      <Paragraph margin={`auto auto ${spacingStack.xxxs} auto`}>
        {props.paragraph}
      </Paragraph>
    </Shape>
  );
};

export default CardContent;
