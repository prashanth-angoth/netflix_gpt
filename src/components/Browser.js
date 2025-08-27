import Header from "./Header";
import useNowPlayingMovies from "../Hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  // const typesOfMovies = [{ title: "Now Playing",API_key:"now_playing" }, { title: "Popular Movies",API_key:"popular" }, { title: "Top Rated Movies",API_key:"top_rated" }, { title: "Upcoming Movies",API_key:"upcoming" }];
  // typesOfMovies.forEach((movie) => {
    useNowPlayingMovies("now_playing");
    useNowPlayingMovies("popular");
    useNowPlayingMovies("top_rated");
    useNowPlayingMovies("upcoming");  
  // });

  const gptSearchVisible = useSelector((state) => state.gpt.toggleGptSearchView);
  return (
    <div>
      <Header />
      {gptSearchVisible && <GptSearch />}
      {!gptSearchVisible && <MainContainer />}
      {!gptSearchVisible && <SecondaryContainer />}
    </div>
  );
};

export default Browser;
