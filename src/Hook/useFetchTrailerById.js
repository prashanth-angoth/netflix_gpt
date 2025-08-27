import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useFetchTrailerById = (movieId) => {
  const [videoTrailer, setVideoTrailer] = useState([]);
  useEffect(() => {
    const fetchMovieById = async () => {
      if (!movieId) {
        setVideoTrailer([]);
        return;
      }
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        const trailers =
          json?.results?.filter((video) => video?.type === "Trailer") || [];
        setVideoTrailer(trailers);
      } catch (error) {
        setVideoTrailer([]);
      }
    };
    fetchMovieById();
  }, [movieId]);
  return videoTrailer;
};

export default useFetchTrailerById;
