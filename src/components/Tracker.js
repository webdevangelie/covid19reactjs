import React, { Fragment } from 'react'

const Tracker = () => {
  return (
    <Fragment>
      <h2>Total Confirmed</h2>
      <p>{confirmed.toLocaleString()}</p>
      <img src="img/virus.png" alt="" /> 
    </Fragment>
)}

export default Tracker