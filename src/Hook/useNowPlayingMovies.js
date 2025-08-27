import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { setMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = ( apiKey ) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    let url = "";
    switch (apiKey) {
      case "now_playing":
        url = "https://api.themoviedb.org/3/movie/" + apiKey + "?page=1";
        const data1 = await fetch(
          url,
          API_OPTIONS
        );
        const json1 = await data1.json();
        dispatch(setMovies(json1.results));
        break;
      case "popular":
        url = "https://api.themoviedb.org/3/movie/" + apiKey + "?page=1";
        const data2 = await fetch(
          url,
          API_OPTIONS
        );
        const json2 = await data2.json();
        dispatch(setPopularMovies(json2.results));
        break;
      case "top_rated":
        url = "https://api.themoviedb.org/3/movie/" + apiKey + "?page=1";
        const data3 = await fetch(
          url,
          API_OPTIONS
        );
        const json3 = await data3.json();
        dispatch(setTopRatedMovies(json3.results));
        break;
      case "upcoming":
        url = "https://api.themoviedb.org/3/movie/" + apiKey + "?page=1";
        const data4 = await fetch(
          url,
          API_OPTIONS
        );
        const json4 = await data4.json();
        dispatch(setUpcomingMovies(json4.results));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getNowPlayingMovies(apiKey);
  }, []);
};

export default useNowPlayingMovies;
