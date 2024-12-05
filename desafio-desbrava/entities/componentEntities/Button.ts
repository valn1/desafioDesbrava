import { TouchableOpacityProps } from "react-native";
import { IconProps } from "./Icon";

export type ButtonProps = TouchableOpacityProps & {
    title?: string;
    quiet?: boolean;
    bordered?: boolean;
    disabled?: boolean;
    filled?: boolean;
    rtl?: boolean;
    iconProps?: IconProps;
};