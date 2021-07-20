import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { Button } from "../../components/Button";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
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
  font-size: 14px;
  font-weight: 700;
  padding: 0 10px;
`;

const LinkLabel = styled.div`
  color: inherit;
  transition: color 0.4s;
  flex-grow: 1;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 24px" : "0 20px")};
  font-size: 14px;
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.card : "transparent")};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : "#FFF")};
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
    background-color: ${({ secondary, theme }) => (secondary ? theme.colors.primary : "transparent")};
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
