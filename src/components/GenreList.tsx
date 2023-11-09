import React from 'react'
import useGenre from '../hooks/useGenres'

const GenreList = () => {
    const {Genres}=useGenre()
  return (
    <div>
      <ul>
        {Genres.map(gener=><li key={gener.id}>{gener.name}</li>)}
      </ul>
    </div>
  )
}

export default GenreList
