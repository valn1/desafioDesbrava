import React from 'react';
import { TextProps } from '../../entities/componentEntities/Text';
import { CustomText } from './styles';
import { replacePlaceholders } from './helper';

const VSText: React.FC<TextProps> = ({ children, args, ...props }) => {
    return <CustomText {...props}>{replacePlaceholders(children, args)}</CustomText>;
};

export default VSText;