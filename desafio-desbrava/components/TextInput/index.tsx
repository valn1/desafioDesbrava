import React, { createRef, useEffect } from "react";
import { TextInputProps } from "../../entities/componentEntities/TextInput";
import { InputBox, StyledInput, StyledLabel } from "./styles";
import { TextInput as BaseTextInput } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { TextInputFocusEventData } from "react-native";
import { useKeyboard } from "@/hooks/keyboard";

const TextInput: React.FC<TextInputProps> = ({ onFocus, onBlur, ...props }) => {
    const [focused, setFocused] = React.useState(false);
    const [_value, setValue] = React.useState(props.value);
    const input = createRef<typeof BaseTextInput & {blur:()=>void,focus:()=>void}>();
    const { visible } = useKeyboard();

    const focus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocused(true)
        onFocus?.(e);
    };

    const blur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocused(false)
        onBlur?.(e);
    };

    const onChangeText = (text: string) => {
        props.onChangeText?.(text);
        setValue(props.textTreatment?.(text) || text);
    };

    const labelProps = {
        focused,
        value: _value,
        placeholder: props.placeholder,
        rtl: props.rtl,
        size: props.fontSize,
    };

    useEffect(() => {
        if (!visible) {
            input.current?.blur();
        }
    }, [visible]);

    return (
        <InputBox {...props} onPress={()=>input.current?.focus()} >
            {props.leftSlot && props.leftSlot}
            {props.label && <StyledLabel {...labelProps} >{props.label}</StyledLabel>}
            <StyledInput ref={input} onFocus={focus} onBlur={blur} {...props} value={_value} onChangeText={onChangeText} />
            {props.rightSlot && props.rightSlot}
        </InputBox>
    );
}

export default TextInput;