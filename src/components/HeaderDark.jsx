import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";

import ProLogo from "../assets/images/ProLogo.png"

import "./styles.scss";

function Example(args) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Container>
        <Navbar {...args}>
          <NavbarBrand href="/"><img src={ProLogo} height={60} alt="project_logo" /></NavbarBrand>
          <Nav className="header-nav">
            <NavItem onClick={() => navigate('/shopping')}>Shopping</NavItem>
            <NavItem onClick={() => navigate('/home')}>Blogs</NavItem>
            <NavItem>Apps</NavItem>
            <NavItem>Travels</NavItem>
            <NavItem className="">Health</NavItem>
          </Nav>
          <Nav className="auth-nav">
            <NavItem>Login</NavItem>
            <NavItem>Sign-up</NavItem>
          </Nav>
          
        </Navbar>
      </Container>
    </div>
  );
}

export default Example;
