import React, { useState } from 'react'

const Header = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <h1>Global COVID 19 Tracker</h1>
      <h3>{`Date: ${date}`}</h3> 
    </div>
  )
}

export default Header