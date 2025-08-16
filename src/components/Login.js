import React, { useRef, useState } from "react";
import validation from "../utils/validation";
import Header from "./Header";
import { setSignedIn } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [userSignIn, setUserSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  function toggleSignUp() {
    setUserSignIn(!userSignIn);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    const result = validation(email.current.value, password.current.value);
    setErrorMessage(result);
    console.log(result);
    if (result !== "Valid") return;
    // Place further logic here for successful validation (e.g., API call)
    if (!userSignIn) {
      // Logic for Sign Up
      console.log("User signed up");

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setUserSignIn(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Logic for Sign In
      console.log("User signed in");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in successfully");
          dispatch(
            setUserDetails({
              
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            })
          );
          console.log("User details set in Redux store");
            console.log("before hitting browser");
            dispatch(setSignedIn(true));
          navigate("/browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
        />
      </div>
      <form className="bg-black bg-opacity-50 flex flex-col items-center w-[35rem] h-[35rem] justify-center absolute ml-[30rem] mt-[10rem] my-4 rounded-lg">
        <p className="text-white text-3xl font-bold p-4 m-4 mx-0">
          {!!userSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!userSignIn && (
          <input ref={name}
            type="userName"
            placeholder="user name"
            className="w-96 h-12 p-4 m-4 my-2 rounded-sm"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email or phone number"
          className="w-96 h-12 p-4 m-4 my-2 rounded-sm"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-96 h-12 p-4 m-4 my-2 rounded-sm"
        />
        {errorMessage !== "Valid" && errorMessage !== "" && (
          <p className="w-96 h-12 font-bold text-red-800">{errorMessage}</p>
        )}
        <button
          onClick={handleSubmit}
          className="bg-red-600 p-2 my-8 w-[384px] rounded-sm"
        >
          {!userSignIn ? "Sign Up" : "Sign In"}
        </button>
        <h4 className="text-white">
          <span>
            {!userSignIn ? "ALready have account? " : "New to Netflix? "}
          </span>
          <span
            className="text-blue-600 hover:cursor-pointer"
            onClick={() => toggleSignUp()}
          >
            {!userSignIn ? "Sign In" : "sign up now"}
          </span>
        </h4>
        <h4 className="text-white m-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-600">Learn more</span>
        </h4>
      </form>
    </div>
  );
};

export default Login;
