// Connect custom hook to App

// Import
import { useState, useEffect } from 'react';
import useCountries from './hooks/useCountries';
import CountryDisplay from './components/CountryDisplay';
import Header from './components/Header';


export default function App() {
  // Values from hook, destructured
  const { countries, loading, error } = useCountries();
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(prevDark => !prevDark);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark])
  

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
    <Header onToggle={handleThemeToggle} />
    {/* For every country in this array, create this */}
    <CountryDisplay countries={countries}></CountryDisplay>
    
    
    </>
  )
}
