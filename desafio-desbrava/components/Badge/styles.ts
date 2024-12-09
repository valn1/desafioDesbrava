import { BadgeProps } from "@/entities/componentEntities/Badge";
import styled from "styled-components/native";

export const Container = styled.View<BadgeProps>`
    width: ${({ size, icon }) => (size || 10 * (icon?.name ? 2 : 1))}px;
    height: ${({ size }) => (size || 10)}px;
    background-color: ${({ color }) => color || 'transparent'};
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    margin: auto;
`;