import React, { useRef, useState } from "react";
import validation from "../utils/validation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/Constants";

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
    const result = validation(email.current.value, password.current.value);
    setErrorMessage(result);
    if (result !== "Valid") return;
    // Place further logic here for successful validation (e.g., API call)
    if (!userSignIn) {
      // Logic for Sign Up

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
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            setUserDetails({
              
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            })
          );
            // dispatch(setSignedIn(true));
          // navigate("/browser");
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
          src={BACKGROUND_IMAGE}
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
