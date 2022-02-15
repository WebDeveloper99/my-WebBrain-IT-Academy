import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Link = styled(NavLink)`
position: relative;
text-decoration: none;
white-space: nowrap;
font-weight: 500;
color: ${({ activ }) => `var(${activ ? '--BlueColor' : '--BlackColor'})`};


`

export const NavContainer = styled.div`
display: flex;
width:100%;
align-items: center;
position: sticky;
top: 0;
/* background: rgba(250, 250, 250,0.96); */
background: ${({color})=> color == 'dark' ? 'black' : 'white'};
border: 1px solid ${({color})=>color == 'dark' ? 'white' : 'black'};


`

export const LogoTip = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

`


export const NavGroup = styled.div`
//eldor
display: flex;
align-items: center;
justify-content: space-around;
color: ${({color})=>color == 'dark' ? 'white' : 'black'};
flex: 2;

li{
    position: relative;
    list-style:none;
    &:after{
      content: '';
      width: 0%;
      height: 2px;
      background: var(--BlueColor);
      display: block;
      position: absolute;
      transition: 0.3s all linear;
    }

}

li:hover:after{
    width: 100%;
}


`





// export const Com = styled.label`
// position: relative;
// display: flex;
// white-space: nowrap;
// align-items: center;
// `

// Com.Label = styled.label`

// cursor: pointer;
// font-size: 14px;
// font-weight: 400;

// `



// Com.Input = styled.input`
// position: absolute;
// display: none;

// &:checked + span{
// background-color: #FFE1C2;
// &::before{
//     background-color: #F77F00;
//     left: calc(100% - 2px);
//     transform: translateX(-100%);
// }
// }

// `


// Com.Slider = styled.span`
// position: relative;
// width: 30px;
// height: 15px;
// background-color: #CFCCC9;
// margin: 0 25px 0 10px;
// display: flex;
// align-items: center;
// border-radius: 10px;
// cursor: pointer;
// &::before{
//     content: '';
//     position: absolute;
//     top: 2px;
//     left: 2px;
//     border-radius: 50%;
//     display: block;
//     width: 11px;
//     height: 11px;
//     background-color: #B7B3AE;
//     transition: 0.3s all linear;
// }

// :active::before{
//     width: 20px;
// }


// `







export const NavFooter = styled.div`
display: flex;
align-items: center;
justify-content: end;
flex: 1;
`



