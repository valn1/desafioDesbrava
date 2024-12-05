import React from 'react';
import { ButtonProps } from '../../entities/componentEntities/Button';
import Text from '../Text';
import Icon from '../Icon';
import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({ children, title, rtl, iconProps, ...props }) => {

    return <StyledButton {...props}>
        <>
            {!rtl && iconProps?.name && <Icon {...iconProps} />}
            {!rtl && title && <Text>{title}</Text>}
            {children}
            {rtl && title && <Text>{title}</Text>}
            {rtl && iconProps?.name && <Icon {...iconProps} />}
        </>
    </StyledButton>;
};

export default Button;