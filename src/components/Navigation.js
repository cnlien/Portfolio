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
} from 'reactstrap';

import webdata from './web-projects/webProjData';
import DropdownItems from './DropdownItems';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [webLinks] = useState(webdata);
  
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

                {webLinks.map (webLink => (
                  <DropdownItems
                    key={webLink.id}
                    projectlink={webLink.projectlink}
                    project = {webLink.project}
                  />
                ))}

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