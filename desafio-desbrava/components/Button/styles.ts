import styled from "styled-components/native";
import { ButtonProps } from "../../entities/componentEntities/Button";

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    margin: 5px auto;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    ${({ bordered, theme }) => bordered ? `border: 1px solid ${theme.primaryBorder};` : ''}
    ${({ filled, theme }) => filled ? `background-color:${theme.primary};` : ''}
    ${({ secondary, theme }) => secondary ? `background-color:${theme.secondary};` : ''}
    ${({ quiet }) => quiet ? 'background-color: transparent;' : ''}
    ${({ disabled }) => disabled ? 'opacity: 0.5;' : ''}
    ${({ secondary, theme }) => secondary ? `border-color:${theme.secondaryBorder};` : ''}
`;