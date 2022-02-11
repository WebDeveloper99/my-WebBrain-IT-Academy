import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;

`



export const TitleContainer = styled.div`
display: flex;
width: 90%;
font-weight: 500;
font-size: 60px;
line-height: 66px;
text-align: center;
margin: 40px auto;
letter-spacing: -0.08em;

span span{
    color: var(--BlueColor);
}

`




export const NatijaContainer = styled.div`
width: 100%;
display: flex;
justify-content:space-around;

`

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(4,240px);
grid-gap: 60px;


`


Body.Item = styled.div`
display: flex;
flex-direction: column;
margin-top: ${({id})=> id % 2 == 0 && '100px'};
align-items: center;
justify-content:center;
/* width: 240px; */
height: 300px;
background: rgba(0, 0, 0, 0,15);
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 10px;

`




export const Image = styled.div`
width: 150px;
height: 150px;
`



export const Status = styled.div`
color: var(--BlueColor);
margin:4px 0;
font-size: 12px ;
font-weight: 500;

`




export const Title = styled.div`
display: flex;
margin: 20px;
font-weight: 500;
font-size: 40px;

`


export const Tit = styled.div`

font-size: 18px;
font-weight: 500;

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




export const Messenger =styled.div`
display: flex;
width: 60%;
margin: 0 auto;
justify-content: space-evenly;
align-items: center;

`