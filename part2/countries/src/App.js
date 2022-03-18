import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import Content from './components/content'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('Promise fulfilled')
      setAllCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.common.match(regex))
      setCountries(filteredCountries)
    }
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} />
    </div>
  )
}

export default App