import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({ outline, variant = "primary", theme }: ThemedProps) =>
  outline ? getColor(variant, theme) : "#ffffff";

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background: ${
    /* eslint-disable */
    ({ outline, theme, variant = "primary" }) =>
      outline ? "transparent" : variant === "primary" ? theme.button.primary.background : getColor(variant, theme)

    /* eslint-enable */
  };
  border: ${({ variant = "primary" }) => (variant === "primary" ? "0px" : "2px")} solid
    ${({ variant = "primary", theme }) => getColor(variant, theme)};
  border-radius: 16px;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  height: 28px;
  line-height: 1.5;
  padding: 0 8px;
  white-space: nowrap;

  svg {
    fill: ${getThemeTextColor};
  }
`;

export default null;
