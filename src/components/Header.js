import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: space-evenly;
    background-color: blue;
    color: white;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        list-style: none;
        padding-right: 1.5rem;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }

  `

const Header = () => {

  return (
    <div>
      <Navbar>
        <h1>COVID19 Global Tracker</h1>
        <nav>
          <Link to='/'>
            <li>Search</li>
          </Link>

          <Link to='/summary'>
           <li>Summary</li>
          </Link>
          
          <Link to='/graph'>
            <li>Graph</li>
          </Link>
        </nav>
      </Navbar>
      <h3>{`Date: ${new Date()}`}</h3> 
    </div>
  )
}


export default Header