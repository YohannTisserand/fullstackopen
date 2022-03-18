import React from "react";
import Country from "./country";

const Content = ({countries, setCountries}) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]}/>
    ) 
  }
  return (
  <ul>
    {countries.map(country => 
    <li key={country.name.common}>{country.name.common} <button onClick={() => setCountries([country])}>show</button></li>
    )}
  </ul>
  )
}

export default Content