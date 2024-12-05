import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconProps } from "../../entities/componentEntities/Icon";

export const StyledIcon = styled(Ionicons)<IconProps>`
    ${({ size,name,theme }) => size ? `font-size: ${size}px;` : ''}
`;