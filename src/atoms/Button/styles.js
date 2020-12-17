import styled from "styled-components"
import { brand, neutral } from "../../assets/_colors"
import { fontSize } from "../../assets/_fontSize"
import { lineHeight } from "../../assets/_lineHeight"
import { borderRadius } from "../../assets/_borderRadius"
import { borderWidth } from "../../assets/_borderWidth"
import { spacingSquish } from "../../assets/_spacingSquish"
import { fontWeight } from "../../assets/_fontWeight"


export const StyledButton = styled.button`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.xs};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.tight};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : borderRadius.none};
  border: ${props => props.borderWidth ? props.borderWidth : borderWidth.none};
  padding: ${props =>
    props.spacingSquish ? props.spacingSquish : spacingSquish.xs};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.medium};
  color: ${props => props.neutral ? props.neutral : neutral.neutral5};
  background-color: ${props => props.brand ? props.brand : brand.primary3};
  width: ${props => props.width ? props.width : "fit-content"};
  
  &:hover { 
    background-color: ${brand.primary2};
    cursor: pointer;
  }
`