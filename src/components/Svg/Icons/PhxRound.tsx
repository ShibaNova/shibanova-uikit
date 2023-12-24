import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const PhxIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href="/images/tokens/phoenix2.png" />
    </Svg>
  );
};

export default PhxIcon;
