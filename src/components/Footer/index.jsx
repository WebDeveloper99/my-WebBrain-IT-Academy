
import { Container, Wrapper, LeftBody, RightBody, BodyItemOne, Title, BodyItemTwo, BodyItemThree, BrandContainer } from './style';

import React from 'react';
import { footerDataOne, footerDataTwo, messengerData } from '../../utilits/PageOneData';
import Button from '../Button';
import Brand from '../Brand';
import { Outlet } from 'react-router-dom';

const Footer = () => {
    return <React.Fragment>
        <Outlet />
        <Container>
            <Wrapper>
                <LeftBody>
                    <LeftBody.DescFooter>
                        lorem lorem lorem lorem lorem
                        lorem lorem lorem lorem lorem
                        lorem lorem lorem lorem lorem
                        lorem lorem lorem lorem lorem
                    </LeftBody.DescFooter>
                    <LeftBody.Message>
                        {
                            messengerData.map(({ id, facebook, youtube, github }) => {
                                return (
                                    <div key={id} >
                                        {<img src={facebook} style={{ margin: '10px' }} />}
                                        {<img src={youtube} style={{ margin: '10px' }} />}
                                        {<img src={github} style={{ margin: '10px' }} />}
                                    </div>
                                )
                            })
                        }
                    </LeftBody.Message>
                </LeftBody>
                <RightBody>
                    <BodyItemOne>
                        <Title>WebBrain</Title>
                        {
                            footerDataOne.map(({ id, team, partners, lessons, abot }) => {
                                return (
                                    <div key={id} >
                                        <RightBody.Item>{team}</RightBody.Item>
                                        <RightBody.Item>{partners}</RightBody.Item>
                                        <RightBody.Item>{lessons}</RightBody.Item>
                                        <RightBody.Item>{abot}</RightBody.Item>
                                    </div>
                                )
                            })
                        }
                    </BodyItemOne>
                    <BodyItemTwo>
                        <Title>Others</Title>
                        {
                            footerDataTwo.map(({ id, docs, changelog, licence, support }) => {
                                return (
                                    <div key={id} >
                                        <RightBody.Item>{docs}</RightBody.Item>
                                        <RightBody.Item>{changelog}</RightBody.Item>
                                        <RightBody.Item>{licence}</RightBody.Item>
                                        <RightBody.Item>{support}</RightBody.Item>
                                    </div>
                                )
                            })
                        }
                    </BodyItemTwo>
                    <BodyItemThree>
                        <Title>Others</Title>
                        <LeftBody.DescFooter>
                            lore lorem lorem lorem lorem
                            lore lorem lorem lorem lorem
                            lore lorem lorem lorem lorem
                        </LeftBody.DescFooter>
                        <BodyItemThree.Input placeholder="email manzilingiz ..." />
                        <Button btnName={'yuborish'} color={'white'} width={'354px'} activ={'activ'} />
                    </BodyItemThree>
                </RightBody>
            </Wrapper>
        </Container>
        <BrandContainer>
            <Brand />
            <BrandContainer.Desc>
                lorem ipsum lorem 07rem lorem All 2022
            </BrandContainer.Desc>
        </BrandContainer>
    </React.Fragment>
};

export default Footer;
