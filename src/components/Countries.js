import React from 'react'
import C from './Country'

const Countries = ({filteredCountry}) => {
  return (
    <div>
      {filteredCountry.map(({ Country, TotalConfirmed, CountryCode }) => {
        return <C key={CountryCode} country={Country} tconfirmed={TotalConfirmed} className='box'/>
      })}
    </div>
  )
}

export default Countries