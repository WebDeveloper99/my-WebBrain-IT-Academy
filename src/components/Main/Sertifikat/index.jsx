
import sertifikat from '../../../assets/images/sertifikat.jpg'


import React from 'react';
import { Body, Container, Description, Page, Title, WrapperIMG } from './style';
const Sertifikat = () => {
  return <div>
    <Container>
      <Title>
      Sertifikat
      </Title>
      <Body>
        <WrapperIMG>
          <Page>{<img src={sertifikat} />}</Page>
        </WrapperIMG>
        <Description>
          <Description.Page>
            <Description.PageTitle>
            +200 o'quvchilar bizga ishonishgan
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

export default Sertifikat;
