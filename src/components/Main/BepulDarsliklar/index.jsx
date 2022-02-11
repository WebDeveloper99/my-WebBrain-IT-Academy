

import React from 'react';
import Button from '../../Button';
import { bepulDarsliklarData } from '../../../utilits/PageOneData';
import { Container,Wrapper, Link, Title, Body, Image, Tit, Desc,} from './style';
import { Navigate, Route, Routes } from 'react-router-dom';



const BepulDarsliklar = () => {


  return <div>
    <Container>
    <Wrapper>
        <Title>Bepul darsliklar</Title>
        <Link to={'/kurslarimiz'} onClick={()=>( <Route path={'/kurslarimiz'} element={<Navigate to={'/kurslarimiz'}/>}/>  )} >barcha kurslar</Link>
      </Wrapper>
      <Body>
        {
          bepulDarsliklarData.map(({id, img, title, desc})=>{
            return(
              <div key={id}>
                <Body.Item>
                  <Image>{<img src={img} style={{width: '250px'}} />}</Image>
                  <Tit>{title}</Tit>
                  <Desc>{desc}</Desc>
                  <Button btnName={`Ko'rish`} />
                </Body.Item>
              </div>
            )
          })
        }
      </Body>
    </Container>
  </div>;
};

export default BepulDarsliklar;
