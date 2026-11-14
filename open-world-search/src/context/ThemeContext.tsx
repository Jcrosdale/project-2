import { createContext, useState } from "react";
import type { ReactNode } from 'react'

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}
// Theme context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Theme provider
export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(false);
    
    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}