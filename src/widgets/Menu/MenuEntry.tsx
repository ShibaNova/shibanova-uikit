import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { Button } from "../../components/Button";
import { TextProps } from "../../components/Text/types";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isMobile?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const ButtonLabel = styled(Button)`
  font-size: 15px;
`;

const LinkLabel = styled.div<TextProps>`
  color: inherit;
  transition: color 0.4s;
  flex-grow: 1;
  font-weight: bold;
  text-shadow: ${({ glowing, theme }) => (glowing ? theme.shadows.text : "none")};

  &:hover {
    opacity: 0.8;
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ isMobile }) => (isMobile ? "auto" : `${MENU_ENTRY_HEIGHT}px`)};
  padding: ${({ secondary }) => (secondary ? "0 24px" : "0 1.35vw")};
  font-size: ${
    /* eslint-disable */
    ({ isMobile, secondary }) => (isMobile ? (secondary ? 16 : 18) : 15)
    /* eslint-enable */
  }px;
  background-color: ${({ secondary, theme, isMobile }) => (secondary && !isMobile ? theme.colors.card : "transparent")};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.text)};
  line-height: ${({ isMobile }) => (isMobile ? "1.5" : "inherit")};
  margin: ${({ isMobile }) => (isMobile ? "10px 0" : "0")};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ secondary, theme, isMobile }) =>
      secondary && !isMobile ? theme.colors.primary : "transparent"};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  // role: "button",
};

export { MenuEntry, LinkLabel, ButtonLabel };
