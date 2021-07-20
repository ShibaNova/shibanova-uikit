import React from "react";
import { MenuEntry } from "./types";
interface NavMobileProps {
    onDismiss?: () => void;
    links: Array<MenuEntry>;
}
declare const SideBar: React.FC<NavMobileProps>;
export default SideBar;
