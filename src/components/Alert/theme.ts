import { darkColors, lightColors } from "../../theme/colors";
import { AlertTheme } from "./types";
import { shadows } from "../../theme/base";

export const light: AlertTheme = {
  background: lightColors.card,
  boxShadow: shadows.active,
};

export const dark: AlertTheme = {
  background: darkColors.card,
  boxShadow: shadows.active,
};
