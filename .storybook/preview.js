import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.gradients.background + " repeat scroll 0% 0%",
    ...dark,
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];
