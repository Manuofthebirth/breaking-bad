import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
          <figcaption>
            <h1 className="name-front">{item.name}</h1>
          </figcaption>  
        </div>
        <div className='card-back'>
          <h1 className="name-back">{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Seasons:</strong> {item.appearance.join(', ')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
