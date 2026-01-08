import React from 'react'
import searchIcon from '../assets/search.png'


const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
                <img src={searchIcon} alt="search" />

            <input 
            type="text"
            placeholder='Search through thousands of movies'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search