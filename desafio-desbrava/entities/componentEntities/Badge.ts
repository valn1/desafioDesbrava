import { IconProps } from "./Icon"

export type BadgeProps = {
    size?: number,
    color?: string,
    icon?: Omit<IconProps, 'size'>,
    text?: string
}