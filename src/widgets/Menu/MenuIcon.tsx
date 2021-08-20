import React from "react";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

interface Props {
  icon: string;
}

const MenuIcon: React.FC<Props> = ({ icon }) => {
  const Icon = Icons[icon];
  const iconProps = { width: "24px", color: "textSubtle" };

  if (typeof Icon === "undefined") {
    return null;
  }

  return <Icon {...iconProps} mr="5px" />;
};

export default MenuIcon;
