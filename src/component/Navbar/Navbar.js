import React from 'react'
import { Nav, NavbarContainer, NavIcon, NavLogo } from './NavbarElement'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    Ultra
                </NavLogo>
            </NavbarContainer>
        </Nav>
    )
}


export default Navbar;