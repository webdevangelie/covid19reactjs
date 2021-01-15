import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin-top: 120px;

    input {
      padding: 10px 20px;
      width: 300px;
    }
  `

const Search = ({searchValue, setSearchValue}) => {
  // console.log(countries) // array countries = [{Country: "USA"}, {Country: "Philippines"}]

  const handleSearch = e => {
    setSearchValue(e.target.value)
  }

  return (
    <div>
      <Form>
        <input 
          type="search" 
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search country..." 
        />
      </Form>
      
      
      
    </div>
  )
}

export default Search
