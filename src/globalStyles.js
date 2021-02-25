import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro',sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
margin-left: auto;
margin-right: auto;
padding-left:50px;
padding-right:50px;
background-color: red;
@media screen and (max-width: 991px) {
padding-left:20px;
padding-right:20px;
}
`
export default GlobalStyle;