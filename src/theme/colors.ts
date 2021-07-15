import { Colors } from "./types";

export const baseColors = {
  failure: "#a20b0b",
  primary: "#1f9ce4",
  primaryBright: "#1f9ce4",
  primaryDark: "#1f9ce4",
  secondary: "#7645D9",
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
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#0b23a2",
  backgroundDisabled: "#2f2f3c",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#040547",
  text: "#FFFFFF",
  textDisabled: "#4d547b",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#040547",
  gradients: {
    bubblegum: "linear-gradient(90deg, rgba(4,5,71,1) 0%, rgba(31,156,228,1) 100%)",
    background: "linear-gradient(139deg, rgb(11, 35, 162) 0%, rgb(4, 2, 68) 100%)",
  },
};
