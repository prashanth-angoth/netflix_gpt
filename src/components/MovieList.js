import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  return (
    <div className='grid overflow-x-scroll no-scrollbar'>
        <h2 className='text-white text-2xl font-bold p-2'>{title}</h2>
        <div>
            <div className='flex'>
                {movies?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

            </div>
                
        
        </div>
    </div>
  )
}

export default MovieList
