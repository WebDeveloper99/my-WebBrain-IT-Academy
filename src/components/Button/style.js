

import styled from "styled-components";

export const DefaultBtn = styled.button`

margin: 10px;
padding: 12px 36px;
color: ${({color})=>  color? color : `var(--BlueColor)`};
background-color: ${({activ})=> activ == 'activ' ? `var(--BlueColor)` : '#fff' };
width: ${({width})=> width? width : ' 150px ' };
height: ${({height})=> height? height.height : ' 50px ' };
border: 1px solid ${({border})=> `var(${border? '--BlueColor' : '--TransparentColor'})` };
border-radius: 8px;
font-weight: 400;
font-size: 16px;
justify-content: center;
align-items: center;
cursor: pointer;
:focus{
    background-color: var(--BlueColor);
    color: white;
}




`