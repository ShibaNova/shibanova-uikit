import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, ButtonLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps } from "./types";
import Flex from "../../components/Flex/Flex";

interface Props extends PanelProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const NavBar: React.FC<Props> = ({ isMobile, links }) => {
  const location = useLocation();

  if (isMobile) return null;

  return (
    <Flex>
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
                  const Icon = Icons[item.icon!];
                  const iconProps = { width: "24px", color: "textSubtle" };

                  return (
                    <MenuEntry key={item.href} secondary isActive={item.href === location.pathname}>
                      {typeof Icon !== "undefined" ? <Icon {...iconProps} mr="5px" /> : null}
                      <MenuLink href={item.href}>{item.label}</MenuLink>
                    </MenuEntry>
                  );
                })}
              </Accordion>
            );
          }
          return (
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href}>
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
