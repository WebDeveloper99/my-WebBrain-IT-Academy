import styled from "styled-components";
import { Drawer, Button, Space } from 'antd';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg'





export const AntDrawer = styled(Drawer)`

.ant-drawer-content-wrapper{
    height: 180px;
    margin-top: 170px;

    .ant-drawer-header{
        border-bottom: 2px solid lightgray;
    }

    .ant-drawer-body div p:nth-child(2){
        span:nth-child(1){
            margin-left: 50px;
        }
    }

}

`


export const AntButton = styled(Button)`
width: 80px;
height: 50px;
position: fixed;
z-index: 5;
top: 170px;
left: -20px;
border-radius: 20px;
display: flex;
justify-content: end;
align-items: center;

`



export const AntSpace = styled(Space)`
background-color: transparent;
position: absolute;
width: 20px;



`


export const SettingsIcon = styled(Settings)`
background-color: transparent;
position: absolute;
width: 20px;



`




export const dark_Mode = {
    color : '#fff',
    background: 'gray',
}


export const light_Mode = {
    color : '#fff',
    background: 'gray',
}