import styled from "styled-components";



export const AppContainer = styled.div`
background-color: ${({color})=> color == 'dark' ? 'black' : 'white'};
color: ${({color})=> color == 'dark' ? 'white' : 'black'};
padding: 10px 0;

`