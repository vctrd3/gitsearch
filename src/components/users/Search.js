import React, { useState } from 'react'

const Search = ({clearUsers, showClear, searchUsers, setAlert}) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    if(text === ''){
      setAlert('Please enter something', 'light')
    } else{
      searchUsers(text)
    setText('')
    }
  }
    
  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <input type="text" name="text" value={text} placeholder="Search user"
        onChange={handleOnChange}
        />
        <input type="submit" value="search" className="btn btn-dark btn-block" />
      </form>
      {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
      
    </div>
    )
  }


export default Search
