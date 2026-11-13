// Connect custom hook to App

// Import
import useCountries from './hooks/useCountries';

export default function App() {
  // Values from hook, destructured
  const { countries, loading, error } = useCountries();

  // Check if loading
  if (loading) {
    return <p>Loading data...</p>
  }

  // Check if error
  if (error) {
    return <p>Error while loading: {error}</p>
  }

  return (
    <>
    <h1>Open World Search</h1>
    {/* For every country in this array, create this */}
    {countries.map((country) => (
      <div key={country.ccn3}>
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        <h2>{country.name.common}</h2>

      </div>
      
    ))}
    
    </>
  )
}
