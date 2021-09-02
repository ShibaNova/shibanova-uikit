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
  position: ${({ isMobile }) => (isMobile ? "fixed" : "initial")};
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? "0 10px" : "40px 15px 110px 15px")};
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? MENU_HEIGHT_MOBILE : MENU_HEIGHT)}px;
  background: ${({ theme, isMobile }) =>
    isMobile
      ? "linear-gradient(90deg, rgba(6,26,84,1) 0%, rgba(6,28,124,1) 40%, rgba(6,28,124,1) 60%, rgba(4,2,66,1) 100%);"
      : theme.nav.background};
  border-bottom: ${({ theme, isMobile }) => (isMobile ? `1px solid ${theme.colors.secondary}4f` : "none")};

  @media screen and (min-width: 1421px) {
    padding: 40px 110px 110px 85px;
  }
  z-index: 20;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ showMenu: boolean; isMobile: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu, isMobile }) => (isMobile && showMenu ? `${MENU_HEIGHT_MOBILE}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
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
  novaPriceUsd,
  links,
  priceLink,
  profile,
  children, 
}) => {
  const { isXl, isXs, isSm } = useMatchBreakpoints();
  const isMobile = !isXl;
  const [showSideBar, setShowSideBar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return;
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
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
  }, [isMobile]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "DASHBOARD");

  const renderPrice = () => {
    return novaPriceUsd ? (
      <PriceLink href={priceLink} target="_blank">
        <NovaRoundIcon width="24px" mr="5px" />
        <Text fontSize="15px" small bold>{`$${novaPriceUsd.toFixed(3)}`}</Text>
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
        <SideBar open={showSideBar} price={renderPrice()} onDismiss={() => setShowSideBar(false)} links={links} />
        <NavBar
          isMobile={isMobile}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          novaPriceUsd={novaPriceUsd}
          links={links}
          priceLink={priceLink}
        />
        <Flex ml="auto" alignItems="center">
          {isXs || isSm ? null : renderPrice()}
          <UserBlock isMobile={isMobile} account={account} login={login} logout={logout} />
          {/* {profile && <Avatar profile={profile} />} */}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Inner isMobile={isMobile} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
