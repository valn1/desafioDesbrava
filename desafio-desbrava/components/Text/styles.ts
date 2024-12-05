import styled from 'styled-components/native';
import { TextProps } from '../../entities/componentEntities/Text';

export const CustomText = styled.Text<TextProps>`
    font-size: 16px;
    text-align: center;
    color: ${({ color, theme }) => color || theme.text};
    ${({ size }) => size ? `font-size: ${size}px;` : ''}
    ${({ bold }) => bold ? 'font-weight: bold;' : ''}
    ${({ italic }) => italic ? 'font-style: italic;' : ''}
    ${({ underline }) => underline ? 'text-decoration: underline;' : ''}
    ${({ strikeThrough }) => strikeThrough ? 'text-decoration: line-through;' : ''}
`;