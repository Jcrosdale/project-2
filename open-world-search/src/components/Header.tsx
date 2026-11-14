import ThemeToggle from "./ThemeToggle";

// Display name and theme toggle
export default function Header() {
    return (
        <>
            <header className='header'>
                <h1>Where in the world?</h1>
                <ThemeToggle />
            </header>

        </>
    );
}