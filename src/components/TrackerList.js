import React, { Fragment } from 'react'
import Tracker from './Tracker'

const TrackerList = ({confirmed, deaths, recovered}) => {
  return (
    <Fragment>
      <Tracker />
      <Tracker />
      <Tracker />
    </Fragment>
  )
}

export default TrackerList