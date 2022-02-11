


import React from 'react';
import BepulDarsliklar from './BepulDarsliklar';
import BizHaqimizda from './BizHaqimizda';
import BizningJamoa from './BizningJamoa';
import Kurslar from './Kurslar';
import Sertifikat from './Sertifikat';
import Statistika from './Statistika/Statistika';

const Main = () => {
  return <div>
      <Statistika/>
      <BizHaqimizda/>
      <Kurslar/>
      <BepulDarsliklar/>
      <BizningJamoa/>
      <Sertifikat/>
  </div>;
};

export default Main;
