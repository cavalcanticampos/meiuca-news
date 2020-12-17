import styled from "styled-components"
import { fontSize } from "../../assets/_fontSize"
import { lineHeight } from "../../assets/_lineHeight"
import { fontWeight } from "../../assets/_fontWeight"
import { neutral } from "../../assets/_colors"

export const H1 = styled.h1`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.lg};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.bold};
  color: ${props => props.neutral ? props.neutral : neutral.neutral1};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const H2 = styled.h2`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.md};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.bold};
  color: ${props => props.neutral ? props.neutral : neutral.neutral1};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const H3 = styled.h3`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.sm};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.bold};
  color: ${props => props.neutral ? props.neutral : neutral.neutral1};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const H4 = styled.h4`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.xs};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.bold};
  color: ${props => props.neutral ? props.neutral : neutral.neutral1};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const H5 = styled.h5`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.xxs};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.bold};
  color: ${props => props.neutral ? props.neutral : neutral.neutral1};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const P = styled.p`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.xs};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.distant};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.regular};
  color: ${props => props.neutral ? props.neutral : neutral.neutral2};
  margin: ${props => props.margin ? props.margin : "auto" };
`

export const StyledSubtitle = styled.p`
  font-size: ${props =>
    props.fontSize ? props.fontSize : fontSize.md};
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : lineHeight.medium};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : fontWeight.medium};
  color: ${props => props.neutral ? props.neutral : neutral.neutral2};
  margin: ${props => props.margin ? props.margin : "auto" };
`