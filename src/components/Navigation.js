import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-bar" color="light" light expand="md">
        <NavbarBrand className="nav-brand">
          <NavLink dark href="/">Christopher Lien</NavLink>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown className="nav-dropdown" nav inNavbar>
              <DropdownToggle nav caret>
                Web Projects
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                    <NavLink href="/frenchlickwinery">French Lick Winery <Badge>New</Badge></NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="/spiritsoffrenchlick">Spirits of French Lick <Badge>New</Badge></NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Connect
              </DropdownToggle>

              <DropdownMenu left>
                <DropdownItem>
                  <NavLink href="https://github.com/cnlien">
                    <img className="nav-icon" src="../img/icons/github.svg" alt="Github Icon" /> GitHub
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="https://linkedin.com/in/cnlien">
                    <img className="nav-icon" src="../img/icons/linkedin.svg" alt="LinkedIn Icon" /> LinkedIn
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;