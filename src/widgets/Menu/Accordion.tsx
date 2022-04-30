import React, { useState, useRef, useEffect } from "react";
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
  // box-shadow: ${({ theme, isOpen }) => (isOpen ? theme.shadows.active : "none")};
  border-radius: 5px;
  border: 1px solid ${({theme, isOpen}) => (isOpen ? theme.colors.backgroundAlt : "none")};
  z-index: 1;
  margin-top: 30px;
`;

const Accordion: React.FC<Props> = ({ label, initialOpenState = false, children, className }) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Attempt to handle closing accordian if click off
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);
  // function useOutsideAlerter(ref:any) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (isOpen === true && ref.current && !ref.current.contains(event.target)) {
  //         setIsOpen((prevState) => !prevState);
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className}>
        <LinkLabel >{label}</LinkLabel>
      </MenuEntry>
      <AccordionContent onClick={handleClick} isOpen={isOpen} maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}>
        {children} 
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
