import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CloseButton from "../../components/Svg/Icons/Close";
import { MenuEntry } from "./types";

interface NavMobileProps {
  onDismiss?: () => void;
  links: Array<MenuEntry>;
}

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  display: block;
  z-index: 100;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 30px;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledLinkList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledLinkSeparator = styled.hr`
  width: 50%;
  border-color: ${(props) => props.theme.colors.textSubtle};
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  font-size: 1.3rem;
  margin: 6px 0;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
  }
  .on {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledExternalLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  font-size: 1.3rem;
  margin: 6px 0;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
  }
`;

const SideBar: React.FC<NavMobileProps> = ({ onDismiss, links }) => {
  const [, , , , socials] = links;

  return (
    <StyledNav>
      <StyledCloseButton>
        <CloseButton onClick={onDismiss} />
      </StyledCloseButton>
      <StyledLinkList>
        {links.map((entry) => (
          <StyledLink onClick={onDismiss} exact to="/">
            {entry.label}
          </StyledLink>
        ))}
      </StyledLinkList>
      <StyledLinkSeparator />
      <StyledLinkList>
        {socials.items?.map((entry) => (
          <StyledExternalLink onClick={onDismiss} href={entry.href} target="_blank" rel="noopener noreferrer">
            Docs
          </StyledExternalLink>
        ))}
      </StyledLinkList>
    </StyledNav>
  );
};

export default SideBar;
