import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import CountriesSearch from './component/CountriesSearch';
import SearchResult from './component/SearchResult';


function App() {

  const [newFilter, setNewFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const handFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(respuesta => {
        if (newFilter !== '') {
          const countries = respuesta.data
          const resultsFilter = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
          setFilteredCountries(resultsFilter)
        }
      })
  }, [newFilter])

  const api_key = process.env.REACT_APP_API_KEY

  return (
    <>
      <CountriesSearch newFilter={newFilter} handFilterChange={handFilterChange}/> 
      <SearchResult 
      setNewFilter={setNewFilter} 
      filteredCountries={filteredCountries} 
      api_key={api_key}
      newFilter={newFilter}/> 
    </>
  );
}

export default App;
