import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/cnlien">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://linkedin.com/in/cnlien">LinkedIn</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Web Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink href="/frenchlickwinery">French Lick Winery</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Christopher Lien | Developer & Designer</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;