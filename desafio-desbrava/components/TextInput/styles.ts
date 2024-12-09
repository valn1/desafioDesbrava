import styled from "styled-components/native";
import { TextInputProps } from "../../entities/componentEntities/TextInput";
import { RefObject } from "react";
import { TextInput } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { NativeTouchEvent } from "react-native";

type internalProps = {
    focused?: boolean;
    value?: string;
    onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}
type boxProps = Pick<TextInputProps,'bordered' | 'filled' | 'quiet' | 'disabled' | 'label' | 'rtl' | 'invalid' | 'style'> & internalProps
type labelProps = Pick<internalProps,'focused' | 'value'> & Pick<TextInputProps,'placeholder' | 'rtl' | 'fixedLabel' | 'invalid'> & {size?:number}

export const InputBox = styled.Pressable<boxProps>`
    border-radius: 4px;
    margin: 15px auto;
    flex-direction: row;
    align-items: center;
    height: 40px;
    width:50%;
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
    ${({ theme,quiet,bordered, invalid }) => bordered && !quiet && `border: 1px solid ${invalid ? theme.danger : theme.secondaryBorder};`}
    ${({ theme,quiet,filled }) => filled && !quiet && `background-color: ${theme.card};`}
`;

export const StyledLabel = styled.Text<labelProps>`
    font-size: ${({ size }) => size || 16}px;
    color: ${({ theme,invalid }) => invalid ? theme.danger : theme.text};
    bottom: ${({ focused, value, placeholder }) => focused || value || placeholder  ? '40px' : '10px'};
    opacity: ${({ focused, value, placeholder }) => focused || value || placeholder  ? 1 : 0.7};
    ${({ rtl }) => rtl ? 'right' : 'left'}: 10px;
    position: absolute;
`;

export const StyledInput = styled.TextInput.attrs(({theme})=>({
    placeholderTextColor: theme.text+'80',
    cursorColor: theme.primary,
}))<TextInputProps&{ref:RefObject<typeof TextInput>}>`
    flex: 1;
    font-size: ${({ fontSize }) => fontSize || 16}px;
    padding: 0 10px;
    text-align: ${({ rtl }) => rtl ? 'right' : 'left'};
    color: ${({ theme }) => theme.text};
    ${({ theme,invalid }) => invalid ? `border-color: ${theme.danger};` : ''}
`;