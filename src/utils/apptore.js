import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import userBasedConfigReducer from "./UserBasedConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        userBasedConfig: userBasedConfigReducer,
    }
});
export default appStore;