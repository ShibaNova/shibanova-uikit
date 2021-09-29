import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, ButtonLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps } from "./types";
import Flex from "../../components/Flex/Flex";
import MenuIcon from "./MenuIcon";
import getExternalLinkProps from "../../util/getExternalLinkProps";

interface Props extends PanelProps {
  isMobile: boolean;
}

const Container = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const NavBar: React.FC<Props> = ({ isMobile, links }) => {
  const location = useLocation();

  if (isMobile) return null;

  return (
    <Flex style={{ maxWidth: "50%" }}>
      <Container>
        {links.map((entry) => {
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            return (
              <Accordion
                key={entry.label}
                label={entry.label.toUpperCase()}
                initialOpenState={entry.initialOpenState}
                className={calloutClass}
              >
                {entry.items.map((item) => {
                  return (
                    <MenuEntry key={item.href} secondary isActive={item.href === location.pathname}>
                      {item.icon && <MenuIcon icon={item.icon} />}
                      <MenuLink href={item.href} {...(item.external ? getExternalLinkProps() : {})}>
                        {item.label}
                      </MenuLink>
                    </MenuEntry>
                  );
                })}
              </Accordion>
            );
          }
          return (
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              {entry.icon && <MenuIcon icon={entry.icon} />}
              <MenuLink href={entry.href} {...(entry.external ? getExternalLinkProps() : {})}>
                {entry.button ? (
                  <ButtonLabel size="sm">{entry.label.toUpperCase()}</ButtonLabel>
                ) : (
                  <LinkLabel>{entry.label.toUpperCase()}</LinkLabel>
                )}
              </MenuLink>
            </MenuEntry>
          );
        })}
      </Container>
    </Flex>
  );
};

export default NavBar;
