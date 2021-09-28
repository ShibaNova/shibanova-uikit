import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";

interface Props {
  label: string;
  initialOpenState?: boolean;
  className?: string;
}

const Container = styled.div`
  // background: ${({ theme }) => theme.colors.gradients.background};
  display: flex;
  position: relative;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; maxHeight: number }>`
  // background: ${({ theme, isOpen }) => (isOpen ? theme.colors.gradients.background : "none")};
  position: absolute;
  top: 100%;
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  box-shadow: ${({ theme, isOpen }) => (isOpen ? theme.shadows.active : "none")};
  border-radius: 10px;
  z-index: 1;
  margin-top: 30px;
`;

const Accordion: React.FC<Props> = ({ label, initialOpenState = false, children, className }) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className}>
        <LinkLabel >{label}</LinkLabel>
      </MenuEntry>
      <AccordionContent  onClick={handleClick} isOpen={isOpen} maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}>
        {children} 
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
