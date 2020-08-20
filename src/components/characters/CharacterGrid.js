import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? <h1>Loading...</h1> : <section className="cards">
    {items.map(item => (
      // each child in a list needs an unique id
      <CharacterItem key={item.char_id} item={item}></CharacterItem>
    ))}
  </section>
}

export default CharacterGrid
