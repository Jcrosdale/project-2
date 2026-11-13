// Switch between dark and light mode
interface ThemeToggleProps {
    onToggle: () => void;
    isDark: boolean;
}

export default function ThemeToggle({ onToggle, isDark }: ThemeToggleProps) {
    return (
        <button id="theme-switch" onClick={onToggle}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}