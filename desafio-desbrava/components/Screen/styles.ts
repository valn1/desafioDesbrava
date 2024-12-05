import styled from "styled-components/native";
import Text from "../Text";

export const StyledView = styled.SafeAreaView`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.background};
`;

export const StyledContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'center'
    }
})`
`;

export const StyledTitle = styled(Text).attrs({
    bold: true
})`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    border:2px solid ${({ theme }) => theme.secondaryBorder};
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    text-align: left;
    padding: 0 20px;
`;