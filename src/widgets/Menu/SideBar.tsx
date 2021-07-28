import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import CloseButton from "../../components/Svg/Icons/Close";
import { SideBarProps, MenuSubEntry } from "./types";
import * as IconModule from "./icons";
import { SvgProps } from "../../components/Svg";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const StyledNav = styled.nav<{ open: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.card};
  display: block;
  z-index: 100;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 30px;
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  transition: transform 0.2s linear 0s;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  filter: drop-shadow(1px 1px 3px rgba(0, 170, 255, 0.584));
`;

const StyledLinkList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLinkSeparator = styled.hr`
  width: 200px;
  border-color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ theme }) => theme.shadows.text};
`;

const SideBar: React.FC<SideBarProps> = ({ onDismiss, links, open }) => {
  const location = useLocation();
  const socials = links[links.length - 1];

  return (
    <StyledNav open={open}>
      <StyledCloseButton>
        <CloseButton onClick={onDismiss} />
      </StyledCloseButton>
      <StyledLinkList>
        {links.slice(0, links.length - 1).map((entry) => (
          <MenuEntry onClick={onDismiss} isMobile key={entry.href} isActive={entry.href === location.pathname}>
            <MenuLink href={entry.href}>
              <LinkLabel glowing>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        ))}
        <StyledLinkSeparator />
        {socials?.items?.map((item: MenuSubEntry) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const Icon = Icons[item.icon!];
          const iconProps = { width: "24px", color: "textSubtle" };

          return (
            <MenuEntry isMobile key={item.href} secondary isActive={item.href === location.pathname}>
              {typeof Icon !== "undefined" ? (
                <Icon {...iconProps} style={{ filter: "drop-shadow(0px 0px 3px rgba(0,170,255,0.584))" }} mr="5px" />
              ) : null}
              <MenuLink href={item.href}>
                <LinkLabel glowing>{item.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          );
        })}
      </StyledLinkList>
    </StyledNav>
  );
};

export default SideBar;
