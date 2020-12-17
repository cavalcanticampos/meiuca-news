import styled from "styled-components"
import { neutral } from "../../assets/_colors"
import { borderRadius } from "../../assets/_borderRadius"
import { borderWidth } from "../../assets/_borderWidth"
import { spacingInset } from "../../assets/_spacingInset"

export const StyledShape = styled.div`
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : borderRadius.none};
  border-width: ${props =>
    props.borderWidth ? props.borderWidth : borderWidth.thin};
  border-color: ${props =>
    props.borderColor ? props.borderColor : neutral.neutral4};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : neutral.neutral5};
  padding: ${props =>
    props.padding ? props.padding : spacingInset.lg};
  width: ${props =>
    props.width ? props.width : "auto"};
  height: ${props =>
    props.height ? props.height : "auto"};
  margin: ${props =>
    props.margin ? props.margin : "unset"};
`