import React, { useState, useEffect } from 'react'
import C from '../components/Country'
import styled from 'styled-components'

const Search = ({countries, searchCountry, searchChange}) => {
  console.log(countries) // array countries = [{Country: "USA"}, {Country: "Philippines"}]

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 50px;

    .box {
      background-color: #fff;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      border-radius: 5px;
      padding: 30px;
      margin: 30px;
      text-align: center;
    }
  `
  const Form = styled.form`
    margin-top: 100px;

    input {
      padding: 10px 20px;
      width: 300px;
    }
  `

  return (
    <div>
      <Form>
        <input 
          type="search" 
          value={searchCountry}
          onChange={searchChange}
          placeholder="Search country..." 
        />
      </Form>

      <Wrapper>
       {countries.map(({ Country, TotalConfirmed, CountryCode }) => {
         return <C key={CountryCode} country={Country} tconfirmed={TotalConfirmed} className='box'/>
       })}
      </Wrapper>
    </div>
  )
}

export default Search
