import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    onToggle: () => void;
    isDark: boolean;

}
// Display name and theme toggle
export default function Header({ onToggle, isDark }: HeaderProps) {
    return (
        <>
            <header className='header'>
                <h1>Where in the world?</h1>
                <ThemeToggle onToggle={onToggle} isDark={isDark} />
            </header>

        </>
    );
}