import React, { useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles/NavbarStyle";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
const NavBarComponents = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo>
              <NavIcon>LOGO</NavIcon>
            </NavLogo>
            {/*TODO Hi and Bye To Be Replced By Mobile Icons*/}
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/about_us">About us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/principles">Principles</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact_us">Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBarComponents;
