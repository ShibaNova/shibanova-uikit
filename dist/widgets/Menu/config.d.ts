export declare const links: ({
    label: string;
    href: string;
    button?: undefined;
    icon?: undefined;
    items?: undefined;
} | {
    label: string;
    href: string;
    button: boolean;
    icon?: undefined;
    items?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    button?: undefined;
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
export declare const MENU_HEIGHT = 200;
export declare const MENU_HEIGHT_MOBILE = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
