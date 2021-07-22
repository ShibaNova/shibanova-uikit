import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  text-shadow: ${({ glowing }) =>
    glowing ? "rgba(0, 170, 255, 0.584)0 0 10px, rgba(0, 170, 255, 0.584) 0 0 10px" : "none"};
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
