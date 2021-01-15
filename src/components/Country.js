import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 5px;
    width: 200px;
    padding: 0 35px;
    margin: 20px;
    text-align: center;
    line-height: 1.1;
  `

const Country = ({country, tconfirmed, tdeaths, trecovered}) => {

  return (
    <Box>
      <h3>{country}</h3>
      <p>Total Confirmed:</p>
      <p>{tconfirmed.toLocaleString()}</p>
      <p>Total Deaths:</p>
      <p>{tdeaths.toLocaleString()}</p>
      <p>Total Recovered:</p>
      <p>{trecovered.toLocaleString()}</p>
    </Box>
  )
}

export default Country
