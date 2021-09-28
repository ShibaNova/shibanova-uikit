import React, { useEffect } from "react";
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
  padding: 30px 20px 30px;
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  transition: transform 0.2s linear 0s;

  overflow-y: auto;
  overscroll-behavior-y: none;
  -webkit-overflow-scrolling: touch;
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

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
            <MenuLink onClick={onDismiss} style={{ fontSize: 16, textTransform: "uppercase" }} href={entry.href}>
              <LinkLabel onClick={onDismiss}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        ))}

        <StyledLinkSeparator />

        <Text glowing bold style={{ padding: "3px 0 3px 0" }}>
          Earn
        </Text>
        {vaults?.items?.map((item: MenuSubEntry) => {
          return (
            <MenuEntry onClick={onDismiss} isMobile key={item.href} secondary isActive={item.href === location.pathname}>
              {item.icon && <MenuIcon icon={item.icon} />}
              <MenuLink onClick={onDismiss} style={{ fontSize: 14, textTransform: "uppercase" }} href={item.href}>
                <LinkLabel onClick={onDismiss}>{item.label}</LinkLabel>
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
            <MenuEntry onClick={onDismiss} isMobile key={item.href} secondary isActive={item.href === location.pathname}>
              {item.icon && <MenuIcon icon={item.icon} />}
              <MenuLink onClick={onDismiss} style={{ fontSize: 14, textTransform: "uppercase" }} href={item.href}>
                <LinkLabel onClick={onDismiss}>{item.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          );
        })}
      </StyledLinkList>
    </StyledNav>
  );
};

export default SideBar;
