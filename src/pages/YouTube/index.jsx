

import React from 'react';
import { BepulContainer, KursContainer, TitleContainer, Body, Image, Tit, Desc } from './style'
import Button from '../../components/Button';
import { bepulDarsliklarData } from '../../utilits/PageOneData';

const KurslarimizMenu = () => {


  return <BepulContainer>
    <TitleContainer>
      <span>
        <span>WebBrain </span>akademiyasi tomonidan sizlar uchun <span>bepul darsliklar</span>
      </span>
    </TitleContainer>
    <Body>
      {
        bepulDarsliklarData.map(({ id, img, title, desc }) => {
          return (
            <div key={id}>
              <Body.Item>
                <Image>{<img src={img} style={{ width: '250px' }} />}</Image>
                <Tit>{title}</Tit>
                <Desc>{desc}</Desc>
                <Button btnName={`Ko'rish`} />
              </Body.Item>
            </div>
          )
        })
      }
    </Body>
  </BepulContainer>;
};

export default KurslarimizMenu;
