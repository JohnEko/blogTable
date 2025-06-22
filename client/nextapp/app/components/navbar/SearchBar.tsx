import React from 'react'
import "./searchMenu.css"


const SearchBar = ()=> {
  return (
        <div className='search-bar'>
          <form action="">
            <input type="text" placeholder='search' className='search-input'/>
            {/* <input type="text" name="q" size="32" /> */}
            <input type="submit" value="Search" className='search'/>
          </form>
        </div> 
  )
}
export default SearchBar
