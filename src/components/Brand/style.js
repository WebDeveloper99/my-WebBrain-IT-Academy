

import styled from "styled-components";

export const BrandWrapper = styled.div`
display: flex;
font-size: 30px;
font-weight: 700;
color: ${({blue})=>`var(${blue? '--BlueColor' : '--BlackColor'})`};
cursor: pointer;

`