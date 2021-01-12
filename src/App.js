import React, { useState, useEffect, Fragment } from 'react'
import Header from './components/Header'
import TrackerList from './components/TrackerList';
import Countries from './components/Countries'
import Graph from './pages/Graph'
import Search from './pages/Search'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

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

const App = () => {

  const [confirmed, setConfirmed] = useState(null)
  const [deaths, setDeaths] = useState(null)
  const [recovered, setRecovered] = useState(null)
  const [loadStatus, setLoadStatus] = useState('loading')
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
  const filteredCountry = countries.filter( country => {
    return country.Country.toLowerCase().includes(searchValue.toLowerCase()) 
  })
  

  useEffect(() => {
    getData()
    
  }, [] )


  const getData = async () => {
    const response = await fetch('https://api.covid19api.com/summary')
    const data = await response.json()

    setConfirmed(data.Global.TotalConfirmed)
    setDeaths(data.Global.TotalDeaths)
    setRecovered(data.Global.TotalRecovered)
    setCountries(data.Countries)
    setLoadStatus('loaded')
    }

  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={() => loadStatus === "loaded" ?
            <Fragment>
             <Search 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <Wrapper>
               <Countries filteredCountry={filteredCountry} />
             </Wrapper>
            </Fragment>

             : <div>Loading...</div>
          } />

          <Route path='/summary' render={() => loadStatus === "loaded" ? 
            <TrackerList 
              confirmed={confirmed} 
              deaths={deaths} 
              recovered={recovered} 
            /> 
            : <div>Loading...</div>
          } />
          
          <Route path='/graph' component={Graph} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
