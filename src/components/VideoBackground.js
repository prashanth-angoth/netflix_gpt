import React, {  use, useEffect, useState } from "react";
import useFetchTrailerById from "../Hook/useFetchTrailerById";

const VideoBackground = ({ movieId }) => {
    const [trailerId, setTrailId] = useState(null);
  const videoTrailer = useFetchTrailerById(movieId);
    useEffect(() => {
    if (!videoTrailer || videoTrailer.length === 0) return;
   if (videoTrailer && videoTrailer.length > 0) {
        setTrailId(videoTrailer[0]?.key);
      }
    }, [videoTrailer]);
    if (!videoTrailer || videoTrailer.length === 0) return null;
  return (
    <div className="absolute inset-0">
      <iframe
        className="w-auto h-auto aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId+"?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
