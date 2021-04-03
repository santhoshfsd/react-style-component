
import styled from 'styled-components'

import { Container } from './../../globalStyles'

import { FaMagento } from "react-icons/fa"

import { Link } from 'react-router-dom'

export const Nav = styled.nav`
height:80px;
background: black;
display:flex;    
color:red;
justify-content:center;
align-items:center;
font-size:1.2rem;
top:0;
position:sticky;
z-index:999;
`


export const NavbarContainer = styled(Container)`
display: flex;
height: 80px;
justify-content: space-between;
${Container};
`

export const NavLogo = styled(Link)`
color:#fff;
justify-self :flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display:flex;
align-items:center;
`;

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`