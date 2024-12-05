import React, { createContext, useContext, useState } from 'react';
import { ThemeType } from '../entities/commons/theme';
import { themes } from '@/constants/theme';
import { ThemeProvider as SThemeProvider } from 'styled-components/native';

interface ThemeContextProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<ThemeType>(themes.light);
    const toggleTheme = () => {
        const newTheme = theme.name === 'light' ? themes.dark : themes.light;
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <SThemeProvider theme={theme}>
                {children}
            </SThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};