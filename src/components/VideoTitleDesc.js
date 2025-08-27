import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';


const VideoTitleDesc = ({ title, overview }) => {
  return (
    <div className=" pt-96 px-24 relative w-auto h-auto aspect-video bg-gradient-to-r from-black">
        <p className='text-3xl font-bold text-white p-2'>{title}</p>
        <p className='w-1/2 p-4 text-white'>{overview}</p>
        <div>
            <button className='bg-white text-black p-2 rounded-md m-2 px-10 hover:bg-gray-200'><PlayArrowRoundedIcon/> Play</button>
            <button className='bg-gray-500 text-white p-2 rounded-md m-2 hover:bg-gray-400'><InfoOutlinedIcon/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitleDesc
