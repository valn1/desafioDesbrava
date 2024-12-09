import styled from "styled-components/native";
import Button from "../Button";

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.secondaryBorder};
    margin-vertical: 10px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;

export const OrderButton = styled(Button)`
    height: 40px;
`;

export const InvertButton = styled(Button)`
    height: 40px;
    width: 40px;
    padding: 0;
    justify-content: center;
`;