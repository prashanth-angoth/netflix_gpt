import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        toggleGptSearchView: false
    },
    reducers: { 
        toggleGptSearchView: (state) => {
            state.toggleGptSearchView = !state.toggleGptSearchView;
        }
    }
})

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;