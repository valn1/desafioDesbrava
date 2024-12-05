import React from 'react';
import { StyledIcon } from './styles';
import { IconProps } from '../../entities/componentEntities/Icon';

const Icon: React.FC<IconProps> = (props) => {
    return <StyledIcon {...props} />;
};

export default Icon;