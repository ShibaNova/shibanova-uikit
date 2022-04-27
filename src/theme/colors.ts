import { Colors } from "./types";

export const brandColors = {
  binance: "#F0B90B",
};

export const baseColors = {
  failure: "#a20b0b",
  primary: "#00af30", // green
  primaryBright: "#608bfb", // blue
  primaryDark: "#a797ff", // purple
  secondary: "#ff56b5", // pink
  success: "#00af30", // green
  warning: "#ffb318", // yellow
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  // secondary: "#00aaff", 
  background: "#141223", // black medium
  backgroundDisabled: "#2E3034", // gray black
  backgroundAlt: "#93999D", // gray
  contrast: "#ffb318", // yellow
  invertedContrast: "#edf4f7", // gray light
  input: "transparent",
  primaryDark: "#a797ff", // purple
  tertiary: "#608bfb", // blue
  text: "#edf4f7", // white
  textDisabled: "#93999d", // gray medium
  textSubtle: "#c7cbd1", // gray
  borderColor: "#2e3034",
  card: "#141223",
  gradients: {
    bubblegum: "linear-gradient(90deg, #FF56B5 0%, #A797FF 100%)",
    background: "#141223",
  },
};


export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#141223", // #FAF9FA
  backgroundDisabled: "#2E3034",
  backgroundAlt: "#93999D",
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
    bubblegum: "linear-gradient(139.73deg, #FF56B5 0%, #F3EFFF 100%)",
  },
};
