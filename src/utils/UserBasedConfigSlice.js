import { createSlice } from "@reduxjs/toolkit";

const UserBasedConfigSlice = createSlice({
  name: "userBasedConfig",
  initialState: {
    lang: "English",
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = UserBasedConfigSlice.actions;

export default UserBasedConfigSlice.reducer;
