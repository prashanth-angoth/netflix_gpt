import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name: "user",
    initialState:{
        userDetails: {},
    } ,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        clearUserDetails: (state) => {
             state.userDetails = {};
        }
    }
})

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;