import team1 from '../../../assets/images/team1.png'
import team2 from '../../../assets/images/team2.png'

import React from 'react';
import { Body, Container, Description, Page, Page2, Title, WrapperIMG } from './style';
const BizHaqimizda = () => {
  return <div>
    <Container>
      <Title>
        Biz Haqimizda
      </Title>
      <Body>
        <WrapperIMG>
          <img src={team1} />
          <img src={team2} />
        </WrapperIMG>
        <Description>
          <Description.Page>
            <Description.PageTitle>
              Biz haqimizda faqat bizdan so'rang
            </Description.PageTitle>
            <Description.PageDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, maiores
              nemo illo nihil tenetur aut aliquid enim perspiciatis. Minus cumque numquam
              ullam iusto officia asperiores neque assumenda mollitia excepturi fuga?
            </Description.PageDesc>
          </Description.Page>
        </Description>
      </Body>
    </Container>
  </div>;
};

export default BizHaqimizda;
