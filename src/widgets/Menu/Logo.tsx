import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isMobile: boolean;
  isDark: boolean;
  showSideBar: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 50px;
    margin-top: 15px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
      margin-top: 5px;
    }
  }
  .desktop-icon {
    width: 175px;
    display: none;
    margin-top: 5px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
      margin-top: 5px;
    }
  }
`;

const Logo: React.FC<Props> = ({ showSideBar, isDark, href, isMobile }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex alignItems="center" mt={isMobile ? "0" : "auto"} mr="45px">
      {!isMobile ? null : (
        <MenuButton aria-label="Toggle menu" onClick={showSideBar}>
          <HamburgerIcon width="24px" color="textSubtle" />
        </MenuButton>
      )}
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="NovaDex home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="NovaDex home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
