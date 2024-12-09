import { TextInputProps as txtInputProps } from "react-native";

export type TextInputProps = txtInputProps & {
    label?: string;
    quiet?: boolean;
    bordered?: boolean;
    disabled?: boolean;
    filled?: boolean;
    rtl?: boolean;
    invalid?: boolean;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    fixedLabel?: boolean;
    fontSize?: number;
    textTreatment?: (text: string) => string;
};