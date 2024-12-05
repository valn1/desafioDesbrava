import { ThemeType } from "@/entities/commons/theme";

export const themes: Record<string, ThemeType> = {
    dark: {
        name: 'dark',
        primary: '#238636',
        secondary: '#212830',
        primaryBorder: '#39924a',
        secondaryBorder: '#3d444d',
        background: '#0d1117',
        text: '#f0f6fc',
    },
    light: {
        name: 'light',
        primary: '#1f883d',
        secondary: '#f6f8fa',
        primaryBorder: '#1d7337',
        secondaryBorder: '#d1d9e0',
        background: '#ffffff',
        text: '#1f2328',
    }
}