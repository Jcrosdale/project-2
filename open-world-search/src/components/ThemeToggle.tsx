// Switch between dark and light mode

// Imports
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Use ThemeToggle within ThemeProvider')
    }

    const { isDark, toggleTheme } = context;

    return (
        <button id='theme-switch' onClick={toggleTheme}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}