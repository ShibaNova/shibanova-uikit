import React from "react";
interface Props {
    isMobile: boolean;
    isDark: boolean;
    showSideBar: () => void;
    href: string;
}
declare const Logo: React.FC<Props>;
export default Logo;
