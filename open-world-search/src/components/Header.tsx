import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    onToggle: () => void;

}
// Display name and theme toggle
export default function Header({ onToggle }: HeaderProps) {
    return (
        <>
            <header className='header'>
                <h1>Where in the world?</h1>
                <ThemeToggle onToggle={onToggle} />
            </header>
            
        </>
    );
}