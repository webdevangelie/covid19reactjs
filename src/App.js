import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TrackerList from './components/TrackerList';
import './App.css';

const App = () => {

  const [confirmed, setConfirmed] = useState()
  const [deaths, setDeaths] = useState()
  const [recovered, setRecovered] = useState()
  
  useEffect(() => {
    getData()
  }, [] )

  const getData = async () => {
    const response = await fetch('https://api.covid19api.com/summary')
    const data = await response.json()
    setConfirmed(data.Global.TotalConfirmed)
    setDeaths(data.Global.TotalDeaths)
    setRecovered(data.Global.TotalRecovered)
    }

  return (
    <div className="App">
      <Header />
      <Tracker confirmed={confirmed} />
      <Tracker deaths={deaths} />
      <Tracker recovered={recovered} />
    </div>
  );
}

export default App;
