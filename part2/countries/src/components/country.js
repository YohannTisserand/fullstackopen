import React, { useState, useEffect } from 'react'
import Languages from './language'

const Country = ({country}) => {
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>Spoken languages</h2>
       <Languages country={country} />
       <img src={country.flags.png} alt="Country flag"></img>
      </div>
  )
}

export default Country
