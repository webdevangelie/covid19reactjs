import React from 'react'
import C from './Country'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

const Countries = ({filteredCountry}) => {
  return (
    <Wrapper>
      {filteredCountry.map(({ Country, TotalConfirmed, TotalRecovered, TotalDeaths, CountryCode }) => {
        return <C key={CountryCode} country={Country} tconfirmed={TotalConfirmed} tdeaths={TotalDeaths} trecovered={TotalRecovered} />
      })}
    </Wrapper>
  )
}

export default Countries