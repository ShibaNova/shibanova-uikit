export declare const links: ({
    label: string;
    icon: string;
    href: string;
    button?: undefined;
    items?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    button: boolean;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        icon: string;
        href: string;
    }[];
    href?: undefined;
    button?: undefined;
})[];
export declare const more: {
    label: string;
    href: string;
}[];
export declare const MENU_HEIGHT = 110;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
