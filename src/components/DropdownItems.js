import React from 'react';
import { NavLink, DropdownItem } from 'reactstrap';
const DropdownItems = (props) => {
    return(
        <DropdownItem>
            <NavLink href={props.projectlink} alt={props.project}>{props.project}</NavLink>
        </DropdownItem> 
    )
}

export default DropdownItems;