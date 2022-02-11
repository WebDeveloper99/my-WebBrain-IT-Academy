

import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin-top: 70px;
`



export const Body = styled.div`
display: flex;
justify-content: space-between;

`


Body.Item = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 350px;
align-items: center;
padding: 30px;
background: #F5FAFF;
box-shadow: 0px 0px 30px -10px rgba(0, 118, 245, 0.5);
border-radius: 10px;
:hover{
    box-shadow: 0px 0px 30px -10px rgba(0, 118, 245, 1);
}
`




export const Image = styled.div`

`

export const Wrapper = styled.div`
display: flex;
margin: 10px;

`


export const Title = styled.div`
font-weight: 500;
font-size: 40px;

`

export const Link = styled.div`
margin-left: auto;
margin-top: auto;
font-size: 14px;
color: var(--BlueColor);
cursor: pointer;
`


export const Tit = styled.div`

font-size: 18px;
font-weight: 500;
margin: 4px;

`


export const Status = styled.div`

font-size: 14px;
font-weight: 400;
color: var(--Bluecolor);

`



export const Desc = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin: 15px 0;
font-size: 13px;
font-weight: 400;
color: #514D48;

`


export const Messenger =styled.div`
display: flex;
width: 60%;
margin: 0 auto;
justify-content: space-evenly;
align-items: center;

`






