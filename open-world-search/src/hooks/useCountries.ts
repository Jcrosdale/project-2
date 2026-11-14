// Fetch country data

// Imports
import { useState, useEffect } from 'react';
import type { Country } from '../types/Country';

// Key
const API_KEY = import.meta.env.VITE_COUNTRIES_API_KEY;

export default function useCountries() {
    // Three state variables
    // Store country data from API
    const [countries, setCountries] = useState<Country[]>([]);

    // Loading API request
    const [loading, setLoading] = useState<boolean>(true);

    // Error message if request fails
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                // Send request to REST Countries API
                const response = await fetch('https://api.restcountries.com/countries/v5?limit=100&pretty=1',
                { signal: controller.signal,
                  headers: {
                    Authorization: `Bearer ${API_KEY}`,
                  },
                 });

                // Check if request went through
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }
                    
                // Get data from response
                const json = await response.json();
                
                console.log('Capitals:', json.data.objects[0].capitals)
                // Save country data in state
                setCountries(json.data.objects);

            } catch (err) {
                // Handle errors
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                // Stop loading after request completes
                if (!controller.signal.aborted) {
                    setLoading(false);
                }


            }}

            // Async function
            fetchData();

            // Cancel request 
            return () => controller.abort();

    }, []);

    // Return state variables for component to use
    return { countries, loading, error };
}
