

import React, { useContext } from 'react';
import { KurslarimizContext } from '../../context/KurslarContext';
import { BootcampContainer, KursContainer, TitleContainer, Body, Image, Tit, Desc } from './style'
import Button from '../../components/Button';

const BootcampKurslarimiz = () => {

  const [data, setData] = useContext(KurslarimizContext);

  return <BootcampContainer>
    <TitleContainer>
      <span>
        <span>WebBrain </span>akademiyasi tomonidan taklif etilayotgan <span>kurslar ro’yxati</span>
      </span>
    </TitleContainer>
    <KursContainer>
      <Body>
        {
          data.map(({ id, img, title, desc }) => {
            return (
              <div key={id}>
                <Body.Item>
                  <Image>{<img src={img} />}</Image>
                  <Tit>{title}</Tit>
                  <Desc>{desc}</Desc>
                  <Button btnName='Batafsil' color={''} />
                </Body.Item>
              </div>
            )
          })
        }
      </Body>
    </KursContainer>
  </BootcampContainer>;
};

export default BootcampKurslarimiz;
