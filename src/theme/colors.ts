import { Colors } from "./types";

export const baseColors = {
  failure: "#a20b0b",
  primary: "#1f9ce4",
  primaryBright: "#1f9ce4",
  primaryDark: "#1f9ce4",
  secondary: "#00aaff",
  success: "#0ba223",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA", // #FAF9FA
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#0000a4",
  textDisabled: "#BDC2C4",
  textSubtle: "#46e3f4",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#00aaff",
  background: "#0b23a2",
  backgroundDisabled: "#2f2f3c",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "transparent",
  primaryDark: "#0098A1",
  tertiary: "#040547",
  text: "#FFFFFF",
  textDisabled: "#4d547b",
  textSubtle: "#c4c7d4",
  borderColor: "#00aaff",
  card: "#040547",
  gradients: {
    bubblegum: "linear-gradient(90deg, rgba(4,5,71,1) 0%, rgba(31,156,228,1) 100%)",
    background: "linear-gradient(90deg, rgba(6,26,84,1) 0%, rgba(6,28,124,1) 50%, rgba(4,6,77,1) 100%)",
  },
};
