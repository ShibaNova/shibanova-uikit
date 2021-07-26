import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, MENU_HEIGHT_MOBILE } from "./config";
import Avatar from "./Avatar";
import { NovaRoundIcon } from "../../components/Svg";
import Skeleton from "../../components/Skeleton/Skeleton";
import Text from "../../components/Text/Text";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean; isMobile: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? 0 : 40)}px 20px 0px;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? MENU_HEIGHT_MOBILE : MENU_HEIGHT)}px;
  background: ${({ theme, isMobile }) =>
    isMobile
      ? "linear-gradient(90deg, rgba(6,26,84,1) 0%, rgba(6,28,124,1) 40%, rgba(6,28,124,1) 60%, rgba(4,2,66,1) 100%);"
      : theme.nav.background};
  border-bottom: ${({ theme, isMobile }) => (isMobile ? `1px solid ${theme.colors.textSubtle}4f` : "none")};

  z-index: 20;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = !isXl;
  const [showSideBar, setShowSideBar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current && isMobile) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "DASHBOARD");

  const renderPrice = () => {
    if (isMobile) return null;

    return cakePriceUsd ? (
      <PriceLink href={priceLink} target="_blank">
        <NovaRoundIcon width="24px" mr={0} />
        <Text small bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
      </PriceLink>
    ) : (
      <Skeleton width={80} height={24} />
    );
  };

  return (
    <Wrapper>
      <StyledNav isMobile={isMobile} showMenu={showMenu}>
        <Logo
          isMobile={isMobile}
          showSideBar={() => setShowSideBar((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <SideBar open={showSideBar} onDismiss={() => setShowSideBar(false)} links={links} />
        <NavBar
          isMobile={isMobile}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          links={links}
          priceLink={priceLink}
        />
        <Flex ml="auto">
          {renderPrice()}
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Inner showMenu={showMenu}>{children}</Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
