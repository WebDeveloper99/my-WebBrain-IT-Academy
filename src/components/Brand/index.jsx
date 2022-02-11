
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandWrapper } from './style';
import './style'

const Brand = () => {

    const navigate = useNavigate()

  return <div>
      <BrandWrapper  onClick={() => navigate('/')}  blue >
          web<BrandWrapper>brain.</BrandWrapper>
      </BrandWrapper>
  </div>;
};

export default Brand;
