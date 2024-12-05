import { TextProps as TXTProps } from "react-native";

export type TextProps = TXTProps & {
    children?: React.ReactNode;
    args?: string[];
    color?: string;
    size?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
}