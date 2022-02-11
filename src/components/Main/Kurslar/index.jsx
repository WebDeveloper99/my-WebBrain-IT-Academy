

import React, { useContext } from 'react';
import { KurslarimizContext } from '../../../context/KurslarContext';
import { coursData } from '../../../utilits/PageOneData';
import Button from '../../Button';
import { Container, Wrapper, Title, Body, Image, Tit, Desc, Link, } from './style';


const Kurslar = () => {

  const [data, setdata] = useContext(KurslarimizContext);

  return <div>
    <Container>
      <Wrapper>
        <Title>Kurslar</Title>
        <Link>barcha kurslar</Link>
      </Wrapper>
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
    </Container>
  </div>;
};

export default Kurslar;
