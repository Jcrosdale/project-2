// Connect custom hook to App

// Import
import { useState, useEffect } from 'react';
import useCountries from './hooks/useCountries';
import CountryDisplay from './components/CountryDisplay';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';


export default function App() {
  // Values from hook, destructured
  const { countries, loading, error } = useCountries();
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Handler theme toggle
  const handleThemeToggle = () => {
    setIsDark(prevDark => !prevDark);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark])

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
});


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
    <Header onToggle={handleThemeToggle} isDark={isDark}/>
    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion}/>
    {/* For every country in this array, create this */}
    <CountryDisplay countries={filteredCountries} />
    
    
    
    </>
  )
}
