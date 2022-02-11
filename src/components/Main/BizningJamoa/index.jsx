

import React from 'react';
import { bizningJamoaData, messengerData } from '../../../utilits/PageOneData';
import { Container,Wrapper,Link, Title, Body, Image, Status, Tit, Desc,Messenger } from './style';
const BizningJamoa = () => {
  return <div>
    <Container>
    <Wrapper>
        <Title>Bepul darsliklar</Title>
        <Link>barcha mentorlar</Link>
      </Wrapper>
      <Body>
        {
          bizningJamoaData.map(({ id, img, fullname, status, desc }) => {
            return (
              <div key={id}>
                <Body.Item>
                  <Image>{<img src={img} style={{ width: '150px' }} />}</Image>
                  <Tit>{fullname}</Tit>
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
    </Container>
  </div>;
};

export default BizningJamoa;
