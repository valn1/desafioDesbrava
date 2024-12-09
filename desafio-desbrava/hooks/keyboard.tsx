import React, { createContext, useContext, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

interface KeyboardContextProps {
    visible: boolean;
    dismiss: () => void;
};

const KeyboardContext = createContext<KeyboardContextProps | undefined>(undefined);

interface KeyboardProviderProps {
    children: React.ReactNode;
};

export const KeyboardProvider: React.FC<KeyboardProviderProps> = ({ children }) => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setVisible(false));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <KeyboardContext.Provider value={{ visible, dismiss: Keyboard.dismiss }}>
            {children}
        </KeyboardContext.Provider>
    );
};

export const useKeyboard = () => {
    const context = useContext(KeyboardContext);

    if (!context) {
        throw new Error('useKeyboard must be used within an KeyboardProvider');
    };

    return context;
};