import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const HeaderContainer =styled.div`
display: flex;
width: 100%;
margin-top: 30px;

`


export const HeaderTitle =styled.div`
display: flex;
flex-direction: column;
margin-top: 100px;
flex: 1;
padding: 10px;
font-weight: 600;
font-size: 55px;


`



HeaderTitle.Span =styled.span`
color: #0076F5;

`


export const TitleBtnGroup =styled.div`
display: flex;

`

export const Link = styled(NavLink)`

`




export const WrapperIMG =styled.div`
display: flex;
flex: 1;
justify-content: space-evenly;

img{
width: 200px;
border-radius: 20px;
height: 550px;
overflow: hidden;
border-radius: 20px;
box-shadow: 4px 8px 30px;
}


img:nth-child(even){
margin: 110px 20px 0 20px;
}

`




