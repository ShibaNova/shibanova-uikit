import React from "react";
import { PanelProps } from "./types";
interface Props extends PanelProps {
    isMobile: boolean;
}
declare const NavBar: React.FC<Props>;
export default NavBar;
