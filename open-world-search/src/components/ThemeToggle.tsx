// Switch between dark and light mode
interface ThemeToggleProps {
    onToggle: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
    return (
        <button id="theme-switch" onClick={onToggle}>
            Dark Mode
        </button>
    )
}