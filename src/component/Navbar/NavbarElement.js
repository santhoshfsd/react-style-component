
import styled from 'styled-components'

import { Container } from './../../globalStyles'

export const Nav = styled.nav`
height:80px;
background: whitesmoke;
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
background-color: yellow;
${Container};

`

// export const NavbarContainer = styled(Container)`
// display:flex;
// justify-content:space-between;
// height:80px;
// $(contianer)`;