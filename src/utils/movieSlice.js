import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers: {
        setMovies: (state, action) => {
            state.nowPlayingMovies =  action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        clearMovies: () => {
            return [];
        }
    }

})

export const { setMovies, clearMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
