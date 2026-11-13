// Display list of countries

// Import
import type { Country } from '../types/Country';
import CountryCard from './CountryCard';

interface CountryDisplayProps {
    countries: Country[];
}

export default function CountryDisplay({ countries }: CountryDisplayProps) {
    const countryList = countries.map(country => {
        return <CountryCard key={country.ccn3} country={country} />
    })

    return (
        <>
            <h1>List of Countries</h1>
            {countryList}
        </>
    )
}
