
import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 70px;
`


export const Body = styled.div`
display: grid;
grid-template-columns: repeat(3,412px);
grid-gap: 50px;

`


Body.Item = styled.div`
display: flex;
flex-direction: column;
/* width: 400px;
height: 350px; */
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
margin: 20px 10px;

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
margin: 10px;

`






export const Desc = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 15px;
font-size: 13px;
font-weight: 400;
color: #514D48;

`







