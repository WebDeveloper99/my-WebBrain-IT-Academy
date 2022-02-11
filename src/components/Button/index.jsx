
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultBtn } from './style';
import './style'

const Button = ({btnName, border, width, height, color,activ}) => {

    const navigate = useNavigate()

    return <div>
        <DefaultBtn  border={`${border}`} width={`${width}`} height={`${height}`} color={`${color}`} activ={`${activ}`} >
            {btnName}
        </DefaultBtn>
    </div>;
};

export default Button;
