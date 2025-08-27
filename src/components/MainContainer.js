import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitleDesc from './VideoTitleDesc';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(state=>state.movie?.nowPlayingMovies);
    if(!movies || movies.length === 0) return; 
    const {title, overview,id} = movies[2];
  return (
    <div className='bg-black'>
        <VideoBackground movieId={id}/>
        <VideoTitleDesc  title={title} overview={overview}/>
        
      
    </div>
  )
}

export default MainContainer
