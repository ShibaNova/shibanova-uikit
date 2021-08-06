import React from "react";
import BoxComponent from "./Box";

import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Primitives",
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC = () => {
  return (
    <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </BoxComponent>
    </div>
  );
};
