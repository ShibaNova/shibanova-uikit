import "styled-components";
import { ShibanovaTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ShibanovaTheme {}
}
