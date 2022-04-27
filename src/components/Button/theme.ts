import { ButtonTheme, variants } from "./types";
import { darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: `linear-gradient(90deg, ${darkColors.tertiary} 0%, ${darkColors.primary} 100%)`,
    backgroundActive: darkColors.primaryDark,
    backgroundHover: darkColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: "#edf4f7",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${darkColors.primary}`,
    borderColorHover: darkColors.primaryDark,
    boxShadow: "none",
    boxShadowActive: "none",
    color: "white",
  },
  [TERTIARY]: {
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.primaryDark,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: darkColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: darkColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "white",
  },
  [DANGER]: {
    background: darkColors.failure,
    backgroundActive: "#D43285", // darkten 10%
    backgroundHover: "#d71010", // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUBTLE]: {
    background: darkColors.textSubtle,
    backgroundActive: `${darkColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${darkColors.textSubtle}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: darkColors.success,
    backgroundActive: `${darkColors.success}D9`, // 70% opacity
    backgroundHover: `${darkColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
    background: `linear-gradient(90deg, ${darkColors.secondary} 0%, ${darkColors.primaryBright} 100%)`,
  },
  [SECONDARY]: {
    ...light.secondary,
    color: darkColors.primary
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.primaryDark,
    color: darkColors.background,
  }, 
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
};
