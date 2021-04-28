import React, { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./styles/NavbarStyle";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Style/GlobalStyle";
import { animateScroll as scroll } from "react-scroll";

const NavBarComponents = () => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon />
              DTS
            </NavLogo>
            {/*TODO Hi and Bye To Be Replced By Mobile Icons*/}
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  to="Home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="principles"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Principles
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink
                  to="contact_us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Button variant="secondary">Contact Us</Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBarComponents;
