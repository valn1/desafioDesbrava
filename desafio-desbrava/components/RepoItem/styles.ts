import styled from "styled-components/native";
import Text from "../Text";

export const RepoName = styled(Text).attrs({ numberOfLines: 1, ellipsizeMode: 'tail' })`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.accent};
    align-items: center;
    justify-content: center;
    min-width: 10%;
    max-width: 70%;
`;

export const ItemHeader = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    width: 100%;
    height: 50px;
    align-items: center;
`;

export const Languages = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: right;
    margin-left: auto;
    gap: 5px;
    max-width: 30%;
`;

export const Description = styled(Text).attrs({ numberOfLines: 3, ellipsizeMode: 'tail' })`
    color: ${({ theme }) => theme.text};
`;

export const Details = styled(Text)`
    color: ${({ theme }) => theme.text}aa;
`;