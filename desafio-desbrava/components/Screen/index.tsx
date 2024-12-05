import React from "react";
import { ScreenProps } from "../../entities/componentEntities/Screen";
import { StyledContent, StyledTitle, StyledView } from "./styles";
import { StatusBar } from "react-native";
import { useTheme } from "@/hooks/theme";

export const Screen: React.FC<ScreenProps> = ({ children, name, showHeader }) => {
    const {theme} = useTheme();
    return (
        <StyledView>
            <StatusBar barStyle={theme.name === 'light' ? 'dark-content' : 'light-content'} backgroundColor={theme.background}  />
            {showHeader && <StyledTitle>{name}</StyledTitle>}
            <StyledContent>
                {children}
            </StyledContent>
        </StyledView>
    );
}