const isSwapSubdomain = window.location.hostname.split(".")[0] === "swap";

export const links = [
  {
    label: "Dashboard",
    icon: "HomeIcon",
    href: isSwapSubdomain ? "https://shibanova.io" : "/",
  },
  {
    label: "Exchange",
    icon: "TradeIcon",
    href: "https://swap.shibanova.io",
    button: true,
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/pools",
  },
  {
    label: "Socials",
    icon: "MoreIcon",
    items: [
      {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/ShibaNovaDEX",
      },
      {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/ShibaNovaDefi",
      },
      {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://shibanova.medium.com/",
      },
      {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/ShibaNova",
      },
      {
        label: "Docs",
        icon: "BookIcon",
        href: "https://docs.shibanova.io",
      },
    ],
  },
];

export const more = [
  {
    label: "Github",
    href: "https://github.com/ShibaNova",
  },
  {
    label: "Docs",
    href: "https://docs.shibanova.io/",
  },
];

export const MENU_HEIGHT = 200;
export const MENU_HEIGHT_MOBILE = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
