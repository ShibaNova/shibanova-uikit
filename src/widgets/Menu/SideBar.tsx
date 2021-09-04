import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Text } from "../../components/Text";
import CloseButton from "../../components/Svg/Icons/Close";
import { SideBarProps, MenuSubEntry } from "./types";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import MenuIcon from "./MenuIcon";

const StyledNav = styled.nav<{ open: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background-color: ${({ theme }) => theme.colors.card};
  background: linear-gradient(
    90deg,
    rgba(6, 26, 84, 1) 0%,
    rgba(6, 28, 124, 1) 40%,
    rgba(6, 28, 124, 1) 60%,
    rgba(4, 2, 66, 1) 100%
  );
  display: block;
  z-index: 100;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  transition: transform 0.2s linear 0s;

  padding: 20px 0;

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`;

const StyledCloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  filter: drop-shadow(1px 1px 3px rgba(0, 170, 255, 0.584));
`;

const StyledLinkList = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLinkSeparator = styled.hr`
  width: 200px;
  border-color: ${({ theme }) => theme.colors.textSubtle};
`;

const SideBar: React.FC<SideBarProps> = ({ onDismiss, links, open, price }) => {
  const location = useLocation();
  const vaults = links[links.length - 2];
  const socials = links[links.length - 1];

  return (
    <StyledNav open={open}>
      <StyledCloseButton>
        <CloseButton onClick={onDismiss} />
      </StyledCloseButton>

      <div style={{ marginLeft: -20 }}>{price}</div>

      <StyledLinkList>
        <Text glowing bold style={{ padding: "3px 0 3px 0" }}>
          ShibaNova
        </Text>
        {links.slice(0, links.length - 2).map((entry) => (
          <MenuEntry onClick={onDismiss} isMobile key={entry.href} isActive={entry.href === location.pathname}>
            {entry.icon && <MenuIcon icon={entry.icon} />}
            <MenuLink style={{ fontSize: 16, textTransform: "uppercase" }} href={entry.href}>
              <LinkLabel>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        ))}

        <StyledLinkSeparator />

        <Text glowing bold style={{ padding: "3px 0 3px 0" }}>
          Vault Partners
        </Text>
        {vaults?.items?.map((item: MenuSubEntry) => {
          return (
            <MenuEntry isMobile key={item.href} secondary isActive={item.href === location.pathname}>
              {item.icon && <MenuIcon icon={item.icon} />}
              <MenuLink style={{ fontSize: 14, textTransform: "uppercase" }} href={item.href}>
                <LinkLabel>{item.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          );
        })}

        <StyledLinkSeparator />
        <Text glowing bold style={{ padding: "3px 0 3px 0" }}>
          Socials and More
        </Text>
        {socials.items?.map((item: MenuSubEntry) => {
          return (
            <MenuEntry isMobile key={item.href} secondary isActive={item.href === location.pathname}>
              {item.icon && <MenuIcon icon={item.icon} />}
              <MenuLink style={{ fontSize: 14, textTransform: "uppercase" }} href={item.href}>
                <LinkLabel>{item.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          );
        })}
      </StyledLinkList>
    </StyledNav>
  );
};

export default SideBar;
