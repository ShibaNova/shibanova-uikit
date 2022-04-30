import styled, { DefaultTheme } from "styled-components";
import { darkColors } from "../../theme/colors";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const getGradientBorder = ({ gradientBorder, theme }: StyledCardProps) =>
  gradientBorder &&
  `background-clip: padding-box;
// border: solid 1px #00aaff;

&:before {
content: "";
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;
margin: -2px;
border-radius: inherit;
background: linear-gradient(90deg, ${darkColors.secondary} 0%, ${darkColors.primaryBright} 100%);
}`;

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${darkColors.background};
  // background: transparent;
  // border: ${({ theme }) => theme.card.boxShadow};
  border-radius: 10px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  position: relative;

  ${space}

  ${getGradientBorder}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
