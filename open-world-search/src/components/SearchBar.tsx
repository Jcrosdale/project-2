
interface SearchBarProps {
    // Current text stored in state
    searchTerm: string;

    // Receives updated text
    onSearchChange: (value: string) => void;
    
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    return (
        <input 
        id='site-search' 
        type='text' 
        placeholder='Search for a country..'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
    )
}