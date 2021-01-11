import React from 'react'
import Country from './Country'

const Countries = (countries) => {
  return (
    <div>
      {countries.map(country => (
        <Country country={countries.Country} tconfirmed={countries.TotalConfirmed} key={countries.CountryCode} />
      ))}
    </div>
  )
}

export default Countries