// Import
import type { Country } from '../types/Country';

// Prop for component
interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    
    return (
        <div className='country-card'>
            <img src={country.flag.svg} alt={`Flag of ${country.names.official}`} />
            <h2>{country.names.common}</h2>
        </div>
    )
}

