import page1 from '../../assets/images/page1-1.png'
import page2 from '../../assets/images/page1-2.png'
import page3 from '../../assets/images/page1-3.png'

import React from 'react';
import { HeaderContainer, HeaderTitle, WrapperIMG, Page, Page2, TitleBtn, TitleBtnGroup, Link } from './style'
import Button from '../Button';

const Header = () => {
    return <div>
        <HeaderContainer>
            <HeaderTitle>

                <span><HeaderTitle.Span>Eng kuchli </HeaderTitle.Span>
                    va zamonaviy o’qitish uslubida ta’lim beruvchi
                    <HeaderTitle.Span> markaz </HeaderTitle.Span>
                </span>
                <TitleBtnGroup>
                    <Link to={'/kurslarimiz'}>
                        <Button btnName={'Kurslarimiz'} width={'226px'} activ={'activ'} color={'#fff'}/>
                    </Link>
                    <Link to={'/aloqa'}>
                        <Button btnName={'Aloqa'} width={'226px'} color={''} />
                    </Link>
                </TitleBtnGroup>
            </HeaderTitle>
            <WrapperIMG>
                <img src={page1} />
                <img src={page2} />
                <img src={page3} />
            </WrapperIMG>
        </HeaderContainer>
    </div>;
};

export default Header;
