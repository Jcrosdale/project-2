// Import
import type { Country } from '../types/Country';

// Prop for component
interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    
    return (
        <div className='country-card'>
            <img src={country.flags.svg} alt={`Flag of ${country.name.official}`} />
            <h2>{country.name.common}</h2>
        </div>
    )
}

