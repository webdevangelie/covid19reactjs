import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TrackerList from './components/TrackerList';
import Graph from './pages/Graph'
import Search from './pages/Search'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [confirmed, setConfirmed] = useState()
  const [deaths, setDeaths] = useState()
  const [recovered, setRecovered] = useState()
  const [loadStatus, setLoadStatus] = useState('loading')
  
  useEffect(() => {
    getData()
  }, [] )

  const getData = async () => {
    const response = await fetch('https://api.covid19api.com/summary')
    const data = await response.json()
    console.log(data)
    setConfirmed(data.Global.TotalConfirmed)
    setDeaths(data.Global.TotalDeaths)
    setRecovered(data.Global.TotalRecovered)
    setLoadStatus('loaded')
    }

  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={() => loadStatus === "loaded" ? 
          <TrackerList 
            confirmed={confirmed} 
            deaths={deaths} 
            recovered={recovered} 
          /> 
        : <div>Loading...</div>
        } />
          
          <Route path='/graph' component={Graph} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
