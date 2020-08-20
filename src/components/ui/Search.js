import React, { useState } from 'react'

// const Search = () => {
const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

    // search bar
    const onChange = (q) => {
      setText(q)
      getQuery(q)
    }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search character...'
          value={text}
          // sets form value to what was typed
          // onChange={(event) => setText(event.target.value)}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
