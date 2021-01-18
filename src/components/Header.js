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
    justify-content: space-around;
    background-color: blue;
    color: white;
    z-index: 100;

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
      <Navbar>
        <h1>COVID19 Global Tracker</h1>
        <h5>{`${new Date()}`}</h5> 
        <nav>
          <Link to='/covide19reactjs'>
            <li>Search</li>
          </Link>
          <Link to='/covide19reactjs/summary'>
           <li>Summary</li>
          </Link>
        </nav>
      </Navbar>
  )
}


export default Header