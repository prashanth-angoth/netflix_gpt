import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { clearUserDetails, setUserDetails } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
