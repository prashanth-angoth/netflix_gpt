import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name: "user",
    initialState:{
        userDetails: {},
        signedIn: false
    } ,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        setSignedIn:(state,action)=>{
            state.signedIn = action.payload;
        },
        clearUserDetails: (state) => {
             state.userDetails = {};
        }
    }
})

export const { setUserDetails, clearUserDetails,setSignedIn } = userSlice.actions;
export default userSlice.reducer;