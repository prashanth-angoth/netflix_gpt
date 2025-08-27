import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { clearUserDetails, setUserDetails } from "../utils/userSlice";
import { setSignedIn } from "../utils/userSlice";
import { LOGO, USER_AVATAR, languagePref } from "../utils/Constants";
import { Button } from "@mui/material";
import { toggleGptSearchView } from "../utils/gptSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { setLang } from "../utils/UserBasedConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    // Sign out logic here
    signOut(auth)
      .then(() => {
        dispatch(clearUserDetails());
        // dispatch(setSignedIn(false));
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(setUserDetails({ uid, email, displayName }));
        navigate("/browser");

        // ...
      } else {
        dispatch(clearUserDetails());
        navigate("/");
        // User is signed out
        // ...
      }
    });
  }, []);
  const signOutHide = useSelector((state) => state.user.userDetails.uid);
  const lang = useSelector((state) => state.userBasedConfig.lang);
  const gptSearchView = useSelector((state) => state.gpt.toggleGptSearchView);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleChange = (e) => {
    dispatch(setLang(e.target.value));
  };
  return (
    <div className="w-full absolute flex z-10 justify-between bg-gradient-to-b from-black">
      <img className="w-40" src={LOGO} alt="Netflix Logo" />
      <div className="flex items-center gap-1">
        {gptSearchView && signOutHide &&<FormControl>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            className="bg-white text-black w-[120px] h-10"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
            value={lang}
            onChange={handleChange}
          >
            {languagePref.map((lang) => (
              <MenuItem key={lang.code} value={lang.label}>
                {lang.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>}
        {signOutHide && (
          <img
            className="w-10 h-10 rounded-s"
            src={USER_AVATAR}
            alt="profile"
          />
        )}
        {signOutHide && (
          <button
            onClick={() => {
              handleGptSearchClick();
            }}
            className="text-white bg-purple-700 rounded-lg text-xl m-2 p-2 hover:bg-purple-500 font-bold"
          >
           {gptSearchView ? "Home Page" : "Gpt Search"}
          </button>
        )}
        {signOutHide && (
          <button
            onClick={handleSignout}
            className="text-white bg-red-700 rounded-lg text-xl m-2 p-2 hover:bg-red-500 font-bold"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
