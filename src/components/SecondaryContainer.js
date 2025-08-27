import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(state => state.movie?.nowPlayingMovies);
    const popularMovies = useSelector(state => state.movie?.popularMovies);
    const topRatedMovies = useSelector(state => state.movie?.topRatedMovies);
    const upcomingMovies = useSelector(state => state.movie?.upcomingMovies);

  return (
    movies && (
      <div className='grid bg-black'>
        <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Popular Movies"} movies={popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      </div>
    )
  )
}

export default SecondaryContainer
