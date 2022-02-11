

import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin-top: 50px;
`


export const Title = styled.div`
display: flex;
padding: 10px;
font-weight: 500;
font-size: 40px;

`

export const Icon = styled.div`
width: 48px;

`

export const Number = styled.div`
font-size: 30px;
font-weight: 500;
margin: 10px;

`

export const Desc = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 4px 20px;
font-size: 20px;
font-weight: 400;
color: #514D48;

`

export const Body = styled.div`
display: flex;
justify-content: space-between;

`

Body.Item = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 300px;
height: 256px;
background: #F5FAFF;
box-shadow: 0px 0px 30px -10px rgba(0, 118, 245, 0.5);
border-radius: 10px;
:hover{
    box-shadow: 0px 0px 30px -10px rgba(0, 118, 245, 1);
}
`


