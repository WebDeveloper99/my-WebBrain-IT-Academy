import React, { useState } from 'react';
import { Button, Switch } from 'antd';

import { AntDrawer, AntButton, AntSpace, SettingsIcon , light_Mode, dark_Mode} from './style'

const Settings = () => {


  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [darkMode, setdarkMode] = useState(false);
  const [InterTravel, setInterTravel] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };


  const onClose = () => {
    setVisible(false);
  };


  const changeTravel =()=>{

  }


  const changeTheme =()=>{

  }


  return <>
    <AntSpace>
      <AntButton type="primary" onClick={showDrawer}>
        <SettingsIcon />
      </AntButton>
    </AntSpace>
    <AntDrawer
      // bodyStyle={{height: '80vh'}}
      title="Funksiyalar"
      placement={placement}
      width={250}
      onClose={onClose}
      visible={visible}
    >
      <div>
        <p>Qiziqarli sayohat <span> <Switch onClick={changeTravel()} defaultChecked /></span></p>
        <p>Tungi rejim <span> <Switch onClick={changeTheme()} defaultChecked /></span></p>
      </div>
    </AntDrawer>
  </>


};

export default Settings;





