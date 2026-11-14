// Import
import type { Country } from '../types/Country';

// Prop for component
interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    
    return (
        <div className='country-card'>
            {country.flag.url_svg && (
                <img src={country.flag.url_svg} 
                     alt={`Flag of ${country.names.official}`}
                />
            )}
            <h2>{country.names.common}</h2>
        </div>
    )
}

