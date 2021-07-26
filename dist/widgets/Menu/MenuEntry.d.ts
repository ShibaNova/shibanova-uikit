/// <reference types="react" />
import { DefaultTheme } from "styled-components";
import { TextProps } from "../../components/Text/types";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    isMobile?: boolean;
}
declare const ButtonLabel: import("styled-components").StyledComponent<import("react").FC<import("../../components/Button").ButtonProps>, DefaultTheme, {}, never>;
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, TextProps, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntry, LinkLabel, ButtonLabel };
