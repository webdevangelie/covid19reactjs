import React from 'react'
import styled from 'styled-components'
import Grave from './Grave'
//import Recovered from './Recovered'
import virus from '../assets/virus.png'
import heart from '../assets/heart.png'

const Image = styled.img`
  width: 100px;
  height: 100px;
`

const Data = styled.div`
    margin: 90px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .box {
      background-color: #fff;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      border-radius: 5px;
      width: 250px;
      padding: 30px;
      margin: 30px;
      text-align: center;
      position: relative;
      overflow: hidden;

      h2 {
        text-align: center;
      }
    }

    .box-confirmed::after {
      background-color: red;
    }

    .box-death::after {
      background-color: black;
    }
  `

const TrackerList = ({confirmed, deaths, recovered}) => {

  return (
    <Data>
      <div className='box box-confirmed'>
        <h2>Total Confirmed</h2>
        <p>{confirmed.toLocaleString()}</p>
       <Image src={virus} alt="Virus clipart"></Image>
      </div>

      <div className='box box-death'>
        <h2>Total Deaths</h2>
        <p>{deaths.toLocaleString()}</p>
        <Grave />
      </div>

      <div className='box box-recovered'>
        <h2>Total Recovered</h2>
        <p>{recovered.toLocaleString()}</p>
        { /*<Recovered /> */}
        <Image src={heart} alt="heart clipart"></Image>
      </div>
    </Data>
  )
}

export default TrackerList