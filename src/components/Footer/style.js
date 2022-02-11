import styled from "styled-components";




export const Container = styled.div`
display: flex;
width: 112%;
margin-left: -6%;
margin-top: 80px;
border-top: 1px solid #CFCCC9;
border-bottom: 1px solid #CFCCC9;

`



export const Wrapper = styled.div`
display: flex;
width: 85%;
margin: 0 auto;


`

export const Title = styled.div`
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: #31344B;
line-height: 40px;

`


export const LeftBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0;
flex: 2;

`

LeftBody.DescFooter = styled.div`
width: 400px;
display: flex;
font-size: 14px;
line-height: 25px;

`


LeftBody.Message = styled.div`
display: flex;
width: 60%;

`



export const RightBody = styled.div`
display: flex;
justify-content: space-between;
margin: 50px 0;
flex: 3;

`



RightBody.Item = styled.div`
font-size: 16px;
line-height: 35px;
color: #31344B;

`

export const BodyItemOne =styled.div`
display: flex;
flex-direction: column;

`

export const BodyItemTwo =styled.div`
display: flex;
flex-direction: column;

`

export const BodyItemThree =styled.div`
display: flex;
flex-direction: column;

`


BodyItemThree.Input = styled.input`
width: 354px;
height: 50px;
margin: 4px 10px;
padding: 4px 16px;
border: 1px solid var(--BlueColor);
::placeholder{
    color: var(--BlueColor);
}

`





export const BrandContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;

`


BrandContainer.Desc = styled.div`   
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;

`





