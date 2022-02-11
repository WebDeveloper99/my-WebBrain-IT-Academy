import React from 'react';
import { bizningJamoaData } from '../../utilits/PageOneData';
import { messengerData } from '../../utilits/PageOneData';
import { Container, TeamContainer, TitleContainer, Body, Image, Status, Tit, Desc, Messenger } from './style'

const BizningJamoaPage = () => {
  return <Container>
    <TitleContainer>
      <span>
        <span>WebBrain </span>akademiyasida sizga nazariy va amaliy jihatdan <span>katta tajribali </span>mentorlar dars beradi
      </span>
    </TitleContainer>
    <TeamContainer>
      {
        bizningJamoaData.map(({ id, img, fullname, status, desc }) => {
          return (
            <div key={id}>
              <Body>
                <Body.Item>
                  <Image>{<img src={img} style={{ width: '150px' }} />}</Image>
                  <Tit>{fullname}</Tit>
                  <Status>{status}</Status>
                  {
                    messengerData.map(({ id, facebook, insta, youtube, github }) => {
                      return (
                        <Messenger key={id} >
                          {<img src={facebook} />}
                          {<img src={insta} />}
                          {<img src={youtube} />}
                          {<img src={github} />}
                        </Messenger>
                      )
                    })
                  }
                </Body.Item>
                <Desc>{desc}</Desc>
              </Body>
            </div>
          )
        })
      }
    </TeamContainer>
  </Container>;
};

export default BizningJamoaPage;
