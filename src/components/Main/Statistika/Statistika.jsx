

import React from 'react';
import { statisData } from '../../../utilits/PageOneData';
import { Container, Title, Body, Icon, Number, Desc } from './StatStyle';
const Statistika = () => {
  return <div>
    <Container>
      <Title>
        Statistika
      </Title>
      <Body>
        {
          statisData.map(({id,icon,desc,number})=>{
            return(
              <div key={id} >
                <Body.Item>
                  <Icon>{<img src={icon} />}</Icon>
                  <Number>{number} ta</Number>
                  <Desc>{desc}</Desc>
                </Body.Item>
              </div>
            )
          })
        }
      </Body>
    </Container>
  </div>;
};

export default Statistika;
