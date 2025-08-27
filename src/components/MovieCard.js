import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/Constants'

const MovieCard = ({movie}) => {
  return (
 <div className='w-52'>
        <img src={TMDB_IMAGE_URL + movie.poster_path} alt="Movie Poster" />
    </div>
  )
}

export default MovieCard
