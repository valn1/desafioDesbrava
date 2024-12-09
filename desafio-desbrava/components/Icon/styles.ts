import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconProps } from "../../entities/componentEntities/Icon";

export const StyledIcon = styled(Ionicons)<IconProps>`
    ${({ size }) => size ? `font-size: ${size}px;` : ''}
    color: ${({ color, theme }) => color || theme.text};
`;