import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../Asset/logo.png';
import './navbar.css';


const NavbarExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <div className='indexmax'>
      <Navbar expand="md" fixed="top" className='navbar-main'>
        <NavbarBrand href="/"> 
              <strong className='navbrandmain' style={{fontSize:"20px"}}>Neelesh Shekhar</strong></NavbarBrand>
        <NavbarToggler onClick={toggle} className='togler' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/about/" className='navbrand' >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog" className='navbrand' >Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/" className='navbrand'>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Certifications/" className='navbrand'>Certifications</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
};

export default NavbarExample;