import React from 'react';
import { natijalarData } from '../../utilits/NatijalarData';
import { messengerData } from '../../utilits/PageOneData';
import { Container, NatijaContainer, TitleContainer, Body, Image,Status, Tit, Desc, Messenger } from './style'

const Natijalar = () => {
  return <Container>
    <TitleContainer>
      <span>
        <span>WebBrain </span>akademiyasi o’z faoliyati davomida <span>200 dan ortiq </span> dasturlash sohasi vakillarini tayyorlagan.
      </span>
    </TitleContainer>
    <NatijaContainer>
      <Body>
        {
          natijalarData.map(({ id, img, fullName, status, desc }) => {
            return (
              <div key={id}>
                <Body.Item id={id} >
                  <Image>{<img src={img} />}</Image>
                  <Tit>{fullName}</Tit>
                  <Status>{status}</Status>
                  <Desc>{desc}</Desc>
                  {
                    messengerData.map(({id,facebook,insta,youtube,github})=>{
                      return(
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
              </div>
            )
          })
        }
      </Body>
    </NatijaContainer>
  </Container>;
};

export default Natijalar;
