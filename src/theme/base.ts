import { MediaQueries, Breakpoints, Spacing } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 1120,
  xl: 1420,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 3px 0px #1a82cd, 0px 0px 15px 0px #05b6ff",
  info: "0px 0px 3px 0px #2b0e68,0px 0px 15px 0px #9a6aff",
  success: "0px 0px 3px 0px #185E0A,0px 0px 15px 0px #0ba223",
  warning: "0px 0px 3px 0px #8A5C14,0px 0px 15px 0px #ffb237",
  danger: "0px 0px 3px 0px #8a1010,0px 0px 15px 0px #f74500",
  focus: "0px 0px 0px 1px #1a82cd, 0px 0px 0px 4px #05b6ff70",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
  text: "rgba(0, 170, 255, 0.584)0 0 10px, rgba(0, 170, 255, 0.584) 0 0 10px",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
