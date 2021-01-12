import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 5px;
    width: 300px;
    padding: 30px;
    margin: 30px;
    text-align: center;

    button {
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    }
  `

const Country = ({country, tconfirmed}) => {

  return (
    <Box>
      <h2>{country}</h2>
      <p>Total Confirmed Cases:</p>
      <p>{tconfirmed.toLocaleString()}</p>
      <button>See More</button>
    </Box>
  )
}

export default Country
