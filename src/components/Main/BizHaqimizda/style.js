

import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 1440px;
margin-top: 70px;
`

export const Body = styled.div`
display: flex;

`


export const Title = styled.div`
display: flex;
padding: 10px;
font-weight: 500;
font-size: 40px;

`

export const WrapperIMG =styled.div`
display: flex;
justify-content: space-between;
flex: 3;


img{
width: 270px;
height: 500px;
border-radius: 20px;
overflow: hidden;
border-radius: 20px;
box-shadow: 2px 4px 15px;
}


img:nth-child(even){
margin-top: 30px;
}

`




export const Description =styled.div`

display: flex;
flex: 4;

`


Description.Page =styled.div`
width: 400px;
height: 300px;
margin: 120px 0 0 120px;

`



Description.PageTitle =styled.div`
font-size: 22px;
font-weight: 500;

`

Description.PageDesc =styled.div`
font-size: 14px;
font-weight: 400;
margin-top: 22px;

`